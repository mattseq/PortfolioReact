import { motion } from 'framer-motion'

const BackgroundEffects = () => {
  // Particle data
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    speed: Math.random() * 2 + 0.5
  }))

  return (
    <div className="background-effects">
      {/* Animated gradient orbs */}
      <motion.div 
        className="gradient-orb orb-1"
        animate={{ 
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="gradient-orb orb-2"
        animate={{ 
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 0.9, 1]
        }}
        transition={{ 
          duration: 35, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="gradient-orb orb-3"
        animate={{ 
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 40, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: particle.speed * 10,
            repeat: Infinity,
            delay: particle.id * 0.1,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

export default BackgroundEffects 