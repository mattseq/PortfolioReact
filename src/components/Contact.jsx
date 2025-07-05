import { motion } from 'framer-motion'
import { Mail, Github, Linkedin } from 'lucide-react'
import { socialLinks, sectionData } from '../constants/data'
import SectionHeader from './SectionHeader'

const Contact = () => {
  const socialLinksData = [
    { icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
    { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" }
  ]

  return (
    <div className="contact-section-wrapper">
      <section id="contact" className="section">
        <div className="container">
          <SectionHeader 
            icon={Mail}
            title={sectionData.contact.title}
            subtitle={sectionData.contact.subtitle}
          />

          <motion.div 
            className="contact-content"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p 
              className="contact-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Whether you have a question about my work, want to collaborate on a project, 
              or just want to say hello, I'd love to hear from you. Feel free to reach out 
              through any of the channels below.
            </motion.p>
            
            <motion.div 
              className="social-links"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {socialLinksData.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 + (index * 0.2) }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    transition: { duration: 0.1, ease: "easeOut" }
                  }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact 