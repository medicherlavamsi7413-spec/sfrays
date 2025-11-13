import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { ArrowRight, Cloud, Database, Users, Zap, Settings, BookOpen, HeadphonesIcon, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { BaseCrudService } from '@/integrations';
import { Services } from '@/entities';

export default function ServicesPage() {
  const [services, setServices] = useState<Services[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { items } = await BaseCrudService.getAll<Services>('services');
        setServices(items);
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchServices();
  }, []);

  const serviceIcons = [
    Cloud,
    Database,
    Users,
    Zap,
    Settings,
    BookOpen,
    HeadphonesIcon,
    TrendingUp
  ];

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
                className="w-24 h-16 rounded-lg object-cover"
                width={96}
              />
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="font-paragraph text-secondary-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/services" className="font-paragraph text-primary font-semibold">
                Services
              </Link>
              <Link to="/contact" className="font-paragraph text-secondary-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80"></div>
        <div className="relative z-10 max-w-[100rem] mx-auto px-6">
          <div className="text-center">
            <h1 className="font-heading text-5xl lg:text-6xl font-bold mb-6">
              Our Salesforce Services
            </h1>
            <p className="font-paragraph text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Comprehensive Salesforce solutions designed to transform your business operations, enhance customer relationships, and drive sustainable growth across your organization.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-secondary">
        <div className="max-w-[100rem] mx-auto px-6">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <Card key={index} className="animate-pulse">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gray-300 rounded-lg mb-4"></div>
                    <div className="h-6 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-300 rounded"></div>
                      <div className="h-4 bg-gray-300 rounded"></div>
                      <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : services.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = serviceIcons[index % serviceIcons.length];
                return (
                  <Card key={service._id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                    <CardHeader>
                      <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="font-heading text-xl font-bold text-secondary-foreground">
                        {service.serviceName}
                      </CardTitle>
                      <p className="font-paragraph text-secondary-foreground/70">
                        {service.shortDescription}
                      </p>
                    </CardHeader>
                    <CardContent>
                      {service.serviceImage && (
                        <div className="mb-4">
                          <Image 
                            src={service.serviceImage}
                            alt={service.serviceName || 'Service image'}
                            className="w-full h-48 object-cover rounded-lg"
                            width={400}
                          />
                        </div>
                      )}
                      <p className="font-paragraph text-secondary-foreground/80 mb-4 leading-relaxed">
                        {service.detailedDescription}
                      </p>
                      {service.keyBenefits && (
                        <div className="mb-4">
                          <h4 className="font-heading font-semibold text-secondary-foreground mb-2">Key Benefits:</h4>
                          <p className="font-paragraph text-sm text-secondary-foreground/70">
                            {service.keyBenefits}
                          </p>
                        </div>
                      )}
                      {service.learnMoreUrl && (
                        <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                          <a href={service.learnMoreUrl} target="_blank" rel="noopener noreferrer">
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="font-heading text-2xl font-bold text-secondary-foreground mb-4">
                Our Services Are Coming Soon
              </h3>
              <p className="font-paragraph text-secondary-foreground/70 mb-8">
                We're currently updating our services catalog. Please contact us directly to learn about our comprehensive Salesforce solutions.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Core Services Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-[100rem] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6">
              Core Service Areas
            </h2>
            <p className="font-paragraph text-xl text-secondary-foreground/80 max-w-3xl mx-auto">
              Our expertise spans the entire Salesforce ecosystem, ensuring comprehensive solutions for your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Cloud className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-secondary-foreground mb-2">
                Implementation
              </h3>
              <p className="font-paragraph text-sm text-secondary-foreground/70">
                End-to-end Salesforce implementation and migration services
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Settings className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-secondary-foreground mb-2">
                Customization
              </h3>
              <p className="font-paragraph text-sm text-secondary-foreground/70">
                Custom development and configuration to fit your unique needs
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Database className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-secondary-foreground mb-2">
                Integration
              </h3>
              <p className="font-paragraph text-sm text-secondary-foreground/70">
                Seamless integration with existing systems and third-party apps
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <HeadphonesIcon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-secondary-foreground mb-2">
                Support
              </h3>
              <p className="font-paragraph text-sm text-secondary-foreground/70">
                Ongoing support, maintenance, and optimization services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-[100rem] mx-auto px-6 text-center">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="font-paragraph text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our Salesforce expertise can help you achieve your business goals and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/">
                Learn More About Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary-foreground text-white py-16">
        <div className="max-w-[100rem] mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link to="/" className="flex items-center space-x-3 mb-6">
                <Image 
                  src="https://static.wixstatic.com/media/a1e0df_9660d1237dfb40138b4c81655ee6abee~mv2.jpeg"
                  alt="SFrays Logo"
                  className="w-12 h-12 rounded-lg"
                  width={48}
                />
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
      </footer>
    </div>
  );
}