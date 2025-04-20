import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    github?: string;
    email?: string;
  };
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, bio, image, social }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
    <div className="relative overflow-hidden">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <div className="p-4 w-full flex justify-center space-x-3 pb-8">
          {social.linkedin && (
            <a 
              href={social.linkedin} 
              className="text-white hover:text-green-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name}'s LinkedIn profile`}
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          
          {social.github && (
            <a 
              href={social.github} 
              className="text-white hover:text-green-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name}'s GitHub profile`}
            >
              <Github className="h-5 w-5" />
            </a>
          )}
          
          {social.email && (
            <a 
              href={`mailto:${social.email}`} 
              className="text-white hover:text-green-300 transition-colors"
              aria-label={`Email ${name}`}
            >
              <Mail className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </div>
    
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-1">{name}</h3>
      <p className="text-green-600 font-medium mb-3">{role}</p>
      <p className="text-gray-600 text-sm">{bio}</p>
    </div>
  </div>
);

const TeamSection: React.FC = () => {
  const teamMembers: TeamMemberProps[] = [
    {
      name: "Alex Rivera",
      role: "Environmental Scientist",
      bio: "Alex specializes in carbon accounting and lifecycle assessment methodologies, ensuring our calculations are accurate and scientifically sound.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      social: {
        linkedin: "#",
        github: "#",
        email: "alex@ecotrack.example"
      }
    },
    {
      name: "Sasha Kim",
      role: "Lead Developer",
      bio: "Sasha brings 10 years of software development experience, with a passion for creating intuitive user interfaces for environmental applications.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      social: {
        linkedin: "#",
        github: "#",
        email: "sasha@ecotrack.example"
      }
    },
    {
      name: "Miguel Patel",
      role: "Climate Data Analyst",
      bio: "Miguel transforms complex climate science into actionable insights, helping users understand the real impact of their lifestyle choices.",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
      social: {
        linkedin: "#",
        github: "#",
        email: "miguel@ecotrack.example"
      }
    },
    {
      name: "Jordan Chen",
      role: "Sustainability Consultant",
      bio: "Jordan provides expertise in sustainable practices across various sectors, helping to develop practical recommendations for our users.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
      social: {
        linkedin: "#",
        github: "#",
        email: "jordan@ecotrack.example"
      }
    }
  ];
  
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600">
            We're a diverse team of experts passionate about climate action and creating 
            tools that make a difference.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;