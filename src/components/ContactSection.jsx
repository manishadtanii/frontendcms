import React from "react";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

function ContactSection() {
  return (
    <div className="w-full bg-gray-900 flex justify-center py-10 px-4">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-6 rounded-2xl overflow-hidden shadow-lg">
        {/* Map */}
        <div className="w-full h-[400px]">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2946.234567!2d-71.7575!3d42.1947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3e8c8b2c0c9a3%3A0x123456789abcdef!2s34%20Grafton%20St%2C%20Millbury%2C%20MA%2001527!5e0!3m2!1sen!2sus!4v1700000000000"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Info */}
        <div className="bg-gradient-to-b from-sky-500 to-blue-600 text-white p-8 relative">
          {/* Close Button (optional, like your screenshot) */}
          <button className="absolute top-4 right-4 text-white text-xl font-bold">
            ✕
          </button>

          <h2 className="text-3xl font-bold mb-6">Get in touch!</h2>

          {/* Office Address */}
          <div className="flex items-start mb-4">
            <MapPin className="mr-3 mt-1" />
            <div>
              <p className="font-bold">Office Address:</p>
              <p>34 Grafton Street, Suite 2</p>
              <p>Millbury, MA 01527</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start mb-4">
            <Phone className="mr-3 mt-1" />
            <div>
              <p className="font-bold">Custom Support & Sale:</p>
              <p>508.753.9282</p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-start mb-4">
            <Clock className="mr-3 mt-1" />
            <div>
              <p className="font-bold">Working Hours:</p>
              <p>Mon–Thu: 08:00am - 05:00pm</p>
              <p>Fri: 08:00am - 05:00pm</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start mb-6">
            <Mail className="mr-3 mt-1" />
            <div>
              <p className="font-bold">Email us:</p>
              <p>info@thevarallogroup.com</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="bg-white text-blue-600 p-2 rounded-full">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="bg-white text-blue-600 p-2 rounded-full">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
