import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { fadeIn } from "@/styles/variants";

const Banner = () => {
  return (
    <section
      id="banner"
      className="min-h-[85vh] lg:min-h-[78vh] flex itens-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] title font-primary font-bold lg:text-[110px] leading-[0.8]"
            >
              JUAN <span>GONZÁLEZ</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[36px] lg:text-[60px] leading-[1.1] mt-4 mb-4"
            >
              <span className="mr-4 font-secondary ">I am a </span>
              <TypeAnimation
                sequence={["Developer", 2000, "Designer", 2000]}
                speed={50}
                className="text-accent font-secondary "
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-4 max-w-lg mx-auto lg:mx-0 font-tertiary font-bold"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed
              nibh eget ex dictum consectetur.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.9)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto mb-8 lg:mx-0"
            >
              <a href="https://github.com/Yanpii/" target="_blank">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/juan-gonz%C3%A1les-alegr%C3%ADa-0a58241ba/" target="_blank">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/y4npi/" target="_blank">
                <FaInstagram />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className=" lg:flex hidden flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src="/image/yanpiCharacter.png" alt="" className="p-4" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
