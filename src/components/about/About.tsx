import { fadeIn } from "@/styles/variants";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const About = () => {
  return (
    <div
      id="about"
      className="py-4 lg:py-24 lg:h-screen flex items-center mt-8 mb-8"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg;items-center lg:gap-x-20 lg:gap-y-0">
          <motion.img
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            src="/image/mouse.png"
            alt=""
            className=" flex-1 max-h-[640px] max-w-[500px] mb-4  "
          />

          <div flex-1 className="overflow-hidden">
            <motion.div
              variants={fadeIn("left", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <TypeAnimation
                sequence={["About me", 2000, "Skills", 2000]}
                speed={50}
                className="title font-primary font-bold text-[32px] "
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>

            <motion.h3
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="font-secondary text-white text-[26px] mb-4 leading-[46px]"
            >
              I am Juan
            </motion.h3>
            <motion.p
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-4 font-tertiary font-bold"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              sit amet efficitur orci, a dapibus eros. Quisque dignissim
              ullamcorper mauris vitae consectetur. Aliquam vehicula dolor
              augue, ut pellentesque arcu posuere non.
            </motion.p>

            <div style={{ overflowX: "hidden" }}>
              <motion.div
                variants={fadeIn("left", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.5 }}
                className="min-w-full bg-transparent border-b border-accent  rounded-lg overflow-hidden "
              >
                <div className="grid grid-cols-2">
                  <div className="p-4 text-center text-accent font-primary">
                    Programming Languages
                  </div>
                  <div className="p-4 text-center flex items-center -space-x-4">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
                      className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                    />
                    <img
                      src="https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png"
                      className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                    />
                    <img
                      src="https://www.freepnglogos.com/uploads/logo-php-png/php-server-integration-wysiwyg-html-editor-froala-10.png"
                      className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                    />
                    <img
                      src="data:image/png;base64,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"
                      className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                    />
                    <img
                      src="https://logowik.com/content/uploads/images/123_css3.jpg"
                      className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn("left", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="min-w-full bg-transparent border-b border-accent  rounded-lg overflow-hidden"
              >
                <div className="grid grid-cols-2">
                  <div className="p-4 text-center font-primary text-accent">
                    Frameworks and libraries
                  </div>
                  <div className="p-4 text-center  flex items-center -space-x-4">
                    <img
                      src="data:image/png;base64,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"
                      className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                    />
                    <img
                      src="https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp"
                      className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                    />
                    <img
                      src="https://yt3.googleusercontent.com/ikv41jMTr1uHGdILrJhvbfVJcDt4oqhwApKX37TjAleF_cRPbF2W-waj7uMnS5JySvnlvAlTCg=s900-c-k-c0x00ffffff-no-rj"
                      className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                    />
                    <img
                      src="https://www.lucushost.com/blog/wp-content/uploads/2019/10/bootstrap.png"
                      className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn("left", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="min-w-full bg-transparent border-b border-accent  rounded-lg overflow-hidden"
              >
                <div className="grid grid-cols-2">
                  <div className="p-4 text-center font-primary text-accent">
                    Databases
                  </div>
                  <div className="p-4 text-center  flex items-center -space-x-4">
                    <img
                      src="https://res.cloudinary.com/hevo/image/upload/f_auto,q_auto/v1626694700/hevo-blog/MongoDB-sm-logo-500x400-1-1.gif"
                      className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                    />
                    <img
                      src="data:image/png;base64,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"
                      className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                    />
                    <img
                      src="https://www.influxdata.com/wp-content/uploads/PostgreSQL-logo.jpg"
                      className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn("left", 0.7)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="min-w-full bg-transparent border-b border-accent rounded-lg overflow-hidden"
              >
                <div className="grid grid-cols-2">
                  <div className="p-4 text-center font-primary text-accent">
                    Tools
                  </div>
                  <div className="p-4 text-center flex items-center -space-x-4">
                    <img
                      src="https://miro.medium.com/v2/resize:fit:870/1*l9IZ_LeUCP_vwxjDKI2Xgw.jpeg"
                      className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                    />
                    <img
                      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                      className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
