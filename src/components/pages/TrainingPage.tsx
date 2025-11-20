import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { ArrowRight, Zap, Users, TrendingUp, BookOpen, Award, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TrainingPage() {
  const trainingLevels = [
    {
      id: 1,
      title: 'Freshers Program',
      description: 'Perfect for those just starting their professional journey',
      icon: Lightbulb,
      features: [
        'Foundational concepts and best practices',
        'Hands-on practical exercises',
        'Industry fundamentals',
        'Career guidance and mentorship',
        'Certification preparation'
      ],
      color: 'bg-blue-50',
      borderColor: 'border-blue-200',
      accentColor: 'text-blue-600'
    },
    {
      id: 2,
      title: 'Beginners Track',
      description: 'Ideal for professionals new to the platform ecosystem',
      icon: BookOpen,
      features: [
        'Core platform architecture',
        'Essential configuration skills',
        'Real-world use cases',
        'Interactive labs and projects',
        'Community support access'
      ],
      color: 'bg-amber-50',
      borderColor: 'border-amber-200',
      accentColor: 'text-amber-600'
    },
    {
      id: 3,
      title: '1-3 Years Experience',
      description: 'For professionals with some platform experience',
      icon: TrendingUp,
      features: [
        'Advanced configuration techniques',
        'Integration patterns and practices',
        'Performance optimization',
        'Complex business scenarios',
        'Professional certification paths'
      ],
      color: 'bg-green-50',
      borderColor: 'border-green-200',
      accentColor: 'text-green-600'
    },
    {
      id: 4,
      title: 'Intermediate Level',
      description: 'For experienced professionals seeking mastery',
      icon: Award,
      features: [
        'Advanced development techniques',
        'Enterprise architecture patterns',
        'Custom solutions and extensions',
        'Leadership and mentoring skills',
        'Expert-level certifications'
      ],
      color: 'bg-purple-50',
      borderColor: 'border-purple-200',
      accentColor: 'text-purple-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
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
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className={`font-paragraph transition-colors relative group ${
                      item === 'Training' ? 'text-primary font-semibold' : 'text-secondary-foreground hover:text-primary'
                    }`}
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section 
        className="relative w-full max-w-[120rem] mx-auto min-h-[80vh] flex items-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated Background with rays effect */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>
          <motion.div 
            className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          ></motion.div>
          <motion.div 
            className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          ></motion.div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
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
                <span className="font-paragraph text-primary bg-primary/10 px-4 py-2 rounded-full text-sm font-semibold">
                  PROFESSIONAL DEVELOPMENT
                </span>
              </motion.div>
              <motion.h1 
                className="font-heading text-5xl lg:text-6xl font-bold mb-6 leading-tight text-secondary-foreground"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Elevate Your
                <br />
                <span className="text-primary">Professional Skills</span>
              </motion.h1>
              <motion.p 
                className="font-paragraph text-xl mb-8 text-secondary-foreground/80 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Comprehensive training programs designed for professionals at every level. Whether you're just starting out or looking to master advanced techniques, we have the right program for you.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link to="#programs">
                      Explore Programs
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Link to="/contact">Get in Touch</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-2xl"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              ></motion.div>
              <Image 
                src="https://static.wixstatic.com/media/a1e0df_5d511c9524e34fd6904f2b2721f19679~mv2.png?originWidth=576&originHeight=896"
                alt="Professional training and development"
                className="relative z-10 rounded-3xl shadow-2xl"
                width={600}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Training Programs Section */}
      <section id="programs" className="py-20 bg-secondary">
        <div className="max-w-[100rem] mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6">
              Training Programs for Every Level
            </h2>
            <p className="font-paragraph text-xl text-secondary-foreground/80 max-w-3xl mx-auto">
              Choose the program that matches your experience level and career goals. Each program is carefully designed to provide practical, hands-on learning.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {trainingLevels.map((level) => {
              const IconComponent = level.icon;
              return (
                <motion.div
                  key={level.id}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  <Card className={`group hover:shadow-xl transition-all duration-300 border-2 ${level.borderColor} ${level.color} h-full`}>
                    <CardHeader>
                      <motion.div 
                        className={`${level.accentColor} mb-4`}
                        whileHover={{ rotate: 10, scale: 1.1 }}
                      >
                        <IconComponent className="h-10 w-10" />
                      </motion.div>
                      <CardTitle className="font-heading text-2xl font-bold text-secondary-foreground">
                        {level.title}
                      </CardTitle>
                      <p className="font-paragraph text-secondary-foreground/70 mt-2">
                        {level.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-6">
                        {level.features.map((feature, idx) => (
                          <motion.div 
                            key={idx} 
                            className="flex items-start space-x-3"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            viewport={{ once: true }}
                          >
                            <div className={`${level.accentColor} mt-1 flex-shrink-0`}>
                              <Zap className="h-4 w-4" />
                            </div>
                            <span className="font-paragraph text-secondary-foreground text-sm">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                          <Link to="/contact">
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our Training */}
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
                Why Choose Our Training Programs?
              </h2>
              <p className="font-paragraph text-xl text-secondary-foreground/80 mb-8 leading-relaxed">
                Our training programs are designed by industry experts with years of experience. We focus on practical, real-world skills that you can apply immediately.
              </p>
              <div className="space-y-6">
                {[
                  { icon: Users, title: 'Expert Instructors', desc: 'Learn from certified professionals with extensive industry experience and proven track records.' },
                  { icon: Lightbulb, title: 'Practical Learning', desc: 'Hands-on labs, real-world projects, and interactive exercises that prepare you for actual work scenarios.' },
                  { icon: Award, title: 'Certification Support', desc: 'Comprehensive preparation for industry certifications to advance your career and credentials.' },
                  { icon: TrendingUp, title: 'Career Growth', desc: 'Mentorship and guidance to help you advance your career and achieve your professional goals.' }
                ].map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div 
                      key={idx}
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                      >
                        <IconComponent className="h-6 w-6 text-primary" />
                      </motion.div>
                      <div>
                        <h3 className="font-heading text-lg font-bold text-secondary-foreground mb-2">
                          {item.title}
                        </h3>
                        <p className="font-paragraph text-secondary-foreground/70">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-2xl"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              ></motion.div>
              <Image 
                src="https://static.wixstatic.com/media/a1e0df_6d6305cd176046c9b5447ca78ac18123~mv2.png?originWidth=1920&originHeight=1024"
                alt="Professional development and training environment"
                className="relative z-10 rounded-3xl shadow-2xl"
                width={600}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-20 bg-secondary">
        <div className="max-w-[100rem] mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6">
              Flexible Learning Paths
            </h2>
            <p className="font-paragraph text-xl text-secondary-foreground/80 max-w-3xl mx-auto">
              Choose how you want to learn - we offer multiple formats to fit your schedule and learning style.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: BookOpen, title: 'Self-Paced Online', features: ['Flexible schedule', 'Lifetime access', 'Community support'] },
              { icon: Users, title: 'Live Instructor-Led', features: ['Real-time interaction', 'Expert guidance', 'Networking opportunities'] },
              { icon: Award, title: 'Hybrid Programs', features: ['Flexibility + interaction', 'Personalized support', 'Comprehensive learning'] }
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div key={idx} variants={itemVariants}>
                  <Card className="border-0 bg-white hover:shadow-lg transition-all h-full">
                    <CardHeader>
                      <motion.div 
                        className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                      >
                        <IconComponent className="h-7 w-7 text-primary" />
                      </motion.div>
                      <CardTitle className="font-heading text-xl font-bold text-secondary-foreground">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="font-paragraph text-secondary-foreground/70 mb-4">
                        {idx === 0 && 'Learn at your own pace with lifetime access to course materials, videos, and resources.'}
                        {idx === 1 && 'Interactive sessions with expert instructors, Q&A, and real-time feedback.'}
                        {idx === 2 && 'Combine self-paced learning with live sessions for the best of both worlds.'}
                      </p>
                      <ul className="space-y-2 text-sm font-paragraph text-secondary-foreground/70">
                        {item.features.map((feature, fidx) => (
                          <motion.li 
                            key={fidx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: fidx * 0.05 }}
                            viewport={{ once: true }}
                          >
                            ✓ {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-primary text-primary-foreground"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-[100rem] mx-auto px-6 text-center">
          <motion.h2 
            className="font-heading text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Start Your Learning Journey?
          </motion.h2>
          <motion.p 
            className="font-paragraph text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Join hundreds of professionals who have advanced their careers through our comprehensive training programs.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/contact">
                  Enroll Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/">
                  Learn More About Us
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

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
                  className="w-12 h-12 rounded-lg"
                  width={48}
                />
                <span className="font-heading text-2xl font-bold text-primary">SFrays</span>
              </Link>
              <p className="font-paragraph text-white/80 mb-6 max-w-md leading-relaxed">
                Empowering professionals to achieve their full potential through innovative training programs and expert guidance.
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
              <h4 className="font-heading text-lg font-bold mb-4">Training</h4>
              <ul className="space-y-2">
                <li><Link to="/training" className="font-paragraph text-white/80 hover:text-primary transition-colors">Training Programs</Link></li>
                <li><Link to="/training#programs" className="font-paragraph text-white/80 hover:text-primary transition-colors">All Levels</Link></li>
                <li><Link to="/contact" className="font-paragraph text-white/80 hover:text-primary transition-colors">Enroll Now</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="font-paragraph text-white/80 hover:text-primary transition-colors">Home</Link></li>
                <li><Link to="/services" className="font-paragraph text-white/80 hover:text-primary transition-colors">Services</Link></li>
                <li><Link to="/contact" className="font-paragraph text-white/80 hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-12 pt-8 text-center">
            <p className="font-paragraph text-white/60">
              © 2024 SFrays. All rights reserved.
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
