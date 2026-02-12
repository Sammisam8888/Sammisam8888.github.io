
export const Skills = () => {
  const skills = [
    { name: "React", icon: "/tech/react.svg" },
    { name: "Next.js", icon: "/tech/nextjs.svg" },
    { name: "TypeScript", icon: "/tech/typescript.svg" },
    { name: "Node.js", icon: "/tech/nodejs.svg" },
    { name: "Python", icon: "/tech/python.svg" },
    { name: "AWS", icon: "/tech/aws.svg" },
    { name: "Docker", icon: "/tech/docker.svg" },
    { name: "PostgreSQL", icon: "/tech/postgresql.svg" },
    { name: "MongoDB", icon: "/tech/mongodb.svg" },
    { name: "Redis", icon: "/tech/redis.svg" },
    { name: "GraphQL", icon: "/tech/graphql.svg" },
    { name: "Tailwind", icon: "/tech/tailwind.svg" },
    { name: "Java", icon: "/tech/java.svg" },
    { name: "Flask", icon: "/tech/flask-icon.svg" },
    { name: "Azure", icon: "/tech/azure.svg" },
    { name: "Git", icon: "/tech/git.svg" }
  ];

  return (
    <section id="skills" className="py-32 bg-white">
       <div className="container px-4 mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-20 tracking-tight text-black">
            TECHNICAL ARSENAL
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 max-w-5xl mx-auto">
             {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="group relative w-24 h-24 md:w-32 md:h-32 rounded-xl bg-white border border-gray-200 flex items-center justify-center hover:border-black hover:shadow-lg transition-all duration-300"
                >
                    <div className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform duration-200 px-3 py-1 bg-black text-white text-xs font-bold rounded shadow-xl pointer-events-none whitespace-nowrap z-20">
                      {skill.name}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-2 h-2 bg-black rotate-45"></div>
                    </div>

                    <img 
                      src={skill.icon} 
                      alt={skill.name}
                      className="w-10 h-10 md:w-14 md:h-14 object-contain"
                    />
                </div>
             ))}
          </div>
       </div>
    </section>
  );
};
