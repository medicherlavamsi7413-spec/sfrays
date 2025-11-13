import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { BaseCrudService } from '@/integrations';
import { ContactSubmissions } from '@/entities';
import { Image } from '@/components/ui/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const submission: ContactSubmissions = {
        _id: crypto.randomUUID(),
        ...formData,
        submissionDate: new Date()
      };
      
      await BaseCrudService.create('contactsubmissions', submission);
      setIsSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="relative z-50 bg-white/95 backdrop-blur-sm border-b border-primary/10">
        <div className="max-w-[120rem] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Image 
                src="https://static.wixstatic.com/media/a1e0df_9660d1237dfb40138b4c81655ee6abee~mv2.jpeg"
                alt="SFrays Logo"
                className="w-16 h-16 rounded-lg"
                width={64}
              />
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="font-paragraph text-secondary-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/services" className="font-paragraph text-secondary-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link to="/contact" className="font-paragraph text-primary font-semibold">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-[100rem] mx-auto px-6 text-center">
          <h1 className="font-heading text-5xl lg:text-6xl font-bold mb-6">
            Get In Touch
          </h1>
          <p className="font-paragraph text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Ready to transform your business with Salesforce? We're here to help you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-secondary">
        <div className="max-w-[100rem] mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="font-heading text-3xl font-bold text-secondary-foreground mb-8">
                Let's Start a Conversation
              </h2>
              <p className="font-paragraph text-secondary-foreground/80 mb-8 leading-relaxed">
                Whether you're looking to implement Salesforce for the first time, optimize your existing setup, or need ongoing support, our team of experts is ready to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-secondary-foreground mb-1">Email Us</h3>
                    <p className="font-paragraph text-secondary-foreground/70">hello@sfrays.com</p>
                    <p className="font-paragraph text-sm text-secondary-foreground/60">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-secondary-foreground mb-1">Call Us</h3>
                    <p className="font-paragraph text-secondary-foreground/70">314 499 4093</p>
                    <p className="font-paragraph text-sm text-secondary-foreground/60">Monday - Friday, 9AM - 6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-secondary-foreground mb-1">Visit Us</h3>
                    <p className="font-paragraph text-secondary-foreground/70">
                      123 Business District<br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-secondary-foreground mb-1">Business Hours</h3>
                    <p className="font-paragraph text-secondary-foreground/70">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl font-bold text-secondary-foreground">
                    Send Us a Message
                  </CardTitle>
                  <p className="font-paragraph text-secondary-foreground/70">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <CheckCircle className="h-16 w-16 mx-auto mb-6 text-primary" />
                      <h3 className="font-heading text-2xl font-bold text-secondary-foreground mb-4">
                        Thank You for Reaching Out!
                      </h3>
                      <p className="font-paragraph text-secondary-foreground/80 mb-6 max-w-md mx-auto">
                        We've received your message and will get back to you within 24 hours. Our team is excited to help you with your Salesforce journey.
                      </p>
                      <Button 
                        onClick={() => setIsSubmitted(false)}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="fullName" className="font-paragraph text-secondary-foreground">
                            Full Name *
                          </Label>
                          <Input
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            required
                            className="mt-2"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="font-paragraph text-secondary-foreground">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="mt-2"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="phoneNumber" className="font-paragraph text-secondary-foreground">
                            Phone Number
                          </Label>
                          <Input
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            className="mt-2"
                            placeholder="(555) 123-4567"
                          />
                        </div>
                        <div>
                          <Label htmlFor="subject" className="font-paragraph text-secondary-foreground">
                            Subject
                          </Label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            className="mt-2"
                            placeholder="Salesforce Implementation"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message" className="font-paragraph text-secondary-foreground">
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={6}
                          className="mt-2"
                          placeholder="Tell us about your project, goals, and how we can help you succeed with Salesforce..."
                        />
                      </div>

                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                        size="lg"
                      >
                        {isSubmitting ? 'Sending Message...' : 'Send Message'}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-[100rem] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-secondary-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="font-paragraph text-xl text-secondary-foreground/80 max-w-2xl mx-auto">
              Quick answers to common questions about our Salesforce services and process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-heading text-lg font-bold text-secondary-foreground mb-3">
                How long does a typical Salesforce implementation take?
              </h3>
              <p className="font-paragraph text-secondary-foreground/70 mb-6">
                Implementation timelines vary based on complexity, but most projects range from 6-16 weeks. We'll provide a detailed timeline during our initial consultation.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-bold text-secondary-foreground mb-3">
                Do you provide training for our team?
              </h3>
              <p className="font-paragraph text-secondary-foreground/70 mb-6">
                Yes! We include comprehensive training as part of our implementation process, ensuring your team is confident and productive from day one.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-bold text-secondary-foreground mb-3">
                What ongoing support do you offer?
              </h3>
              <p className="font-paragraph text-secondary-foreground/70 mb-6">
                We offer various support packages including system maintenance, user support, feature enhancements, and strategic consulting to help you maximize your ROI.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-bold text-secondary-foreground mb-3">
                Can you integrate Salesforce with our existing systems?
              </h3>
              <p className="font-paragraph text-secondary-foreground/70 mb-6">
                Absolutely. We specialize in integrating Salesforce with ERP systems, marketing platforms, financial software, and other business-critical applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary-foreground text-white py-16">
        <div className="max-w-[100rem] mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link to="/" className="flex items-center space-x-3 mb-6">
                <Image src="https://static.wixstatic.com/media/a1e0df_9660d1237dfb40138b4c81655ee6abee~mv2.jpeg" alt="SFrays Logo" className="w-12 h-12 rounded-lg" width={48} />
                <span className="font-heading text-2xl font-bold text-primary">SFrays</span>
              </Link>
              <p className="font-paragraph text-white/80 mb-6 max-w-md leading-relaxed">
                Empowering businesses to achieve their full potential through innovative Salesforce solutions and expert consulting services.
              </p>
              <div className="space-y-2">
                <p className="font-paragraph text-white/80">
                  <strong>Email:</strong> hello@sfrays.com
                </p>
                <p className="font-paragraph text-white/80">
                  <strong>Phone:</strong> (555) 123-4567
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="font-heading text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><Link to="/services" className="font-paragraph text-white/80 hover:text-primary transition-colors">Implementation</Link></li>
                <li><Link to="/services" className="font-paragraph text-white/80 hover:text-primary transition-colors">Custom Development</Link></li>
                <li><Link to="/services" className="font-paragraph text-white/80 hover:text-primary transition-colors">Integration</Link></li>
                <li><Link to="/services" className="font-paragraph text-white/80 hover:text-primary transition-colors">Training</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="font-paragraph text-white/80 hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="/services" className="font-paragraph text-white/80 hover:text-primary transition-colors">Our Services</Link></li>
                <li><Link to="/contact" className="font-paragraph text-white/80 hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-12 pt-8 text-center">
            <p className="font-paragraph text-white/60">
              © 2024 SFrays. All rights reserved. Salesforce and related trademarks are property of Salesforce.com, Inc.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}