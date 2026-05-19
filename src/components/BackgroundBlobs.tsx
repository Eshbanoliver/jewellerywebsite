import { motion } from 'framer-motion';

const BackgroundBlobs = () => {
  return (
    <div className="fixed inset-0 w-full h-full min-h-screen overflow-hidden pointer-events-none z-0">
      {/* Golden Yellow Blob - Top Right */}
      <motion.div
        className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gold/15 blur-[120px]"
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 50, -30, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Rose Gold Blob - Middle Left */}
      <motion.div
        className="absolute top-[30%] left-[-15%] w-[45vw] h-[45vw] rounded-full bg-rose-gold/12 blur-[130px]"
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -60, 40, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Champagne Gold Blob - Bottom Right */}
      <motion.div
        className="absolute bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-champagne/10 blur-[120px]"
        animate={{
          x: [0, -30, -50, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Warm Amber/Bronze Blob - Center Top */}
      <motion.div
        className="absolute top-[10%] left-[25%] w-[35vw] h-[35vw] rounded-full bg-amber-500/8 blur-[140px]"
        animate={{
          x: [0, 60, -40, 0],
          y: [0, 30, 60, 0],
          scale: [0.9, 1.1, 0.95, 0.9],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Light Gold Blob - Bottom Left */}
      <motion.div
        className="absolute bottom-[10%] left-[-10%] w-[38vw] h-[38vw] rounded-full bg-gold-light/10 blur-[120px]"
        animate={{
          x: [0, 40, 20, 0],
          y: [0, -50, -20, 0],
          scale: [1, 0.95, 1.1, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};

export default BackgroundBlobs;
