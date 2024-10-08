import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from 'react-responsive';
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Header = ({ setActiveSection, activeSection }) => {
    const [hoveredItem, setHoveredItem] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const navItems = ["Home", "About", "Education", "Projects", "Contact"];

    const handleNavClick = (section) => {
        setActiveSection(section.toLowerCase());
        setIsOpen(false);
    };

    return (
        <AnimatePresence>
            <motion.header
                className="z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="container flex h-16 md:h-20 max-w-screen-2xl items-center">
                    <motion.div className="flex items-center space-x-2 md:space-x-3 mr-4 md:mr-8">
                        <Avatar className="h-12 w-12 md:h-16 md:w-16">
                            <AvatarImage src="/images/aly.png" alt="Aly" />
                            <AvatarFallback>A</AvatarFallback>
                        </Avatar>
                    </motion.div>

                    {!isMobile && (
                        <nav className="flex items-center relative">
                            {navItems.map((item) => (
                                <motion.div
                                    key={item}
                                    className="relative"
                                    onHoverStart={() => setHoveredItem(item)}
                                    onHoverEnd={() => setHoveredItem(null)}
                                >
                                    <Button
                                        variant="ghost"
                                        className={`mr-2 ${activeSection === item.toLowerCase() ? 'text-primary' : ''}`}
                                        onClick={() => handleNavClick(item)}
                                    >
                                        {item}
                                    </Button>
                                    {(hoveredItem === item || activeSection === item.toLowerCase()) && (
                                        <motion.div
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                                            layoutId="underline"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        />
                                    )}
                                </motion.div>
                            ))}
                        </nav>
                    )}

                    {isMobile && (
                        <div className="ml-auto">
                            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                                <SheetTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                        <Menu className="h-6 w-6" />
                                        <span className="sr-only">Open menu</span>
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                                    <nav className="flex flex-col space-y-4 mt-8">
                                        {navItems.map((item) => (
                                            <motion.div
                                                key={item}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <Button
                                                    variant="ghost"
                                                    className={`w-full justify-start ${activeSection === item.toLowerCase() ? 'bg-primary text-primary-foreground' : ''}`}
                                                    onClick={() => handleNavClick(item)}
                                                >
                                                    {item}
                                                </Button>
                                            </motion.div>
                                        ))}
                                    </nav>
                                </SheetContent>
                            </Sheet>
                        </div>
                    )}
                </div>
            </motion.header>
        </AnimatePresence>
    );
};

export default Header;