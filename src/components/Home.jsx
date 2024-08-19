import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { Button } from './ui/button';
import { ArrowRight, Github, Linkedin, Mail, Flower } from 'lucide-react';
import { Avatar, AvatarImage } from './ui/avatar';
import Meteors from './magicui/meteors';

const roles = ["Full Stack Developer", "Web Developer", "UI Designer"];

const Home = () => {
    const [currentRole, setCurrentRole] = useState(0);
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container mx-auto px-4 min-h-[calc(100vh-6rem)] flex items-center relative overflow-hidden">
            <Meteors number={isMobile ? 10 : 20} />
            {!isMobile && (
                <>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="absolute top-10 right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl z-0"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="absolute bottom-10 left-10 w-48 h-48 bg-primary/20 rounded-full blur-3xl z-0"
                    />
                </>
            )}
            <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'} gap-8 items-center w-full relative z-10`}>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-left"
                >
                    <div className="h-4 mb-6">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={currentRole}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="text-xl text-muted-foreground"
                            >
                                {roles[currentRole]}
                            </motion.p>
                        </AnimatePresence>
                    </div>
                    <h1 className={`${isMobile ? 'text-3xl' : 'text-4xl lg:text-6xl'} font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary relative`}>
                        Hello! I'm Allyza Nadine Ventanilla
                    </h1>
                    <p className="text-lg lg:text-xl text-muted-foreground mb-4">
                        A Software Engineering Student based in Bulacan, Philippines
                    </p>
                    <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} space-y-4 sm:space-y-0 sm:space-x-4 mb-8`}>
                        <Button size={isMobile ? "default" : "lg"} variant="default" className="group">
                            View My Projects <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button size={isMobile ? "default" : "lg"} variant="outline" className="hover:bg-secondary/10">Contact Me</Button>
                    </div>
                    <div className="flex space-x-4">
                        <Button variant="ghost" size="icon" className="hover:bg-primary/10 transition-colors">
                            <Github className="h-6 w-6" />
                        </Button>
                        <Button variant="ghost" size="icon" className="hover:bg-primary/10 transition-colors">
                            <Linkedin className="h-6 w-6" />
                        </Button>
                        <Button variant="ghost" size="icon" className="hover:bg-primary/10 transition-colors">
                            <Mail className="h-6 w-6" />
                        </Button>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={`flex justify-center items-center ${isMobile ? 'mt-8' : ''}`}
                >
                    <div className="relative">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full opacity-30 blur-lg"
                        />
                        <Avatar className={`${isMobile ? 'w-48' : 'w-3/4'} h-auto aspect-square relative z-10`}>
                            <AvatarImage src="/images/picture.png" alt="Aly Nadine Ventanilla" />
                        </Avatar>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;