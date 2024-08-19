import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full py-20 bg-gradient-to-b from-background to-secondary"
        >
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ y: -50 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-10 text-center"
                >
                    Get in Touch
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Card className="bg-card/50 backdrop-blur-sm border-primary/10 shadow-xl">
                            <CardHeader>
                                <CardTitle className="text-2xl font-semibold text-primary">Contact Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <Mail className="text-primary" />
                                    <p className="text-muted-foreground">your.email@example.com</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Phone className="text-primary" />
                                    <p className="text-muted-foreground">+1 234 567 890</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <MapPin className="text-primary" />
                                    <p className="text-muted-foreground">City, Country</p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Card className="bg-card/50 backdrop-blur-sm border-primary/10 shadow-xl">
                            <CardHeader>
                                <CardTitle className="text-2xl font-semibold text-primary">Send a Message</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">Name</label>
                                        <Input id="name" name="name" placeholder="Your Name" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">Email</label>
                                        <Input id="email" name="email" type="email" placeholder="your.email@example.com" />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">Message</label>
                                        <Textarea id="message" name="message" rows="4" placeholder="Your message here..." />
                                    </div>
                                    <Button className="w-full bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-opacity">
                                        <Send className="mr-2 h-4 w-4" /> Send Message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
