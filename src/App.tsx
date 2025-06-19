import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Github,
  Linkedin,
  Code,
  Database,
  BarChart3,
  Shield,
  Brain,
  Award,
  Calendar,
  ChevronDown,
  Menu,
  X,
  User,
} from "lucide-react";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState("");

  const titles = [
    "Data Analyst",
    "Business Analyst",
    "Machine Learning Engineer",
    "Cybersecurity Enthusiast",
  ];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "experience",
        "projects",
        "skills",
        "education",
        "certifications",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentCharIndex < titles[currentTitleIndex].length) {
            setTypedText(
              titles[currentTitleIndex].substring(0, currentCharIndex + 1)
            );
            setCurrentCharIndex(currentCharIndex + 1);
          } else {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          if (currentCharIndex > 0) {
            setTypedText(
              titles[currentTitleIndex].substring(0, currentCharIndex - 1)
            );
            setCurrentCharIndex(currentCharIndex - 1);
          } else {
            setIsDeleting(false);
            setCurrentTitleIndex((currentTitleIndex + 1) % titles.length);
          }
        }
      },
      isDeleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timer);
  }, [currentCharIndex, currentTitleIndex, isDeleting, titles]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "DEEPFAKE DETECTION",
      description:
        "Advanced machine learning system using LSTM networks to identify manipulated media content, enhancing cybersecurity and preventing misinformation.",
      tech: ["Python", "Machine Learning", "LSTM", "Flask", "Computer Vision"],
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-500 to-pink-500",
    },
    {
      title: "AGROGUIDE",
      description:
        "Data-driven agricultural recommendation system providing personalized crop and fertilizer suggestions based on soil analysis and environmental factors.",
      tech: ["Python", "Machine Learning", "Flask", "Data Analysis"],
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Data Science Projects",
      description:
        "Comprehensive analytics projects including supermarket sales pattern discovery, energy consumption prediction, and medical research data analysis.",
      tech: ["Python", "Data Science", "Statistical Analysis", "Visualization"],
      icon: <Database className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "PASSWORD VAULT",
      description:
        "Secure password management system with AES encryption and dual-layer security architecture for enhanced data protection.",
      tech: ["Cybersecurity", "AES Encryption", "Database Security"],
      icon: <Shield className="w-6 h-6" />,
      color: "from-purple-500 to-indigo-500",
    },
  ];

  const skills = [
    { name: "Python", level: 90, category: "Programming" },
    { name: "Data Analysis", level: 85, category: "Analytics" },
    { name: "Machine Learning", level: 80, category: "AI/ML" },
    { name: "SQL/MySQL", level: 85, category: "Database" },
    { name: "Statistical Analysis", level: 78, category: "Analytics" },
    { name: "Data Visualization", level: 82, category: "Analytics" },
    { name: "Java", level: 75, category: "Programming" },
    { name: "Cybersecurity", level: 80, category: "Security" },
  ];

  const certifications = [
    "Oracle Java Fundamentals Certification",
    "Oracle Java Programming Certification",
    "Ethical Hacking Internship Certificate",
    "Industrial Project Based Learning - Data Science",
    "IOTVERSE Quiz Competition - 2nd Place",
    "CTF Certificate of Merit - Great Appsec Hackathon 2024",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Mysanthosh Karnati
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                "Home",
                "About",
                "Experience",
                "Projects",
                "Skills",
                "Education",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-3 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.toLowerCase()
                      ? "bg-blue-100 text-blue-600 font-medium"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-1">
              {[
                "Home",
                "About",
                "Experience",
                "Projects",
                "Skills",
                "Education",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
                Mysanthosh{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Karnati
                </span>
              </h1>
              <div className="text-2xl md:text-3xl text-gray-600 h-12 flex items-center justify-center">
                <span className="mr-2">I'm a</span>
                <span className="text-blue-600 font-semibold min-w-[300px] text-left">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
            </div>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Passionate Computer Science student specializing in data analysis
              and machine learning. Experienced in building data-driven
              solutions and uncovering insights that drive business decisions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>

            <div className="flex justify-center space-x-6">
              <a
                href="mailto:karnatimysanthosh304@gmail.com"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-gray-600 hover:text-blue-600"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="http://linkedin.com/in/mysanthosh-karnati-48346a289"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-gray-600 hover:text-blue-600"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="tel:+916281084437"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-gray-600 hover:text-blue-600"
              >
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="text-center">
            <ChevronDown className="w-8 h-8 text-gray-400 animate-bounce mx-auto" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Professional Photo */}
            <div className="lg:col-span-1 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                  {/* Placeholder for professional photo - replace src with your actual photo */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
                    <img
                      src="/public/mysantosh.png"
                      alt="Mysanthosh Karnati - Data Analyst"
                      className="w-full h-full object-cover"
                    />
                    <User className="w-32 h-32 text-white/80" />
                  </div>
                  {/* Uncomment and replace with your actual photo */}
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <Database className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Career Objective
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                I'm a passionate Computer Science student with a strong focus on
                data analysis and business intelligence. My expertise lies in
                transforming complex data into actionable insights that drive
                strategic business decisions. With hands-on experience in
                machine learning, statistical analysis, and data visualization,
                I'm eager to contribute to data-driven organizations and help
                solve real-world business challenges.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Hyderabad, Telangana</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">
                    karnatimysanthosh304@gmail.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">+91 6281084437</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center transform hover:scale-105 transition-all duration-300">
                  <Database className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Data Analysis
                  </h4>
                  <p className="text-sm text-gray-600">
                    Expert in extracting insights from complex datasets
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center transform hover:scale-105 transition-all duration-300">
                  <Brain className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Machine Learning
                  </h4>
                  <p className="text-sm text-gray-600">
                    Building predictive models and AI solutions
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center transform hover:scale-105 transition-all duration-300">
                  <BarChart3 className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Business Intelligence
                  </h4>
                  <p className="text-sm text-gray-600">
                    Transforming data into strategic insights
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl text-center transform hover:scale-105 transition-all duration-300">
                  <Shield className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Cybersecurity
                  </h4>
                  <p className="text-sm text-gray-600">
                    Ensuring data security and system integrity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>

            <div className="relative flex items-center justify-center">
              <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white mr-4">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Ethical Hacking Intern
                    </h3>
                    <p className="text-blue-600 font-medium">
                      SUPRAJA TECHNOLOGIES
                    </p>
                  </div>
                </div>

                <div className="flex items-center text-gray-500 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>May 2023 – June 2023</span>
                </div>

                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      Gained hands-on experience in identifying and mitigating
                      security vulnerabilities in networks and applications
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      Learned to work with advanced tools for penetration
                      testing, vulnerability assessment, and network security
                      analysis
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      Developed strong foundation in security protocols and
                      ethical hacking practices to ensure data protection and
                      system integrity
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
              Here are some of my key projects that demonstrate my expertise in
              data analysis, machine learning, and software development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div
                      className={`p-3 bg-gradient-to-r ${project.color} rounded-lg text-white mr-4`}
                    >
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-900">
                    {skill.name}
                  </span>
                  <span className="text-sm text-gray-500">
                    {skill.category}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="text-right text-sm text-gray-600">
                  {skill.level}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white mr-4">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Bachelor of Technology
                  </h3>
                  <p className="text-blue-600 font-medium">
                    Computer Science & Engineering
                  </p>
                </div>
              </div>
              <p className="text-gray-700 mb-2">
                <strong>
                  Geethanjali College of Engineering and Technology, Hyderabad
                </strong>
              </p>
              <p className="text-gray-600">2021-2025 | CGPA: 8.3</p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg text-white mr-4">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Intermediate (MPC)
                  </h3>
                  <p className="text-green-600 font-medium">
                    Mathematics, Physics, Chemistry
                  </p>
                </div>
              </div>
              <p className="text-gray-700 mb-2">
                <strong>Narayana Junior College</strong>
              </p>
              <p className="text-gray-600">2019-2021 | 95.6%</p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white mr-4">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Secondary School Certificate
                  </h3>
                  <p className="text-purple-600 font-medium">SSC</p>
                </div>
              </div>
              <p className="text-gray-700 mb-2">
                <strong>The Thapovan High School</strong>
              </p>
              <p className="text-gray-600">2019 | CGPA: 10.0</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section
        id="certifications"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Certifications & Achievements
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center mb-3">
                  <Award className="w-6 h-6 text-blue-600 mr-3" />
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                </div>
                <p className="text-gray-800 font-medium leading-relaxed">
                  {cert}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations,
              or just having a conversation about data and technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="mailto:karnatimysanthosh304@gmail.com"
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl text-center hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 group"
            >
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Email
              </h3>
              <p className="text-gray-600">karnatimysanthosh304@gmail.com</p>
            </a>

            <a
              href="tel:+916281084437"
              className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl text-center hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 group"
            >
              <Phone className="w-12 h-12 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Phone
              </h3>
              <p className="text-gray-600">+91 6281084437</p>
            </a>

            <a
              href="http://linkedin.com/in/mysanthosh-karnati-48346a289"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl text-center hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 group"
            >
              <Linkedin className="w-12 h-12 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                LinkedIn
              </h3>
              <p className="text-gray-600">Connect with me</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Mysanthosh Karnati
            </h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Data Analyst & Business Intelligence Professional
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="mailto:karnatimysanthosh304@gmail.com"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="http://linkedin.com/in/mysanthosh-karnati-48346a289"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="tel:+916281084437"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <Phone className="w-6 h-6" />
            </a>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">
              © 2024 Mysanthosh Karnati. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
