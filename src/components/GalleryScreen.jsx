"use client"

import { motion } from "framer-motion"
import { Heart, Sparkles } from "lucide-react"

const images = [
    { src: "/gallery/1.jpg", alt: "Memory 1", big: true },
    { src: "/gallery/2.jpg", alt: "Memory 2" },
    { src: "/gallery/3.jpg", alt: "Memory 3" },
    { src: "/gallery/4.jpg", alt: "Memory 4" },
    { src: "/gallery/5.jpg", alt: "Memory 5" },
]

const enter = {
    hidden: { opacity: 0, scale: 0.6, rotate: -6 },
    show: (i) => ({
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
            delay: 0.3 + i * 0.12,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
}

export default function GalleryScreen() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="min-h-screen flex flex-col items-center justify-center p-6 md:p-10 relative overflow-hidden gap-8"
        >
            {/* Title */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-center z-10"
            >
                <h1 className="text-3xl md:text-5xl font-bold text-white flex items-center justify-center gap-3">
                    <Sparkles className="text-pink-400" size={28} />
                    Our Memories
                    <Sparkles className="text-pink-400" size={28} />
                </h1>
                <p className="text-purple-200 mt-2 text-sm md:text-base">A few moments, just for you ✨</p>
            </motion.div>

            {/* Bento grid */}
            <div className="grid grid-cols-4 gap-3 md:gap-4 w-full max-w-3xl aspect-square z-10">
                {images.map((img, i) => (
                    <motion.div
                        key={i}
                        custom={i}
                        variants={enter}
                        initial="hidden"
                        animate="show"
                        whileHover={{ scale: 1.04, zIndex: 5 }}
                        className={`relative overflow-hidden rounded-2xl border-2 border-pink-400/40 shadow-[0_0_25px_rgba(236,72,153,0.35)] group
                            ${img.big ? "col-span-2 row-span-2" : ""}`}
                    >
                        <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-pink-500/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                ))}
            </div>

            {/* Footer */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="z-10 flex items-center gap-2 text-pink-300"
            >
                <Heart size={18} className="fill-pink-400 text-pink-400" />
                <span className="text-sm md:text-base">Made with love, for the birthday girl</span>
                <Heart size={18} className="fill-pink-400 text-pink-400" />
            </motion.div>
        </motion.div>
    )
}
