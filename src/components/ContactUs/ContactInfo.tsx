import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const contactDetails = [
  { id: 1, icon: FaPhone, text: "+1 234 567 890" },
  { id: 2, icon: FaEnvelope, text: "support@example.com" },
  { id: 3, icon: FaMapMarkerAlt, text: "123 Main Street, City, Country" },
  { id: 4, icon: FaClock, text: "Mon - Fri: 9:00 AM - 6:00 PM" },
];

const ContactInfo = () => {
  return (
    <div className="py-12 px-4 sm:px-8 lg:px-12">
      <div className="max-w-3xl mx-auto  p-8">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Contact Information
        </h2>
        <ul className="space-y-4 flex flex-col items-center">
          {contactDetails.map(({ id, icon: Icon, text }) => (
            <li key={id} className="flex items-center w-full max-w-sm">
              <div className=" bg-blue-500/90 p-2 text-white rounded-full">
                <Icon size={26} className=" md:text-2xl lg:text-3xl" />
              </div>
              <span className="ml-4 text-gray-700 font-medium">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
