import { motion } from "framer-motion";

function FloatingBlobs() {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-24 left-20 w-72 h-72 rounded-full bg-indigo-600/20 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-16 right-20 w-80 h-80 rounded-full bg-cyan-500/20 blur-3xl"
      />
    </>
  );
}

export default FloatingBlobs;