"use client";
import React, {useState, useRef} from "react";
import {
    PlayIcon,
    PlayPauseIcon,
    SpeakerWaveIcon,
    SpeakerXMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const Hero = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef(null);

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleMuteUnmute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <div className="relative h-screen w-full overflow-hidden">
            <video
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                poster="https://images.unsplash.com/photo-1518655048521-f130df041f66"
                aria-label="Background video showing natural landscape"
            >
                <source
                    src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>

            <div className="absolute inset-0 bg-black bg-opacity-50" />

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-300 hover:scale-105">
                    Always Press Record
                </h1>
                <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl transition-all duration-300 hover:text-gray-200">
                    At Always Press Record, we offer a comprehensive range of
                    production services, from budgeting and location scouting to
                    full-scale production and wrap.
                </p>
                <button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
                    <Link href="/about">Find out more</Link>
                </button>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <button
                        onClick={handlePlayPause}
                        className="text-white p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-300"
                        aria-label={isPlaying ? "Pause video" : "Play video"}
                    >
                        {isPlaying ? (
                            <PlayPauseIcon className="w-6 h-6" />
                        ) : (
                            <PlayIcon className="w-6 h-6" />
                        )}
                    </button>
                    <button
                        onClick={handleMuteUnmute}
                        className="text-white p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-300"
                        aria-label={isMuted ? "Unmute video" : "Mute video"}
                    >
                        {isMuted ? (
                            <SpeakerWaveIcon className="w-6 h-6" />
                        ) : (
                            <SpeakerXMarkIcon className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
