
import { Trophy, Medal, Award, Star, Target } from "lucide-react";

export const Achievements = () => {
    const achievements = [
        {
            title: "Winner - GDG Bhubaneswar × iServeU Hackathon (2025)",
            description: "Secured 1st place for developing an innovative fintech solution.",
            icon: Trophy,
        },
        {
             title: "Winner - Ideathon 2024",
             description: "E-Cell, VSSUT. Pitched a winning business model for sustainable tech.",
             icon: Trophy,
        },
        {
             title: "Winner - Maze Hunt 2024",
             description: "Robotics Society, VSSUT. Designed an autonomous bot for maze navigation.",
             icon: Trophy,
        },
        {
             title: "Winner - Shark Tank 2.0",
             description: "SUIIT. Successfully pitched a Fintech startup idea to panel judges.",
             icon: Trophy,
        },
        {
             title: "Finalist - Udbhavanam 2024",
             description: "IIM Sambalpur. Presented a Stock-market education model.",
             icon: Star,
        },
        {
             title: "All-India Rank 60 - E-Yantra Robotics 2024",
             description: "IIT Bombay. Achieved top rank in national robotics competition.",
             icon: Medal,
        },
        {
             title: "Participant - ML Hackathon 2025",
             description: "IIT Bhubaneswar. Developed an AI image detection model.",
             icon: Target,
        }
    ];

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="container px-4 mx-auto max-w-5xl">
        <h2 className="text-sm tracking-[0.2em] text-gray-500 uppercase mb-16 text-center">HONORS & AWARDS</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((item, index) => (
                <div 
                    key={index}
                    className="flex items-start gap-4 p-5 bg-white rounded-lg border border-gray-200 hover:border-black hover:shadow-sm transition-all duration-300"
                >
                    <div className="shrink-0 mt-1">
                        <item.icon size={20} className="text-black" />
                    </div>
                    <div>
                        <h3 className="text-base font-bold text-black leading-tight mb-1">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};
