'use client';

import { motion } from 'framer-motion';
import { RotateCcw, Heart } from 'lucide-react';
import Image from 'next/image';

interface SceneProps {
  onNext: () => void;
  onPrev: () => void;
  isActive: boolean;
}

interface PhotoItem {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  size?: 'small' | 'medium' | 'large';
}

export default function Scene10Extras({ isActive }: SceneProps) {
  // Static engagement photos
  const photos: PhotoItem[] = [
    { id: '1', src: '/images/Pic1.jpg', alt: 'w', caption: '...', size: 'large' },
    { id: '2', src: '/images/Pic2.jpg', alt: 'w', caption: '...', size: 'medium' },
    { id: '3', src: '/images/Pic3.jpg', alt: 'w', caption: '...', size: 'small' },
    { id: '4', src: '/images/Pic4.jpg', alt: 'w', caption: '...', size: 'medium' },
    { id: '5', src: '/images/Pic5.jpg', alt: 'w', caption: '...', size: 'large' },
    { id: '6', src: '/images/Pic6.jpg', alt: 'w', caption: '...', size: 'small' },
    { id: '7', src: '/images/Pic7.jpg', alt: 'w', caption: '...', size: 'medium' },
    { id: '8', src: '/images/Pic8.jpg', alt: 'w', caption: '...', size: 'large' },
    { id: '9', src: '/images/Pic9.jpg', alt: 'w', caption: '...', size: 'small' },
    { id: '10', src: '/images/Pic10.jpg', alt: 'w', caption: '...', size: 'medium' },
    { id: '11', src: '/images/Pic11.jpg', alt: 'w', caption: '...', size: 'large' },
    { id: '12', src: '/images/Pic12.jpg', alt: 'w', caption: '...', size: 'small' },
    { id: '13', src: '/images/Pic13.jpg', alt: 'w', caption: '...', size: 'medium' },
    { id: '14', src: '/images/After Proposal Shoot1.jpg', alt: 'w', caption: '...', size: 'large' }
  ];

  const replayStory = () => {
    // This will be handled by the parent WeddingStory component
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  };

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-beige via-white to-dusty-blue/20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_#A3BFD9_1px,_transparent_1px),_radial-gradient(circle_at_75%_75%,_#A3BFD9_1px,_transparent_1px)] bg-[length:40px_40px]" />
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center justify-start h-full px-6 py-8 relative z-10 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="max-w-7xl w-full"
        >
          {/* Header */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-decorative text-dusty-blue mb-2">
              Our Journey to Forever
            </h2>
            <div className="w-16 h-px bg-dusty-blue mx-auto" />
          </motion.div>

          {/* Creative Photo Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
              {photos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.1 * index,
                    ease: 'easeOut' 
                  }}
                  className="relative group break-inside-avoid mb-4"
                >
                  <div className={`
                    relative rounded-xl shadow-lg border border-dusty-blue/20 overflow-hidden bg-white
                    ${photo.size === 'small' ? 'h-48' : photo.size === 'medium' ? 'h-64' : 'h-80'}
                  `}>
                    <Image 
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      priority={index < 2}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />

                    {/* Photo caption */}
                    {photo.caption && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4"
                      >
                        <p className="text-xs font-serif text-white italic">
                          {photo.caption}
                        </p>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>


        </motion.div>

        {/* Floating celebration elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-dusty-blue/20 text-xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -25, 0],
                rotate: [0, 360],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 4,
              }}
            >
              {['🎊', '🎉', '💫', '⭐', '💝'][Math.floor(Math.random() * 5)]}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
