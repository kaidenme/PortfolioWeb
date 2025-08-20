"use client";

import React from 'react';
import {useState} from 'react';
import Image from 'next/image'

const PortfolioPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const highlightKeywords = (text: string) => {
  const keywords = ['.NET8 to .NET9', '.NET9', 'React', 'JavaScript', 'C#', 'Docker', 'SQL', 'Python', 'Flask', 'Scikit-learn'];
  
  return text.split(' ').map((word, i) => {
    const cleanWord = word.replace(/[.,]/g, '');
    return keywords.includes(cleanWord) ? (
      <span key={i} className="text-blue-400 font-medium">{word} </span>
    ) : (
      <span key={i}>{word} </span>
    );
    });
    };

  const projects = [
    {
      title: "FizzBuzz Web App",
      description: ["Developed a FizzBuzz web app with custom and default game modes.", "Built backend using .NET; frontend with Vite-powered JavaScript. Supported local development and Docker deployment.", "Wrote unit tests for both frontend and backend."],
      technologies: ["C#", ".NET", "JavaScript", "Vite", "Docker", "xUnit", "Jest"],
      link: "https://github.com/kaidenme/FizzBuzz-Game",
      image: "/img/projects/fb.png"
    },
    {
      title: "Diabetes Prediction Web",
      description: ["Analysed data, trained model, tuned hyper-parameters to obtain optimal AI model to predict if the chance of diabetes.","Created a web interface allowing users to input patients data for prediction.", "Integrated Python, Scikit-learn, and Pandas to streamline ML model deployment."],
      technologies: ["Python", "Flask", "Scikit-learn", "Pandas", "Data Science", "AI"],
      link: "https://github.com/kaidenme/Diabetes-Prediction",
      image: "/img/projects/db.png"
    },
    {
      title: "Library Management System",
      description: ["A library management system allows users to search for books, and CDs."," Created user-friendly web interface allowing users to register an account, borrow books, and return them.", "Designed a scalable cloud architecture to support future expansion and high traffic, focusing on scalability and high availability."],
      technologies: ["C#", "AWS", "SQL", "Javascript", "HTML", "Docker"],
      link: "https://github.com/kaidenme/Library-System",
      image: "/img/projects/lm.png"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      university: "University of Adelaide",
      year: "2021 - 2025",
      description: "Refined and well-round knowledge of computer science, software architecture, parallel and distributed computing",
      logo: "/img/education/logo.webp"
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "JULY 2025",
      description: "Demonstrate knowledge in cloud architectures, cloud services, deloyment and management of cloud-integrated applications.",
      certificateImage: "/img/certifications/clf.png"
    },
    {
      name: "AWS Certified Solutions Architect - Associate",
      issuer: "Amazon Web Services",
      year: "IN PROGRESS",
      description: "Constantly expanding knowledge on design and deploy scalable, highly available, and fault-tolerant systems on AWS.",
      certificateImage: "/img/certifications/saa.png"
    }
  ];

  const experience = [
    {
      position: "Software Engineer",
      company: "Jung Talents",
      period: "SEP 2024 — PRESENT",
      description: [
        "Collaborated in team on the migration of a high-traffic commercial website from .NET 8 to .NET 9, contributing to 20% improved efficiency and 25% reduced latency, enhancing customer experience and system reliability.",
        "Conducted comprehensive codebase analysis, designed unit test cases, and developed test plans for a commercial education platform, ensuring robust handling of complex user scenarios for both customers and platform employees.",
        "Participated in the end-to-end deployment of several full-stack .NET web applications, integrating multiple frontend frameworks and AWS cloud services to ensure scalability, security, and seamless performance."
      ],
      technologies: [".Net", "C#", "AWS", "React", "Docker", "Javascript"]
    },
    {
      position: "Crew Member",
      company: "McDonalds",
      period: "AUG 2021 — PRESENT",
      description: [
        "Partnered with team members to deliver efficient and high-quality food service, ensuring timely order delivery and customer satisfaction.",
        "Coordinated with colleagues to prepare food items and manage ingredient inventory, maintaining optimal stock levels for smooth operations.",
        "Upheld strict kitchen hygiene and food safety standards in compliance with regulations and company protocols."
      ],
      technologies: ["Team Collaboration", "Time-management", "Problem Solving", "Effective Communication"]
    }
  ];

  const skillCategories = [
  {
    title: "Frontend",
    skills: ["Javascript", "React", "Vite", "HTML", "CSS", "Tailwindcss"],
    icon: "🖥️",
    color: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    textColor: "text-blue-300"
  },
  {
    title: "Backend",
    skills: ["C#", ".Net", "ASP.Net", "MVP Core", "Node.js","PostgreSQL", "SQL", "Python"],
    icon: "⚙️",
    color: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    textColor: "text-purple-300"
  },
  {
    title: "Cloud & Architecture",
    skills: ["AWS", "Docker", "System Design", "CI/CD"],
    icon: "☁️",
    color: "bg-teal-500/10",
    borderColor: "border-teal-500/30",
    textColor: "text-teal-300"
  },
  {
    title: "Tools",
    skills: ["Git", "VS Code", "JIRA", "Confluence"],
    icon: "🛠️",
    color: "bg-amber-500/10",
    borderColor: "border-amber-500/30",
    textColor: "text-amber-300"
  }
];

  return (
    <div className="bg-slate-900 text-slate-400 antialiased">
      {/* Mobile Header */}
      <div className="lg:hidden flex justify-between items-center p-4 border-b border-slate-800">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-200">
          <img src="/img/pro/profile.png" alt="Profile" className="w-full h-full object-cover" />
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-slate-400"
        >
          ☰
        </button>
      </div>
      
      <div className="mx-auto min-h-screen max-w-screen-xl lg:flex">
        {/* Left Column */}
        <div className={`
          ${isMobileMenuOpen ? 'block' : 'hidden'} 
          lg:block lg:sticky lg:top-0 lg:h-screen lg:w-1/3 
          p-6 bg-slate-900 z-10
        `}>
          <div className="flex flex-col justify-between h-full lg:py-24">
            <div>
              {/* Profile Picture */}
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-200 dark:border-slate-700 mb-6 animate-glow">
                <Image
                  src="/img/pro/profile.png"
                  alt="Profile"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Name */}
              <h1 className="text-4xl font-bold text-slate-200 relative inline-block mb-3">
                Kaiden Nguyen
                <span className="absolute left-0 bottom-0 h-0.5 w-full bg-teal-400 animate-underlinePulse"></span>
              </h1>
              <h2 className="mt-3 text-lg font-medium text-slate-200">Software Engineer</h2>
              <p className="mt-4 max-w-xs leading-normal">
                Hi, welcome to my page.
              </p>
              
              <div className="mt-6">
                <p className="text-sm">Contact me at: kaiden.nguyen202@gmail.com</p>
                <div className="mt-4 flex space-x-4">
                  <a href="https://github.com/kaidenme" className="text-slate-500 hover:text-slate-200" target="_blank" rel="noopener noreferrer">
                    <span className="sr-only">GitHub</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                  <a href="https://linkedin.com/in/kaidenme" className="text-slate-500 hover:text-slate-200" target="_blank" rel="noopener noreferrer">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <nav className="mt-9 hidden lg:block">
                <ul className="space-y-4">
                  <li>
                    <a href="#about" className="flex items-center group">
                      <span className="w-8 h-px bg-slate-600 mr-4 transition-all group-hover:w-16 group-hover:bg-slate-200"></span>
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">About</span>
                    </a>
                  </li>
                  <li>
                    <a href="#experience" className="flex items-center group">
                      <span className="w-8 h-px bg-slate-600 mr-4 transition-all group-hover:w-16 group-hover:bg-slate-200"></span>
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">Experience</span>
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="flex items-center group">
                      <span className="w-8 h-px bg-slate-600 mr-4 transition-all group-hover:w-16 group-hover:bg-slate-200"></span>
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">Projects</span>
                    </a>
                  </li>
                  <li>
                    <a href="#skills" className="flex items-center group">
                      <span className="w-8 h-px bg-slate-600 mr-4 transition-all group-hover:w-16 group-hover:bg-slate-200"></span>
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">Skills</span>
                    </a>
                  </li>
                  <li>
                    <a href="#education" className="flex items-center group">
                      <span className="w-8 h-px bg-slate-600 mr-4 transition-all group-hover:w-16 group-hover:bg-slate-200"></span>
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">Education</span>
                    </a>
                  </li>
                  <li>
                    <a href="#certifications" className="flex items-center group">
                      <span className="w-8 h-px bg-slate-600 mr-4 transition-all group-hover:w-16 group-hover:bg-slate-200"></span>
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">Certifications</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div><br></br></div>
            
          </div>
        </div>
        
        {/* Right Scrollable Content */}
        <div className="lg:w-2/3 p-6">
          {/* About section */}
          <section id="about" className="mb-16 pt-24">
            <h2 className="text-2xl font-bold text-slate-200 mb-4">About</h2>
            <p className="mb-4">
              Hi there! I'm a software engineer who builds scalable, cloud-powered web applications. 
              I specialize in .NET, C#, JavaScript, React, and AWS to create clean, efficient solutions 
              that solve real-world problems. Whether working on personal passion projects or professional 
              systems, I love transforming ideas into high-performance solutions, from developing APIs and 
              optimising cloud infrastructure to building intuitive interfaces.
            </p>
            <div>
              <a
                href="/0808Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 w-fit py-3 bg-slate-800 text-teal-400 font-medium rounded-lg
                           border border-slate-700 hover:bg-slate-700 transition-colors duration-200"
              >
                View Resume
              </a>
            </div>
            
          </section>
          
          {/* Experience section */}
