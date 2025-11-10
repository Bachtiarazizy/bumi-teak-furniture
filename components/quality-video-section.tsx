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
  heading = "UNCOMPROMISING QUALITY",
  subheading = "MEETS NATURAL BEAUTY",
  description = "Experience furniture that transcends mere function. Each piece embodies the raw spirit of Indonesian woodworking.",
  videoThumbnail = "/images/video-thumbnail.jpg",
  videoUrl = "https://www.pexels.com/download/video/3773486",
  features = [
    {
      title: "ENDURING DESIGN",
      description: "Furniture built to withstand time, growing more beautiful with each passing year.",
    },
    {
      title: "NATURAL HARMONY",
      description: "Pieces that breathe and connect your living space with the organic rhythms of nature.",
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
            <h3 className="font-heading text-4xl md:text-5xl text-secondary leading-tight">
              {heading}
              <br />
              {subheading}
            </h3>
          </div>

          {/* Right: Description & Features */}
          <div>
            <p className="font-body text-secondary mb-8 text-sm leading-relaxed">{description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index}>
                  <h4 className="font-heading text-lg text-secondary mb-3">{feature.title}</h4>
                  <p className="font-body text-secondary text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="relative w-full h-[600px] md:h-[500px] rounded-lg overflow-hidden group cursor-pointer">
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
