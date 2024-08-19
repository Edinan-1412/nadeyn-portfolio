import React from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowRight, Book, Code, Lightbulb, Award, Briefcase, Globe } from 'lucide-react';
import GridPattern from './magicui/animated-grid-pattern';

const About = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-accent/10 relative overflow-hidden">
            <GridPattern
                width={40}
                height={40}
                className="absolute inset-0 z-0 opacity-20"
            />
            <div className="container mx-auto px-4 py-12 relative z-10">
                <motion.h1
                    className={`${isMobile ? 'text-4xl' : 'text-6xl'} font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    About Me
                </motion.h1>
                <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'} gap-12 items-start`}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl'} font-bold tracking-tight mb-4`}>My Journey</h2>
                        <p className={`${isMobile ? 'text-base' : 'text-lg'} text-muted-foreground`}>
                            As a passionate software engineering student, I've embarked on an exciting journey of continuous learning and innovation. My keen interest in web development and UI design drives me to create solutions that not only function flawlessly but also provide exceptional user experiences.
                        </p>
                        <p className={`${isMobile ? 'text-base' : 'text-lg'} text-muted-foreground`}>
                            I believe in the power of technology to transform lives and am committed to developing applications that make a positive impact on society.
                        </p>
                        <h3 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-semibold mt-8`}>My Mission</h3>
                        <p className={`${isMobile ? 'text-base' : 'text-lg'} text-muted-foreground`}>
                            To leverage cutting-edge technologies and create innovative solutions that address real-world challenges, while continuously expanding my skills and knowledge in the ever-evolving field of software engineering.
                        </p>
                        <Button size={isMobile ? "default" : "lg"} className="group mt-4">
                            Download Resume
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Code className="mr-2" /> Skills
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {['JavaScript', 'React', 'Node.js', 'Python', 'UI/UX Design', 'Git', 'RESTful APIs', 'MongoDB', 'TypeScript', 'Next.js', 'TailwindCSS'].map((skill) => (
                                        <Badge key={skill} variant="secondary">{skill}</Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Lightbulb className="mr-2" /> Interests
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {['Machine Learning', 'Cloud Computing', 'Mobile App Development', 'Blockchain', 'IoT', 'Cybersecurity'].map((interest) => (
                                        <Badge key={interest} variant="outline">{interest}</Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;