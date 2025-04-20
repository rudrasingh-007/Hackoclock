import React, { useState } from 'react';
import { Mail, MessageSquare, Send, User } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        message: ''
      });
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600">
            Have questions about our carbon tracker or suggestions for improvement? 
            We'd love to hear from you!
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2 bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-1">Email Us</h4>
                    <p className="text-gray-600">info@ecotrack.example</p>
                    <p className="text-gray-600">support@ecotrack.example</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <MessageSquare className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-1">Social Media</h4>
                    <p className="text-gray-600">@EcoTrackApp</p>
                    <div className="mt-2 space-x-2">
                      <a href="#" className="text-gray-500 hover:text-green-600 transition-colors">Twitter</a>
                      <a href="#" className="text-gray-500 hover:text-green-600 transition-colors">Facebook</a>
                      <a href="#" className="text-gray-500 hover:text-green-600 transition-colors">Instagram</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-gray-100">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Subscribe to our Newsletter</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Get the latest sustainability tips and updates on our features.
                </p>
                <form className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <button 
                    type="submit"
                    className="bg-green-600 text-white px-4 py-2 rounded-r-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            
            <div className="md:col-span-3 bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Send Us a Message</h3>
              
              {isSubmitted ? (
                <div className="bg-green-100 border-l-4 border-green-500 p-4 mb-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Send className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-green-700">
                        Thank you for your message! We'll get back to you as soon as possible.
                      </p>
                    </div>
                  </div>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <MessageSquare className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 flex justify-center items-center rounded-md ${
                    isSubmitting ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'
                  } text-white font-medium focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;