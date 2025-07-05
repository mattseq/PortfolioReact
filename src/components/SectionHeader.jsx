import { motion } from 'framer-motion'

const SectionHeader = ({ 
  icon: Icon, 
  title, 
  subtitle, 
  iconAnimation = { scale: [1, 1.1, 1], rotate: [0, 5, 0] },
  iconDuration = 4,
  iconRotate = 0
}) => {
  return (
    <motion.div 
      className="section-header"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: iconRotate }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        style={{ display: 'inline-block', marginBottom: '1rem' }}
      >
        <motion.div
          animate={iconAnimation}
          transition={{ 
            duration: iconDuration, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <Icon size={48} style={{ color: 'var(--text-accent)' }} />
        </motion.div>
      </motion.div>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      <motion.p 
        className="section-subtitle"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {subtitle}
      </motion.p>
    </motion.div>
  )
}

export default SectionHeader 