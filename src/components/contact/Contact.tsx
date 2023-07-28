import { fadeIn } from "@/styles/variants";
import { motion } from "framer-motion";


const Contact = () => {

    return <div id="contact" className="py-8 lg:py-24 lg:h-screen flex items-center justify-center">


<motion.form
 variants={fadeIn("up", 0.3)}
 initial="hidden"
 whileInView={"show"}
 viewport={{ once: false, amount: 0.7 }}
className="bg-transparent p-8 rounded shadow-md">
<h1 className="title font-primary font-bold text-[40px] lg:text-[60px] text-center lg:text-left">Contact me</h1>
      <div className="mb-4">
        <label className="block text-white text-sm font-primary font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="w-full text-black p-2 border rounded-md font-secondary focus:outline-none focus:ring focus:border-blue-300"
          type="text"
          id="name"
          placeholder="Your Name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-white text-sm font-primary font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="w-full text-black p-2 border rounded-md font-secondary focus:outline-none focus:ring focus:border-blue-300"
          type="email"
          id="email"
          placeholder="Your Email"
        />
      </div>
      <div className="mb-4">
        <label className="block text-white text-sm font-primary font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          className="w-full text-black p-2 border font-secondary rounded-md focus:outline-none focus:ring focus:border-blue-300"
          id="message"
          rows={4}
          placeholder="Your Message"
        />
      </div>
      <div className="flex justify-center items-center">
      <button
        className="btn font-primary font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
        type="submit"
      >
        Submit
      </button>
      </div>
    </motion.form>
    


</div>



   
    }
     export default Contact;