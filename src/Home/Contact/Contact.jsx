import { FaEnvelope, FaFacebook, FaGithub, FaHome, FaLinkedin, FaPaperPlane, FaPhone, FaUser, FaWhatsapp } from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle";
import { FiMessageSquare } from "react-icons/fi";
import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({ duration: 800, overflow: 'hidden' }); // Prevent AOS overflow
    AOS.refresh();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMessage = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        'service_wz8js4t',
        'template_o3wwh1r',
        formRef.current,
        'geXARoXVS1_RzWBLL'
      );
      Swal.fire({
        title: "Good job!",
        text: "Message sent successfully!",
        icon: "success",
      });

      // Reset form inputs
      formRef.current.reset();
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email sending error:", error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <div id="contact" className="py-10 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 overflow-hidden">
      <div data-aos="fade-up" className="max-w-screen-lg mx-auto">
        <SectionTitle
          heading="Contact Me"
          subHeading="Feel free to reach out for any inquiries or collaborations!"
        />
      </div>

      <div className="mt-8 sm:mt-10 flex flex-col lg:flex-row gap-6 sm:gap-8 max-w-screen-lg mx-auto">
        {/* Contact Form */}
        <div className="w-full lg:w-1/2" data-aos="fade-right">
          <form ref={formRef} onSubmit={handleMessage} className="w-full space-y-4">
            {/* Name Input */}
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full pl-10 p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 hover:border-blue-500/40 text-sm sm:text-base"
                aria-label="Enter your name"
                required
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full pl-10 p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 hover:border-blue-500/40 text-sm sm:text-base"
                aria-label="Enter your email"
                required
              />
            </div>

            {/* Message Input */}
            <div className="relative">
              <FiMessageSquare className="absolute left-3 top-4 text-gray-400 text-lg" />
              <textarea
                placeholder="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 pl-10 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 h-32 sm:h-40 hover:border-blue-500/40 text-sm sm:text-base"
                rows="5"
                aria-label="Enter your message"
                required
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold p-3 rounded-lg hover:opacity-80 transition text-sm sm:text-base"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Details */}
        <div className="w-full lg:w-1/2 p-4 sm:p-6 text-white space-y-5 mt-6 lg:mt-0" data-aos="fade-left">
          <div className="flex items-center gap-2">
            <span className="w-8 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl"></span>
            <h3 className="text-xl sm:text-2xl font-semibold">Contact With Me</h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 sm:gap-5">
              <FaEnvelope className="text-blue-500 text-lg sm:text-xl size-5 sm:size-6" />
              <div>
                <p className="font-bold text-sm sm:text-base">Email:</p>
                <p className="text-sm sm:text-base">rafiqulislam42002@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 sm:gap-5">
              <FaPhone className="text-blue-500 text-lg sm:text-xl size-5 sm:size-6" />
              <div>
                <p className="font-bold text-sm sm:text-base">Phone:</p>
                <p className="text-sm sm:text-base">+8801716-697595</p>
              </div>
            </div>

            <div className="flex items-center gap-4 sm:gap-5">
              <FaHome className="text-blue-500 text-lg sm:text-xl size-5 sm:size-6" />
              <div>
                <p className="font-bold text-sm sm:text-base">Address:</p>
                <p className="text-sm sm:text-base">Pabna, Rajshahi, Bangladesh.</p>
              </div>
            </div>
          </div>

          {/* Social Icons with Links */}
          <div className="flex items-center space-x-4 sm:space-x-5 mt-6 text-gray-400">
            <Link to="https://wa.me/+8801716697595" target="_blank">
              <FaWhatsapp className="size-6 sm:size-7 cursor-pointer text-green-500 hover:text-green-400 transition-colors duration-300" />
            </Link>
            <Link to="https://github.com/RAFIQUL595" target="_blank">
              <FaGithub className="size-6 sm:size-7 cursor-pointer hover:text-white transition" />
            </Link>
            <Link to="https://www.linkedin.com/in/rafiqul-islam-16367b196" target="_blank">
              <FaLinkedin className="size-6 sm:size-7 cursor-pointer text-blue-600 hover:text-blue-500 bg-white transition-colors duration-300" />
            </Link>
            <Link to="https://www.facebook.com/rafiqul.islam.126222" target="_blank">
              <FaFacebook className="size-6 sm:size-7 cursor-pointer text-blue-600 hover:text-blue-500 bg-white transition-colors duration-300 rounded-full" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;