<section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
  <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12  lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 ">Experience</h2>
  </div>
  
  <ol className="group/list">
    {/* First Experience */}
    <li className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        
        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
          SEP 2024 — PRESENT
        </header>
        
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug text-slate-200">
            <div>
              <span className="text-lg font-bold">Software Engineer · Jung Talents</span>
            </div>
          </h3>
          
          <ul className="mt-2 text-sm leading-normal list-disc pl-5 space-y-1">
            <li>
              Collaborated in team on the migration of a high-traffic commercial website from 
              <span className="text-blue-400 font-medium"> .NET 8</span> to 
              <span className="text-blue-400 font-medium"> .NET 9</span>, contributing to 
              <span className="text-blue-400 font-medium"> 20% improved efficiency</span> and 
              <span className="text-blue-400 font-medium"> 25% reduced latency</span>, enhancing customer experience and 
              <span className="text-blue-400 font-medium"> system reliability</span>.
            </li>
            <li>
                Conducted comprehensive 
                <span className="text-blue-400 font-medium"> codebase analysis</span>, designed
                unit test cases, and developed 
                test plans for a commercial education platform,  
                <span className="text-blue-400 font-medium"> ensuring robust handling</span> of 
                <span className="text-blue-400 font-medium"> complex user scenarios</span> for both customers and platform employees.
            </li>
            <li>
                Participated in the end-to-end deployment of several full-stack .NET web applications, integrating multiple frontend frameworks and AWS cloud services to ensure scalability, security, and seamless performance.
            </li>
          </ul>
          
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">.NET</div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">C#</div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">AWS</div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">React</div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Docker</div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">JavaScript</div>
            </li>
          </ul>
        </div>
      </div>
    </li>

    {/* Second Experience */}
    <li className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        
        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
          JULY 2022 — SEP 2024
        </header>
        
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug text-slate-200">
            <div>
              <span className="text-lg font-bold">Crew Member · McDonalds</span>
            </div>
          </h3>
          
          <ul className="mt-2 text-sm leading-normal list-disc pl-5 space-y-1">
            <li>Worked with other team members to deliver 
                <span className="text-blue-400 font-medium"> efficient</span> and 
                 <span className="text-blue-400 font-medium"> high-quality</span> food service, ensuring timely order delivery and 
                 customer satisfaction.</li>
            <li>Coordinated with colleagues to prepare food items and manage ingredient inventory, maintaining optimal stock levels for smooth operations.</li>
            <li>Upheld strict kitchen hygiene and food safety standards in <span className="text-blue-400 font-medium">compliance with regulations and company protocols</span>.</li>
          </ul>
          
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Team Collaboration</div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Time-management</div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Problem Solving</div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Effective Communication</div>
            </li>
          </ul>
        </div>
      </div>
    </li>
  </ol>
