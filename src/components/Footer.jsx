import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

// Icon Components
const SocialIcon = ({ type }) => {
  const icons = {
    instagram: <i className="lab la-instagram text-2xl" />,
    linkedin: <i className="lab la-linkedin text-2xl" />,
    twitter: <i className="lab la-twitter text-2xl" />,
    facebook: <i className="lab la-facebook text-2xl" />,
  };
  return icons[type] || <></>;
};

const EmailIcon = () => <i className="las la-envelope text-xl text-white mt-1" />;
const LocationIcon = () => <i className="las la-map-marker-alt text-xl text-white mt-1" />;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/events", label: "Events" },
    { path: "/team", label: "Our Team" },
    { path: "/about", label: "About Us" },
    { path: "/gallery", label: "Gallery" },
  ];

  const socialLinks = [
    { name: "Instagram", icon: "instagram", url: "https://www.instagram.com/wie.ieeemuj/" },
    { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/company/ieee-wie-muj/" },
    { name: "Twitter", icon: "twitter", url: "https://twitter.com/IEEEMUJ" },
    { name: "Facebook", icon: "facebook", url: "https://www.facebook.com/ieeemuj/" },
  ];

  return (
    <footer className="bg-purple-950 text-gray-400 pt-20 pb-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
        >
          {/* Logo and Description */}
          <div className="col-span-1 lg:col-span-2 space-y-5">
            <h3 className="text-white text-2xl font-bold">IEEE WIE MUJ</h3>
            <p className="max-w-lg text-sm leading-relaxed text-gray-400">
              IEEE Women in Engineering MUJ is dedicated to promoting women in tech and inspiring girls worldwide to follow their passion in engineering and science.
            </p>
            <div className="flex space-x-6 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition duration-300"
                >
                  <SocialIcon type={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `transition duration-200 ${
                        isActive ? "text-white font-medium" : "hover:text-white"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <EmailIcon />
                <a href="mailto:ieeewiemuj@gmail.com" className="hover:text-white">
                  ieeewiemuj@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <LocationIcon />
                <span>
                  Manipal University Jaipur,
                  <br />
                  Dehmi Kalan, Jaipur, Rajasthan
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500">© {currentYear} IEEE WIE MUJ. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-white transition duration-200">Privacy Policy</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-white transition duration-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
