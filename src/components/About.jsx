import { motion } from 'framer-motion'
import { User, Target, Award, Zap } from 'lucide-react'
import { staggerContainer, slideInLeft, slideInRight } from '../utils/animations'
import { stats as statsData, sectionData } from '../constants/data'
import SectionHeader from './SectionHeader'

const About = ({ aboutY }) => {
  const stats = [
    { icon: Target, value: "50+", label: "Projects Completed" },
    { icon: Award, value: "3+", label: "Years Experience" },
    { icon: Zap, value: "100%", label: "Client Satisfaction" }
  ]

  return (
    <section id="about" className="section">
      <motion.div 
        className="container"
        style={{ y: aboutY }}
      >
        <SectionHeader 
          icon={User}
          title={sectionData.about.title}
          subtitle={sectionData.about.subtitle}
          iconAnimation={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          iconDuration={4}
          iconRotate={-180}
        />

        <motion.div 
          className="about-content"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="about-text"
            variants={slideInLeft}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              I'm a passionate full-stack developer with a love for creating innovative digital solutions. 
              With several years of experience in web development, I specialize in building scalable, 
              user-friendly applications that solve real-world problems.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              My journey in tech started with curiosity and has evolved into a deep passion for clean code, 
              elegant design, and seamless user experiences. I believe in the power of technology to make 
              a positive impact on people's lives.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community.
            </motion.p>
          </motion.div>

          <motion.div 
            className="about-stats"
            variants={slideInRight}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="stat-item"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2, 
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  transition: { duration: 0.1, ease: "easeOut" }
                }}
              >
                <stat.icon size={32} style={{ color: 'var(--text-accent)' }} />
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About 