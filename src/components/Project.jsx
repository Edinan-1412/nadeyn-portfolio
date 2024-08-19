import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const projects = [
    {
        title: 'Project 1',
        description: 'Description of Project 1',
        image: 'https://i.pinimg.com/1200x/cf/45/c9/cf45c96847f7ce34d0956368bc47ae99.jpg',
        link: 'https://project1.com'
    },
    {
        title: 'Project 2',
        description: 'Description of Project 2',
        image: 'https://i.pinimg.com/236x/2a/e6/76/2ae676b0b34e80507a7871f8985dc1d2.jpg',
        link: 'https://project2.com'
    },
    {
        title: 'Project 3',
        description: 'Description of Project 3',
        image: 'https://i.pinimg.com/736x/8a/db/17/8adb173dac4a43e46304bbdcecb95492.jpg',
        link: 'https://project3.com'
    },
    {
        title: 'Project 4',
        description: 'Description of Project 4',
        image: 'https://i.pinimg.com/736x/a8/93/13/a89313586ed2144024844cfe0a44df05.jpg',
        link: 'https://project4.com'
    },
    {
        title: 'Project 5',
        description: 'Description of Project 5',
        image: 'https://i.pinimg.com/736x/32/9a/4b/329a4b89081abdafd242b0befcb16092.jpg',
        link: 'https://project5.com'
    },
    {
        title: 'Project 6',
        description: 'Description of Project 6',
        image: 'https://i.pinimg.com/736x/9a/61/50/9a6150575cc93bfb679c6b1a9bee0c3c.jpg',
        link: 'https://project6.com'
    },
    {
        title: 'Project 7',
        description: 'Description of Project 7',
        image: 'https://i.pinimg.com/736x/b3/32/0b/b3320ba9e040a01ac6fa59abc20a23f1.jpg',
        link: 'https://project7.com'
    },
];

function Project() {
    const [swiper, setSwiper] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.realIndex);
    };

    const getSlidesPerView = () => {
        if (isMobile) return 1;
        if (isTablet) return 2;
        return 3;
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full py-20 bg-gradient-to-b from-background to-secondary"
        >
            <div className="container px-4 md:px-6">
                <motion.h2
                    initial={{ y: -50 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-10 text-center"
                >
                    My Projects
                </motion.h2>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={getSlidesPerView()}
                    loop={true}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: isMobile ? 50 : 100,
                        depth: isMobile ? 100 : 150,
                        modifier: 1.5,
                        slideShadows: false,
                    }}
                    pagination={{ clickable: true }}
                    navigation={!isMobile}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="mySwiper"
                    onSwiper={setSwiper}
                    onSlideChange={handleSlideChange}
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{
                                    opacity: activeIndex === index ? 1 : 0.5,
                                    scale: activeIndex === index ? 1.1 : 0.9
                                }}
                                transition={{ duration: 0.3 }}
                                className="bg-card p-6 rounded-lg shadow-lg"
                            >
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                />
                                <motion.h3
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-2xl font-semibold text-primary mb-2"
                                >
                                    {project.title}
                                </motion.h3>
                                <motion.p
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-muted-foreground mb-4"
                                >
                                    {project.description}
                                </motion.p>
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-80 transition-colors"
                                >
                                    View Project
                                </motion.a>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </motion.section>
    );
}

export default Project;