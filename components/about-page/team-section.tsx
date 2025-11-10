import React from "react";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imagePath: string;
}

interface TeamSectionProps {
  heading?: string;
  subheading?: string;
}

const TeamSection: React.FC<TeamSectionProps> = ({ heading = "MEET THE MAKERS", subheading = "The passionate people behind every piece" }) => {
  const team: TeamMember[] = [
    {
      name: "Bambang Sutanto",
      role: "Master Craftsman & Co-Founder",
      bio: "With over 40 years of woodworking experience, Bambang leads our craftsmen in preserving traditional techniques.",
      imagePath: "/team-1.jpg",
    },
    {
      name: "Sarah Chen",
      role: "Design Director",
      bio: "Sarah bridges Indonesian heritage with contemporary design, creating pieces that resonate with modern living.",
      imagePath: "/team-2.jpg",
    },
    {
      name: "Rudi Hartono",
      role: "Sustainability Manager",
      bio: "Rudi ensures every piece of wood we use comes from responsible sources, protecting forests for future generations.",
      imagePath: "/team-3.jpg",
    },
    {
      name: "Linda Kusuma",
      role: "Quality Assurance Lead",
      bio: "Linda's meticulous eye ensures every piece leaving our workshop meets our uncompromising standards.",
      imagePath: "/team-4.jpg",
    },
  ];

  return (
    <section className="bg-light py-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-secondary mb-4">{heading}</h2>
          <p className="font-body text-secondary text-sm">{subheading}</p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group">
              {/* Photo */}
              <div className="relative h-80 mb-4 overflow-hidden rounded-lg bg-secondary/10">
                <Image src={member.imagePath} alt={member.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>

              {/* Info */}
              <h3 className="font-heading text-xl text-secondary mb-2">{member.name}</h3>
              <p className="font-body text-secondary text-sm mb-3 opacity-70">{member.role}</p>
              <p className="font-body text-secondary text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
