import React, { useState } from "react";
import { Link } from "react-router-dom";
import Arrow from "./Arrow";
import { MapPin, Phone, Clock, Mail } from "lucide-react"; // ✅ Import icons

function Button({ text, link, arrowClass, color, size }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const isMailto = link && link.startsWith("mailto:");
  return (
    <>
      {link ? (
        isMailto ? (
          // If mailto, use <a>
          <a href={link} className={`main-btn flex font-manrope ${color}`}>
            <div className="text bg-secondary text-base leading-10 lg:text-lg py-1 px-6 lg:leading-[40px] rounded-[50px]">
              {text}
            </div>
            {arrowClass && <Arrow customClass="bg-secondary -rotate-45" />}
          </a>
        ) : (
          // Otherwise, use <Link>
          <Link to={link} className={`main-btn flex font-manrope ${color}`}>
            <div className="text bg-secondary text-base leading-10 lg:text-lg py-1 px-6 lg:leading-[40px] rounded-[50px]">
              {text}
            </div>
            {arrowClass && <Arrow customClass="bg-secondary -rotate-45" />}
          </Link>
        )
      ) : (
        // When no link -> act like button
        <button
          onClick={handleOpen}
          className={`main-btn flex font-manrope ${color}`}
        >
          <div className="text bg-secondary text-base lg:text-lg leading-10 py-1 px-6 lg:leading-[40px] rounded-[50px]">
            {text}
          </div>
          {arrowClass && <Arrow customClass="bg-secondary -rotate-45 " />}
        </button>
      )}

      {/* Popup Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 p-4 backdrop-blur-md  bg-opacity-50 flex items-center justify-center z-[50000]"
          onClick={handleClose} // ✅ Click outside to close
        >
          <div
            className="w-full max-w-7xl grid md:grid-cols-2  rounded-2xl overflow-hidden shadow-lg relative bg-white"
            onClick={(e) => e.stopPropagation()} // ✅ Prevent close when clicking inside
          >
            {/* Map */}
            <div className="w-full h-full hidden md:block">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2946.234567!2d-71.7575!3d42.1947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3e8c8b2c0c9a3%3A0x123456789abcdef!2s34%20Grafton%20St%2C%20Millbury%2C%20MA%2001527!5e0!3m2!1sen!2sus!4v1700000000000"
                allowFullScreen // ✅ Fix
                loading="lazy"
              ></iframe>
            </div>

            {/* Contact Info */}
            <div className="bg-btn text-white p-8 relative">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white text-xl font-bold"
              >
                ✕
              </button>

              <h2 className="text-h2 font-parkinsans mb-6">Get in touch!</h2>

              {/* Office Address */}
              <div className="flex items-start mb-4">
                <MapPin className="mr-3 mt-1" />
                <div>
                  <p className="font-manrope text-p mb-2">Office Address:</p>
                  <p className="font-manrope text-lg">
                    34 Grafton Street, Suite 2
                  </p>
                  <p className="font-manrope text-lg">Millbury, MA 01527</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start mb-4">
                <Phone className="mr-3 mt-1" />
                <div>
                  <p className="font-manrope text-p mb-2">
                    Custom Support & Sale:
                  </p>
                  <p className="font-manrope text-lg">508.753.9282</p>
                </div>
              </div>

              {/* Hours */}
              {/* <div className="flex items-start mb-4">
                <Clock className="mr-3 mt-1" />
                <div>
                  <p className="font-manrope text-p mb-2">Working Hours:</p>
                  <p className="font-manrope text-lg">
                    Mon–Thu: 08:00am - 05:00pm
                  </p>
                  <p className="font-manrope text-lg">Fri: 08:00am - 05:00pm</p>
                </div>
              </div> */}

              {/* Email */}
              <div className="flex items-start mb-6">
                <Mail className="mr-3 mt-1" />
                <div>
                  <p className="font-manrope text-p mb-2">Email us:</p>
                  <a
                    href="mailto:info@thevarallogroup.com"
                    target="_blank"
                    className="font-manrope text-lg"
                  >
                    info@thevarallogroup.com
                  </a>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/the-varallo-group/"
                  target="_blank"
                  className="bg-btn text-white w-10 h-10 flex items-center justify-center rounded-full"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="#"
                  className="bg-btn text-white w-10 h-10 flex items-center justify-center rounded-full"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>

              <div className="image-bottom absolute right-0 -rotate-180 bottom-0 w-32 md:w-60 h-32 md:h-60">
                <img src="/icon-half.png" alt="Featured 3" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Button;
