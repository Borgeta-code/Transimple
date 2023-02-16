import Image from "next/image";
import github from "../public/img/github.svg";
import linkedin from "../public/img/linkedin.svg";
import { motion } from "framer-motion";

export function Nav() {
  return (
    <div className="w-screen relative flex ">
      <div className="flex gap-4 absolute right-3 top-3 z-30">
        <a
          href={"https://github.com/Borgeta-code"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            whileHover={{ opacity: 1, scale: 1.3 }}
            whileTap={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="flex justify-center items-center"
          >
            <Image
              src={github}
              id="color"
              className="w-8"
              draggable="false"
              alt="github"
            />
          </motion.div>
        </a>

        <a
          href={"https://www.linkedin.com/in/matheus-borges-coder/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            whileHover={{ opacity: 1, scale: 1.3 }}
            whileTap={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="flex justify-center items-center"
          >
            <Image
              src={linkedin}
              id="color"
              className="w-8"
              draggable="false"
              alt="linkedin"
            />
          </motion.div>
        </a>
      </div>
    </div>
  );
}
