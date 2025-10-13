'use client';

import { motion } from 'framer-motion';

interface SceneProps {
  onNext: () => void;
  onPrev: () => void;
  isActive: boolean;
}

export default function Scene8Scripture({ isActive }: SceneProps) {
  return (
    <div className="relative w-full h-full bg-gradient-to-b from-gray-50 via-white to-dusty-blue/10 overflow-hidden">
      {/* Background cross pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2523A3BFD9%22%20fill-opacity%3D%220.2%22%3E%3Cpath%20d%3D%22M40%200v80M0%2040h80%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center justify-center h-full px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="max-w-lg"
        >
          {/* Cross symbol */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="mb-8"
          >
            <motion.div
              animate={{ 
                filter: [
                  'drop-shadow(0 0 0px rgba(163, 191, 217, 0))',
                  'drop-shadow(0 0 20px rgba(163, 191, 217, 0.5))',
                  'drop-shadow(0 0 0px rgba(163, 191, 217, 0))'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="text-6xl text-dusty-blue mb-4"
            >
              ✝️
            </motion.div>
          </motion.div>

          {/* Scripture verse */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            {/* Quote marks */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-4xl text-dusty-blue/30 font-serif"
            >
              &ldquo;
            </motion.div>

            {/* Main verse */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="space-y-4"
            >
              <p className="text-xl font-serif text-gray-700 leading-relaxed italic">
                Therefore what God has joined together,
              </p>
              <p className="text-xl font-serif text-gray-700 leading-relaxed italic">
                let no one separate.
              </p>
            </motion.div>

            {/* Closing quote marks */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="text-4xl text-dusty-blue/30 font-serif transform rotate-180"
            >
              &rdquo;
            </motion.div>

            {/* Scripture reference */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="pt-4"
            >
              <div className="w-24 h-px bg-dusty-blue/30 mx-auto mb-4" />
              <p className="text-lg font-serif font-medium text-dusty-blue">
                Mark 10:9
              </p>
            </motion.div>

            {/* Additional blessing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="pt-6"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md border border-dusty-blue/20">
                <p className="text-sm font-serif text-gray-600 italic leading-relaxed">
                  May our union be blessed by God&apos;s grace, strengthened by His love, 
                  and guided by His wisdom throughout all our days together.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating spiritual elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-dusty-blue/20 text-2xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 3,
              }}
            >
              {['🕊️', '🙏', '💒', '⭐'][Math.floor(Math.random() * 4)]}
            </motion.div>
          ))}

          {/* Gentle light rays */}
          <motion.div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-200/20 via-transparent to-transparent"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scaleX: [1, 1.5, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </div>
    </div>
  );
}
