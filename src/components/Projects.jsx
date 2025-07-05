import { motion } from 'framer-motion'
import { Code, Github, ExternalLink } from 'lucide-react'
import { staggerContainer, scaleIn } from '../utils/animations'
import { projects, sectionData } from '../constants/data'
import SectionHeader from './SectionHeader'

const Projects = ({ projectsY }) => {
  return (
    <section id="projects" className="section">
      <motion.div 
        className="container"
        style={{ y: projectsY }}
      >
        <SectionHeader 
          icon={Code}
          title={sectionData.projects.title}
          subtitle={sectionData.projects.subtitle}
          iconAnimation={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
          iconDuration={5}
          iconRotate={-90}
        />

        <motion.div 
          className="projects-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              variants={scaleIn}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2, 
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.1, ease: "easeOut" }
              }}
            >
              <motion.div
                className="project-image"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}
                viewport={{ once: true }}
              >
                <img src={project.image} alt={project.title} />
                <motion.div 
                  className="project-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="project-links-overlay">
                    <motion.a 
                      href={project.github} 
                      className="btn btn-secondary" 
                      style={{ fontSize: '0.9rem', padding: '8px 16px' }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.1, ease: "easeOut" }}
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                    <motion.a 
                      href={project.live} 
                      className="btn btn-primary" 
                      style={{ fontSize: '0.9rem', padding: '8px 16px' }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.1, ease: "easeOut" }}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
              
              <div className="project-content">
                <motion.h3 
                  className="project-title"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                  viewport={{ once: true }}
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  className="project-description"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {project.description}
                </motion.p>
                <motion.div 
                  className="project-tech"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {project.tech.map((tech, techIndex) => (
                    <motion.span 
                      key={tech} 
                      className="tech-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.2 + 0.4 + techIndex * 0.1, ease: "easeOut" }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -1,
                        transition: { duration: 0.1, ease: "easeOut" }
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Projects 