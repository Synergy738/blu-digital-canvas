
import React, { useState } from 'react';
import { Phone, Linkedin, Github, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`New Project Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `Service: ${formData.service}\n` +
        `Timeline: ${formData.timeline}\n\n` +
        `Message:\n${formData.message}`
      );
      
      const mailtoLink = `mailto:bludennis17@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;

      toast({
        title: "Email client opened!",
        description: "Your default email client should open with the message pre-filled.",
      });
      
      setFormData({ name: '', email: '', phone: '', service: '', timeline: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an issue opening your email client. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/blu-dennis-b40136278",
      label: "LinkedIn"
    },
    {
      icon: <Github size={20} />,
      href: "https://github.com/Synergy738",
      label: "GitHub"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Hire Me</h2>
          <p className="text-gray-400">
            Cultivating Connections: Reach Out And Connect With Me
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#262626] p-8 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-gray-300 mb-2 block">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-[#1a1a1a] border-gray-600 text-white placeholder-gray-400 focus:border-[#497adb]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-300 mb-2 block">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-[#1a1a1a] border-gray-600 text-white placeholder-gray-400 focus:border-[#497adb]"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone" className="text-gray-300 mb-2 block">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-[#1a1a1a] border-gray-600 text-white placeholder-gray-400 focus:border-[#497adb]"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <Label htmlFor="service" className="text-gray-300 mb-2 block">Service Of Interest</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-[#1a1a1a] border border-gray-600 text-white placeholder-gray-400 focus:border-[#497adb] rounded-md px-3 py-2"
                  >
                    <option value="">Select a service</option>
                    <option value="website">Website Development</option>
                    <option value="app">App Development</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="ml">Machine Learning</option>
                    <option value="fullstack">Full-Stack Solutions</option>
                  </select>
                </div>
              </div>

              <div>
                <Label htmlFor="timeline" className="text-gray-300 mb-2 block">Timeline</Label>
                <Input
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="bg-[#1a1a1a] border-gray-600 text-white placeholder-gray-400 focus:border-[#497adb]"
                  placeholder="Project timeline"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-gray-300 mb-2 block">Project Details...</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-[#1a1a1a] border-gray-600 text-white placeholder-gray-400 focus:border-[#497adb]"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <div className="text-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#497adb] hover:bg-[#3a68c7] text-white px-8 py-3 rounded-md font-medium transition-all duration-300 hover:scale-105"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Opening Email...
                    </>
                  ) : (
                    <>
                      <Send size={16} className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </div>
            </form>

            {/* Contact Info and Social Links */}
            <div className="mt-12 pt-8 border-t border-gray-700">
              <div className="flex flex-col items-center gap-6">
                {/* Phone Number - Centered */}
                <div className="flex items-center gap-2 text-gray-400">
                  <Phone size={16} />
                  <span>+27 64 766 9310</span>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#497adb] transition-all duration-300"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
