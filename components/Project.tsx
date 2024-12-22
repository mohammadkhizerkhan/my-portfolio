import { motion } from "framer-motion";
import Image from "next/image"; // Assuming you are using Next.js

const projects = [
  {
    title: "Gamecart",
    description:
      "An e-commerce store where you will get every single gaming Consoles, Games, Accessories etc in one place.",
    liveLink: "https://gamecart.netlify.app/",
    githubLink: "https://github.com/mohammadkhizerkhan/gamecart",
    image: "/gamecart.webp",
  },
  {
    title: "RixTv",
    description:
      "Its an video-library app just like youtube. it contains features like create playlist of videos, like or dislike videos, share video, add to watchlater ,play history and much more.",
    liveLink: "https://rixtv.netlify.app/",
    githubLink: "https://github.com/mohammadkhizerkhan/rixtv",
    image: "/rixtv.webp",
  },
  {
    title: "Tabfi",
    description:
      "Tabfi is a productivity app which lets the developer to focus on coding, know more here .",
    liveLink: "https://tabfi.netlify.app/login",
    githubLink: "https://github.com/aniketxparihar/hackprojectone",
    image: "/tabfi.webp",
  },
  {
    title: "Amigos",
    description:
      "A social media app that helps in connecting people, Sharing thoughts inspired by Twitter.",
    liveLink: "https://amigos-react.netlify.app/",
    githubLink: "https://github.com/mohammadkhizerkhan/social-media-2",
    image: "/amigos.webp",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-8 text-gray-900 dark:text-white"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center space-y-4"
            >
              <div className="w-full flex-shrink-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg mb-4"
                  width={500}
                  height={300}
                  objectFit="cover"
                />
              </div>
              <div className="w-full">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex space-x-4 mb-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Live
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
