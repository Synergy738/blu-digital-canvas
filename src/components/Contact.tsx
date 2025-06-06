import React, { useState } from 'react';
import { Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useFadeInOnScroll } from '@/hooks/useFadeInOnScroll';

const Contact = () => {
  const { elementRef, isVisible } = useFadeInOnScroll(0.1, 800);
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

  return (
    <section 
      ref={elementRef}
      id="contact" 
      className={`py-20 bg-gray-800 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Hire Me</h2>
          <p className="text-gray-400">
            Cultivating Connections: Reach Out And Connect With Me
          </p>
        </div>
        
        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-[#262626] p-8 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <Label htmlFor="name" className="text-gray-300 mb-2 block">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-[#1a1a1a] border-gray-600 text-white placeholder-gray-400 focus:border-[#588aef]"
                    placeholder="Your name"
                  />
                </div>
                <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
                  <Label htmlFor="email" className="text-gray-300 mb-2 block">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-[#1a1a1a] border-gray-600 text-white placeholder-gray-400 focus:border-[#588aef]"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
                  <Label htmlFor="phone" className="text-gray-300 mb-2 block">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-[#1a1a1a] border-gray-600 text-white placeholder-gray-400 focus:border-[#588aef]"
                    placeholder="Your phone number"
                  />
                </div>
                <div className="animate-fade-in" style={{ animationDelay: '0.7s' }}>
                  <Label htmlFor="service" className="text-gray-300 mb-2 block">Service Of Interest</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-[#1a1a1a] border border-gray-600 text-white placeholder-gray-400 focus:border-[#588aef] rounded-md px-3 py-2"
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

              <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <Label htmlFor="timeline" className="text-gray-300 mb-2 block">Timeline</Label>
                <Input
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="bg-[#1a1a1a] border-gray-600 text-white placeholder-gray-400 focus:border-[#588aef]"
                  placeholder="Project timeline"
                />
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '0.9s' }}>
                <Label htmlFor="message" className="text-gray-300 mb-2 block">Project Details...</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-[#1a1a1a] border-gray-600 text-white placeholder-gray-400 focus:border-[#588aef]"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <div className="text-center animate-fade-in" style={{ animationDelay: '1s' }}>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#588aef] hover:bg-[#4577e8] text-white px-8 py-3 rounded-md font-medium transition-all duration-300 hover:scale-105"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
