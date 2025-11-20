import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Image } from '@/components/ui/image';
import { Cloud, Users, Zap, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { BaseCrudService } from '@/integrations';
import { ContactSubmissions } from '@/entities';
import { motion } from 'framer-motion';

export default function HomePage() {
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
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-50 bg-white/95 backdrop-blur-sm border-b border-primary/10"
      >
        <div className="max-w-[120rem] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Link to="/">
                <Image 
                  src="https://static.wixstatic.com/media/a1e0df_9660d1237dfb40138b4c81655ee6abee~mv2.jpeg"
                  alt="SFrays Logo"
                  className="w-24 h-16 rounded-lg object-cover"
                  width={96}
                />
              </Link>
            </motion.div>
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'Services', 'Training', 'Contact'].map((item, idx) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link 
                    to={item === 'Home' ? '/' : item === 'Solutions' ? '/#solutions' : `/${item.toLowerCase()}`}
                    className="font-paragraph text-secondary-foreground hover:text-primary transition-colors relative group"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link 
                  to="/#solutions"
                  className="font-paragraph text-secondary-foreground hover:text-primary transition-colors relative group"
                >
                  Solutions
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>
      {/* Hero Section - Full Bleed */}
      <section className="relative w-full max-w-[120rem] mx-auto min-h-[90vh] flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://static.wixstatic.com/media/a1e0df_6d6305cd176046c9b5447ca78ac18123~mv2.png?originWidth=1920&originHeight=1024"
            alt="Modern office environment with Salesforce technology"
            className="w-full h-full object-cover"
            width={1920}
          />
          <motion.div 
            className="absolute inset-0 bg-black/40"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          ></motion.div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              className="text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="font-paragraph text-primary bg-white px-4 py-2 rounded-full text-sm font-semibold inline-flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  TRANSFORMING BUSINESS WITH SALESFORCE
                </span>
              </motion.div>
              <motion.h1 
                className="font-heading text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Salesforce Solutions
                <br />
                <span className="text-primary">That Drive Results</span>
              </motion.h1>
              <motion.p 
                className="font-paragraph text-xl mb-8 text-white/90 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Unlock your business potential with our comprehensive Salesforce consulting, implementation, and optimization services. We help organizations maximize their CRM investment and accelerate growth.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link to="/services">
                      Explore Our Services
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                    <Link to="/#solutions">Learn More</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Contact Form */}
            <motion.div 
              className="lg:ml-auto"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-primary text-primary-foreground shadow-2xl max-w-md">
                  <CardContent className="p-8">
                    {isSubmitted ? (
                      <motion.div 
                        className="text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <CheckCircle className="h-16 w-16 mx-auto mb-4 text-primary-foreground" />
                        </motion.div>
                        <h3 className="font-heading text-2xl font-bold mb-2">Thank You!</h3>
                        <p className="font-paragraph">We'll get back to you within 24 hours.</p>
                        <Button 
                          variant="outline" 
                          className="mt-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                          onClick={() => setIsSubmitted(false)}
                        >
                          Send Another Message
                        </Button>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <h3 className="font-heading text-2xl font-bold mb-2">Get Started Today</h3>
                        <p className="font-paragraph mb-6 text-primary-foreground/90">
                          Ready to transform your business? Let's discuss your Salesforce needs.
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="fullName" className="text-primary-foreground font-paragraph">
                                Full Name *
                              </Label>
                              <Input
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                required
                                className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60"
                                placeholder="John Doe"
                              />
                            </div>
                            <div>
                              <Label htmlFor="phoneNumber" className="text-primary-foreground font-paragraph">
                                Phone
                              </Label>
                              <Input
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60"
                                placeholder="(555) 123-4567"
                              />
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="email" className="text-primary-foreground font-paragraph">
                              Email *
                            </Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60"
                              placeholder="john@company.com"
                            />
                          </div>
                          <div>
                            <Label htmlFor="subject" className="text-primary-foreground font-paragraph">
                              Subject
                            </Label>
                            <Input
                              id="subject"
                              name="subject"
                              value={formData.subject}
                              onChange={handleInputChange}
                              className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60"
                              placeholder="Salesforce Implementation"
                            />
                          </div>
                          <div>
                            <Label htmlFor="message" className="text-primary-foreground font-paragraph">
                              Message
                            </Label>
                            <Textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                              rows={3}
                              className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60"
                              placeholder="Tell us about your project..."
                            />
                          </div>
                          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Button 
                              type="submit" 
                              disabled={isSubmitting}
                              className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                            >
                              {isSubmitting ? 'Sending...' : 'Send Message'}
                            </Button>
                          </motion.div>
                        </form>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-secondary">
        <div className="max-w-[100rem] mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6">
              Why Choose SFrays?
            </h2>
            <p className="font-paragraph text-xl text-secondary-foreground/80 max-w-3xl mx-auto">
              We combine deep Salesforce expertise with industry best practices to deliver solutions that transform your business operations and drive measurable results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Cloud,
                title: 'Cloud Expertise',
                description: 'Comprehensive knowledge across all Salesforce clouds including Sales, Service, Marketing, and Commerce to maximize your platform investment.'
              },
              {
                icon: Users,
                title: 'Proven Track Record',
                description: 'Successfully delivered 200+ Salesforce projects across various industries, helping businesses achieve their digital transformation goals.'
              },
              {
                icon: Zap,
                title: 'Rapid Implementation',
                description: 'Accelerated deployment methodologies that get you up and running quickly while ensuring quality and user adoption.'
              }
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className="text-center group">
                    <motion.div 
                      className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <IconComponent className="h-10 w-10 text-primary" />
                    </motion.div>
                    <h3 className="font-heading text-2xl font-bold text-secondary-foreground mb-4">
                      {item.title}
                    </h3>
                    <p className="font-paragraph text-secondary-foreground/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Services Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-[100rem] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6">
                Comprehensive Salesforce Services
              </h2>
              <p className="font-paragraph text-xl text-secondary-foreground/80 mb-8 leading-relaxed">
                From initial consultation to ongoing support, we provide end-to-end Salesforce services that align with your business objectives and drive sustainable growth.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Implementation & Migration',
                  'Custom Development & Integration',
                  'Training & Change Management',
                  'Ongoing Support & Optimization'
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="font-paragraph text-secondary-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link to="/services">
                    View All Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Image 
                src="https://static.wixstatic.com/media/a1e0df_5d511c9524e34fd6904f2b2721f19679~mv2.png?originWidth=576&originHeight=896"
                alt="Salesforce dashboard and analytics interface"
                className="rounded-2xl shadow-2xl"
                width={600}
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <motion.footer 
        className="bg-secondary-foreground text-white py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-[100rem] mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link to="/" className="flex items-center space-x-3 mb-6">
                <Image 
                  src="https://static.wixstatic.com/media/a1e0df_9660d1237dfb40138b4c81655ee6abee~mv2.jpeg"
                  alt="SFrays Logo"
                  className="w-20 h-14 rounded-lg object-cover"
                  width={80}
                />

              </Link>
              <p className="font-paragraph text-white/80 mb-6 max-w-md leading-relaxed">
                Empowering businesses to achieve their full potential through innovative Salesforce solutions and expert consulting services.
              </p>
              <div className="space-y-2">
                <p className="font-paragraph text-white/80">
                  <strong>Email:</strong> hello@sfrays.com
                </p>
                <p className="font-paragraph text-white/80">
                  <strong>Phone:</strong> 314 499 4093
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
      </motion.footer>
    </div>
  );
}