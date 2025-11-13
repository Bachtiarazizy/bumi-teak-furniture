"use client";

import React from "react";
import Image from "next/image";
import { Play, Pause } from "lucide-react";

interface QualityFeature {
  title: string;
  description: string;
}

interface QualityVideoSectionProps {
  heading?: string;
  subheading?: string;
  description?: string;
  videoThumbnail?: string;
  videoUrl?: string;
  features?: QualityFeature[];
}

const QualityVideoSection: React.FC<QualityVideoSectionProps> = ({
  heading = "Crafted with care, where genuine quality meets the natural beauty of teak",
  description = "Every curve, grain, and detail tells a story of nature’s patience, human touch, and the timeless craft of Indonesian woodwork.",
  videoThumbnail = "/images/video-thumbnail.jpg",
  videoUrl = "https://www.pexels.com/download/video/3773486",
  features = [
    {
      title: "LIVING DESIGN",
      description: "Each piece from Bumi Teak Furniture grows with you, gaining warmth, character, and meaning as time passes. Crafted for comfort and made to create memories that last.",
    },
    {
      title: "NATURAL CONNECTION",
      description: "Born from nature, crafted for living. Our teak furniture brings balance, calm, and beauty into your home, connecting you with the simple rhythm of nature.",
    },
  ],
}) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

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

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <section className="bg-light py-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Top Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Heading */}
          <div>
            <h2 className="font-heading text-4xl md:text-5xl text-secondary leading-tight">{heading}</h2>
          </div>

          {/* Right: Description & Features */}
          <div>
            <p className="font-body text-secondary mb-8 text-sm leading-relaxed">{description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index}>
                  <h5 className="font-heading font-bold text-xl text-secondary mb-3">{feature.title}</h5>
                  <p className="font-body text-secondary text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="relative w-full h-[300px] md:h-[500px] rounded-lg overflow-hidden group cursor-pointer">
          {/* Video Element */}
          <video ref={videoRef} src={videoUrl} className="w-full h-full object-cover" onClick={handlePlayPause} onEnded={handleVideoEnd} muted loop={false} />

          {/* Thumbnail overlay - only show when not playing */}
          {!isPlaying && (
            <>
              <Image src={videoThumbnail} alt="Indonesian furniture showcase" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
            </>
          )}

          {/* Play/Pause Button */}
          <button onClick={handlePlayPause} className="absolute inset-0 flex items-center justify-center" aria-label={isPlaying ? "Pause video" : "Play video"}>
            <div className={`rounded-full p-6 transition-all ${isPlaying ? "bg-black/50 backdrop-blur-sm" : "bg-white/90 group-hover:bg-white group-hover:scale-110"}`}>
              {isPlaying ? <Pause className="w-8 h-8 text-white" /> : <Play className="w-8 h-8 text-secondary fill-secondary" />}
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default QualityVideoSection;
