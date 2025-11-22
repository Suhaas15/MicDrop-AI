import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';

const PodcastPlayer = ({ isGenerating, isPlaying }) => {
    // Dummy transcript data
    const transcript = "Welcome to this podcast about the fascinating world of AI and machine learning. Today we'll explore how neural networks are revolutionizing the way we interact with technology.";

    // Check if dark mode is active
    const isDarkMode = document.documentElement.classList.contains('dark');

    if (!isGenerating && !isPlaying) {
        return null; // Don't show anything initially
    }

    if (isGenerating) {
        // Loading state with waveform
        return (
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full flex flex-col items-center justify-center min-h-[400px] gap-xl"
            >
                {/* Waveform Animation - Fewer bars, taller */}
                <div className="w-full flex items-end h-[300px] justify-center gap-[6px]">
                    {[...Array(100)].map((_, i) => {
                        const min = 40;
                        const max = 200;
                        const randomHeight1 = Math.random() * (max - min) + min;
                        const randomHeight2 = Math.random() * (max - min) + min;

                        return (
                            <motion.span
                                key={i}
                                className={`${isDarkMode ? 'bg-white' : 'bg-gray-900'} rounded-[6px] flex-1 max-w-[20px]`}
                                animate={{
                                    height: [randomHeight1, randomHeight2, randomHeight1],
                                }}
                                transition={{
                                    duration: Math.random() * 1.2 + 1.5,
                                    repeat: Infinity,
                                    delay: i * 0.02,
                                    ease: "easeInOut",
                                }}
                            />
                        );
                    })}
                </div>
                <p className="text-text-muted text-lg">Generating your podcast...</p>
            </motion.div>
        );
    }

    // Playing state
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full flex flex-col items-center gap-xl p-xl"
        >
            {/* Waveform Animation - Full Width */}
            <div className="w-full flex items-end h-[200px] justify-center gap-[4px]">
                {[...Array(250)].map((_, i) => {
                    const min = 20;
                    const max = 120;
                    const randomHeight1 = Math.random() * (max - min) + min;
                    const randomHeight2 = Math.random() * (max - min) + min;

                    return (
                        <motion.span
                            key={i}
                            className={`${isDarkMode ? 'bg-white' : 'bg-gray-900'} rounded-[6px] flex-1 max-w-[20px]`}
                            animate={{
                                height: [randomHeight1, randomHeight2, randomHeight1],
                            }}
                            transition={{
                                duration: Math.random() * 1.2 + 1.5, // slower + random
                                repeat: Infinity,
                                delay: i * 0.015, // smooth wave ripple
                                ease: "easeInOut",
                            }}
                        />
                    );
                })}
            </div>

            {/* Transcript Display */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="w-full bg-surface border border-border rounded-lg p-lg shadow-lg"
            >
                <h3 className="text-text font-bold text-xl mb-md">Transcript</h3>
                <p className="text-text-muted text-base leading-relaxed">
                    {transcript}
                </p>
            </motion.div>

            {/* Playback Controls (Optional) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex gap-md items-center"
            >
                <button className="w-[60px] h-[60px] rounded-full bg-black text-white border-none text-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                    <FaPlay />
                </button>
            </motion.div>
        </motion.div>
    );
};

export default PodcastPlayer;
