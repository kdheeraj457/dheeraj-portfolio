export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Certificates", link: "#certificates" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I turn ideas into intelligent systems — blending AI, collaboration, and thoughtful design to make tech that truly works. ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/dheeraj-portfolio/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm always learning and experimenting with cutting-edge AI tools",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 lg:h-[300px]",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Python|TensorFlow|Keras|Scikit-learn|SQL|JavaScript|HTML/CSS",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "AI enthusiast passionate about creating personalized, data-driven experiences.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/dheeraj-portfolio/grid.svg",
    spareImg: "/dheeraj-portfolio/b4.svg",
  },

  
    
];

export const projects = [
  {
    id: 1,
    title: "Personalized Learning Platform",
    des: "Built an AI-driven platform that creates tailored learning roadmaps based on user input. Developed with Python, JavaScript, and HTML/CSS.",
    img: "/dheeraj-portfolio/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Dog Breed Identification System",
    des: "Developed a high-accuracy dog breed classifier using transfer learning with VGG19 and Keras. Achieved 99% validation accuracy.",
    img: "/dheeraj-portfolio/p2.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  
];

export const testimonials = [
  {
    name: "Ananya Mehta",
    role: "Mentor, SmartInternz AI Program",
    image: "/avatars/ananya.jpg",
    quote:
      "Dheeraj demonstrated strong technical expertise in building an AI-based learning platform. His curiosity, initiative, and clear problem-solving skills made him stand out.",
  },
  {
    name: "Rohan Desai",
    role: "Project Supervisor, B.K. Birla College",
    image: "/avatars/rohan.jpg",
    quote:
      "Dheeraj’s personalized AI roadmap project was an excellent display of how technology can revolutionize education. His commitment and creative approach were impressive.",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "AI Developer – Personalized Learning Platform",
    desc: "Built an AI-driven platform that creates tailored learning roadmaps based on user input. Developed with Python, JavaScript, and HTML/CSS.",
    className: "md:col-span-2",
    thumbnail: "/dheeraj-portfolio/exp1.svg",
  },
  {
    id: 2,
    title: "ML Engineer – Dog Breed Identification System",
    desc: "Developed a high-accuracy dog breed classifier using transfer learning with VGG19 and Keras. Achieved 99% validation accuracy.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/dheeraj-portfolio/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Created a full-featured auction system using HTML, CSS, JavaScript (frontend) and PHP, MySQL (backend) for product bidding and listing.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/dheeraj-portfolio/exp3.svg",
  
  },
  
];

export const socialMedia = [
  {
    id: 1,
    img: "/dheeraj-portfolio/git.svg",
  },
  {
    id: 2,
    img: "/dheeraj-portfolio/twit.svg",
  },
  {
    id: 3,
    img: "/dheeraj-portfolio/link.svg",
  },
];


export const certificates = [
  {
    id: 1,
    image: "/dheeraj-portfolio/certs/CertificateKaggleSQL.png",
    description: "Kaggle SQL Certificate",
    fileName: "Kaggle-SQL.pdf",
  },
  {
    id: 2,
    image: "/dheeraj-portfolio/certs/MachineLearning.png",
    description: "L&T Machine Learning Certificate",
    fileName: "Machine-Learning.pdf",
  },

  {
    id: 3,
    image: "/dheeraj-portfolio/certs/CertificateDesign.png",
    description: "L&T Design Thinking Certificate",
    fileName: "DesignThinking.pdf",
  },
  {
    id: 4,
    image: "/dheeraj-portfolio/certs/CertificateDeepLearning.png",
    description: "L&T Deep Learning Certificate",
    fileName: "DeepLearning.pdf",
  },
  {
    id: 5,
    image: "/dheeraj-portfolio/certs/CertificateSmartInternz.png",
    description: "SmartInternz Externship",
    fileName: "CertificateSmartInternz.pdf",
  },
  // Add more certificates here
];