</section>

          {/* Projects section */}
          <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12  lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 ">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 ">Projects</h2>
            </div>
            <div>
              <ul className="space-y-12">
                {projects.map((project, index) => (
                  <li key={index} className="group relative">
                    <div className="bg-slate-800/50 rounded-lg p-6 transition-all hover:bg-slate-800/70">
                      <h3 className="text-xl font-medium text-slate-200 mb-2">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-teal-300 transition-colors">
                          {project.title} 
                        </a>
                      </h3>
                      <div className="aspect-video relative w-full h-48 mb-4 rounded overflow-hidden border-0 border-slate-200/10 group-hover:border-slate-200/30">
                        {project.image && (
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-contain w-full h-full"
                          />
                        )}
                      </div>
                      <ul className="text-sm leading-normal mb-4 list-disc list-inside">
  {project.description.map((point, index) => (
    <li key={index}>{point}</li>
  ))}
</ul>
                      <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
                        {project.technologies.map((tech, techIndex) => (
                          <li key={techIndex}>
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              {tech}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          

<section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Skills">
  <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 ">
    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 ">Skills</h2>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {skillCategories.map((category, index) => (
      <div 
        key={index}
        className={`group relative p-6 rounded-xl border ${category.borderColor} ${category.color} transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
        
        <div className="relative z-10">
          <div className="flex items-center mb-4">
            <span className="text-2xl mr-3">{category.icon}</span>
            <h3 className={`text-lg font-semibold ${category.textColor}`}>
              {category.title}
            </h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="px-3 py-1 text-sm rounded-full bg-slate-800/50 text-slate-300 border border-slate-700 hover:border-slate-500 transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden rounded-xl">
          <div className="absolute -inset-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-shine"></div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

          {/* Education section */}
          <section id="education" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Education">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12  lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 ">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 ">Education</h2>
            </div>
            <div>
              <ol className="group/list">
                {education.map((edu, index) => (
                  <li key={index} className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 sm:col-span-2">
                        <div className="flex items-center justify-center w-20 h-30 rounded-full border-0 ">
                          {edu.logo ? (
                            <Image
                              src={edu.logo}
                              alt={`${edu.university} logo`}
                              width={100}
                              height={100}
                              unoptimized={true} 
                              className="object-contain transform scale-150 rounded-full"
                            />
                          ) : (
                            <span className="text-xs text-slate-500">University Logo</span>
                          )}
                        </div>
                      </div>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <div>
                            <span className="text-lg font-bold">{edu.degree}</span>
                          </div>
                          <div className="text-teal-300">{edu.university}</div>
                        </h3>
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mt-1">{edu.year}</p>
                        <p className="mt-2 text-sm leading-normal">{edu.description}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Certifications section */}
          <section id="certifications" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Certifications">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 ">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 ">Certifications</h2>
            </div>
            <div>
              <ol className="group/list">
                {certifications.map((cert, index) => (
                  <li key={index} className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 sm:col-span-2">
                        <div className="flex items-center w-20 h-30  border-0">
                          {cert.certificateImage ? (
                            <Image
                              src={cert.certificateImage}
                              alt={`${cert.name} certificate`}
                              width={80}
                              height={80}
                              unoptimized={true} 
                              className="object-contain transform scale-400 "
                            />
                          ) : (
                            <span className="text-xs text-slate-500">Certificate</span>
                          )}
                        </div>
                      </div>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <div>
                            <span className="text-lg font-bold">{cert.name}</span>
                          </div>
                          <div className="text-teal-300">{cert.issuer}</div>
                        </h3>
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mt-1">{cert.year}</p>
                        <p className="mt-2 text-sm leading-normal">{cert.description}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
            <p>
              © 2025 K. Nguyen. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;