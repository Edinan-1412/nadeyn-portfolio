import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

function Education() {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1.5]);
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const educationItems = [
        {
            degree: "Bachelor's Degree in Software Engineering",
            institution: "Lithan EduClaas Singapore",
            description: "Still Ongoing",
            period: "2023 - Present",
            icon: "🎓",
            logo: "/images/lithan.png"
        },
        {
            degree: "Bachelor of Science in Information Technology - Software Engineering",
            institution: "First City Providential College",
            description: "Still Ongoing",
            period: "2023 - Present",
            icon: "💻",
            logo: "/images/fcpc.png"
        },
        {
            degree: "Senior High School",
            institution: "Sapang Palay National High School",
            description: "Pursuing Ph.D., expected graduation in 2024",
            period: "2020 - Present",
            icon: "🏫",
            logo: "/images/spnhs.png"
        }
    ];

    return (
        <section className="w-full py-20 bg-gradient-to-b from-background to-secondary overflow-hidden">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center space-y-4 text-center"
                >
                    <motion.h2
                        className="text-3xl md:text-6xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
                    >
                        Educational Journey
                    </motion.h2>
                    <p className="max-w-[900px] text-muted-foreground text-sm md:text-xl">
                        Explore the milestones of my academic adventure.
                    </p>
                </motion.div>
                <div className="mx-auto max-w-5xl items-start gap-8 py-12 relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-primary"></div>
                    {educationItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: isMobile ? 0 : (index % 2 === 0 ? -50 : 50), rotateY: isMobile ? 0 : 90 }}
                            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className={`relative mb-16 ${isMobile ? 'pl-4' : (index % 2 === 0 ? 'pr-4 text-right' : 'pl-4')}`}
                        >
                            <motion.div
                                className={`absolute top-0 ${isMobile ? '-left-6' : (index % 2 === 0 ? '-right-6' : '-left-6')} w-12 h-12 bg-primary rounded-full border-4 border-background z-10 flex items-center justify-center text-2xl`}
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                transition={{ duration: 0.3 }}
                            >
                                {item.icon}
                            </motion.div>
                            <motion.div
                                className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary"></div>
                                <div className="flex items-center mb-4">
                                    <img src={item.logo} alt={`${item.institution} logo`} className="w-12 h-12 object-contain mr-4" />
                                    <h3 className="text-xl md:text-2xl font-semibold text-primary">{item.degree}</h3>
                                </div>
                                <p className="text-base md:text-lg font-medium mb-1">{item.institution}</p>
                                <p className="text-sm md:text-base text-muted-foreground mb-2">{item.description}</p>
                                <p className="text-xs md:text-sm text-muted-foreground mt-2 inline-block bg-primary bg-opacity-10 px-2 py-1 rounded">{item.period}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education;
