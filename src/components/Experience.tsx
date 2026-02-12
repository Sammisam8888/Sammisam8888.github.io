
export const Experience = () => {
   return (
      <section id="experience" className="py-32 bg-white">
         <div className="container px-4 mx-auto max-w-5xl">
            <h2 className="text-sm tracking-[0.2em] text-gray-500 uppercase mb-20 border-b border-gray-200 pb-6">
               Professional Journey
            </h2>

            <div className="space-y-20">

               {/* OPM Corporation - Featured */}
               <div className="relative group">
                  <div className="grid md:grid-cols-12 gap-8">
                     <div className="md:col-span-3">
                        <span className="inline-block px-3 py-1 bg-black text-white text-xs font-bold tracking-widest uppercase rounded-sm mb-2">Most Recent</span>
                        <p className="text-gray-500 font-mono text-sm">Aug 2025 — Dec 2025</p>
                     </div>
                     <div className="md:col-span-9 space-y-4">
                        <h3 className="text-3xl md:text-4xl font-bold text-black">
                           Software Development Engineer 2
                        </h3>
                        <div className="text-xl text-gray-700 font-medium">OPM Corporation</div>
                        <p className="text-gray-600 leading-relaxed max-w-3xl pt-2">
                           Architected cloud-native Azure deployments and engineered SEO-driven backend modules, improving system scalability and performance by 45%. Led cross-functional teams to automate workflows for commercial platforms.
                        </p>
                     </div>
                  </div>
               </div>

               <div className="h-px bg-gray-100 w-full" />

               {/* EU Analytics */}
               <div className="grid md:grid-cols-12 gap-8 group">
                  <div className="md:col-span-3">
                     <span className="text-gray-500 font-mono text-sm">Jul 2025 — Aug 2025</span>
                  </div>
                  <div className="md:col-span-9 space-y-4">
                     <h3 className="text-2xl font-bold text-black">
                        Intern Trainee
                     </h3>
                     <div className="text-lg text-gray-600">EU Analytics</div>
                     <p className="text-gray-600 leading-relaxed max-w-3xl">
                        Built full-stack AI applications using Flask and Angular. Integrated OpenAI APIs for advanced data processing and established CI/CD pipelines.
                     </p>
                  </div>
               </div>

               <div className="h-px bg-gray-100 w-full" />

               {/* Inovaare Clouds */}
               <div className="grid md:grid-cols-12 gap-8 group">
                  <div className="md:col-span-3">
                     <span className="text-gray-500 font-mono text-sm">May 2025 — Jul 2025</span>
                  </div>
                  <div className="md:col-span-9 space-y-4">
                     <h3 className="text-2xl font-bold text-black">
                        Cloud Platform Developer Intern
                     </h3>
                     <div className="text-lg text-gray-600">Inovaare Clouds</div>
                     <p className="text-gray-600 leading-relaxed max-w-3xl">
                        Developed automation modules for healthcare systems, integrating AWS Lambda and OCR tools to drastically reduce manual data processing times.
                     </p>
                  </div>
               </div>

               <div className="h-px bg-gray-100 w-full" />

               {/* Codecis AI */}
               <div className="grid md:grid-cols-12 gap-8 group">
                  <div className="md:col-span-3">
                     <span className="text-gray-500 font-mono text-sm">Jan 2025 — Mar 2025</span>
                  </div>
                  <div className="md:col-span-9 space-y-4">
                     <h3 className="text-2xl font-bold text-black">
                        Backend Developer Intern
                     </h3>
                     <div className="text-lg text-gray-600">Codecis AI</div>
                     <p className="text-gray-600 leading-relaxed max-w-3xl">
                        Deployed containerized CRM platforms on AWS and Azure. Designed analytics dashboards consuming REST APIs for real-time reporting.
                     </p>
                  </div>
               </div>

            </div>
         </div>
      </section>
   );
};
