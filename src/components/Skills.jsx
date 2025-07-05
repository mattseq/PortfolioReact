import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'
import { staggerContainer, fadeInUp } from '../utils/animations'
import { skillCategories, sectionData } from '../constants/data'
import SectionHeader from './SectionHeader'

const Skills = ({ skillsY }) => {
  return (
    <section id="skills" className="section">
      <motion.div 
        className="container"
        style={{ y: skillsY }}
      >
        <SectionHeader 
          icon={Zap}
          title={sectionData.skills.title}
          subtitle={sectionData.skills.subtitle}
          iconAnimation={{ scale: [1, 1.1, 1], rotate: [0, -5, 0] }}
          iconDuration={3}
          iconRotate={180}
        />

        <motion.div 
          className="skills-categories"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              variants={fadeInUp}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: categoryIndex * 0.2, 
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.1, ease: "easeOut" }
              }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05, 
                      ease: "easeOut"
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -3,
                      transition: { duration: 0.1, ease: "easeOut" }
                    }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Skills 