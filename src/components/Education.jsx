import React from 'react';
import { motion } from 'framer-motion';

function Education() {
    const educationItems = [
        {
            degree: "Bachelor's Degree in Software Engineering",
            institution: "Lithan EduClaas Singapore",
            description: "Still Ongoing",
            period: "2023 - Present"
        },
        {
            degree: "Bachelor of Science in Information Technology - Software Engineering",
            institution: "First City Providential College",
            description: "Still Ongoing",
            period: "2023 - Present"
        },
        {
            degree: "Senior High School",
            institution: "Sapang Palay National High School",
            description: "Pursuing Ph.D., expected graduation in 2024",
            period: "2020 - Present"
        }
    ];

    return (
        <section className="w-full py-20 bg-gradient-to-b from-background to-secondary">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center space-y-4 text-center"
                >
                    <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        Education
                    </h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl">
                        Explore my academic journey and milestones.
                    </p>
                </motion.div>
                <div className="mx-auto max-w-5xl items-start gap-8 py-12">
                    {educationItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative pl-8 pb-8 border-l-2 border-primary"
                        >
                            <div className="absolute w-4 h-4 bg-primary rounded-full left-0 top-0 -translate-x-[9px]" />
                            <div className="space-y-2">
                                <h3 className="text-2xl font-semibold text-primary">{item.degree}</h3>
                                <p className="text-lg font-medium">{item.institution}</p>
                                <p className="text-muted-foreground">{item.description}</p>
                                <p className="text-sm text-muted-foreground">{item.period}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education;