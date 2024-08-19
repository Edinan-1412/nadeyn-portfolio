import React from 'react';
import { motion } from 'framer-motion';

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
            className="bg-card p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-primary mb-4">Contact Information</h3>
            <p className="text-muted-foreground mb-2">Email: your.email@example.com</p>
            <p className="text-muted-foreground mb-2">Phone: +1 234 567 890</p>
            <p className="text-muted-foreground">Location: City, Country</p>
          </motion.div>
          <motion.form
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-card p-8 rounded-lg shadow-lg"
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full p-2 rounded-md border border-primary bg-background text-foreground" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full p-2 rounded-md border border-primary bg-background text-foreground" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">Message</label>
              <textarea id="message" name="message" rows="4" className="w-full p-2 rounded-md border border-primary bg-background text-foreground"></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-80 transition-colors"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;