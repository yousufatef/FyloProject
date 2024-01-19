import { useState } from "react";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
const Footer = () => {
  const [contact] = useState([
    { icon: "icon-phone.svg", text: "+201115737646" },
    { icon: "icon-email.svg", text: "joeatef769@gmail.com" },
  ]);
  const [links] = useState([
    "About us",
    "Contact us",
    "Jobs",
    "Terms",
    "Press",
    "Privacy",
    "Blog",
  ]);
  const [socialIcons] = useState(["facebook", "twitter", "instagram"]);
  return (
    <section className="bg-[#0c1524] text-white">
      <div className="container pt-[320px] md:pt-[220px] pb-[100px]">
        <a href="/">
          <img
            src="src\assets\logo.svg"
            alt="Logo-img"
            className="w-[175px] h-[60px] object-contain"
          />
        </a>
        <div className="mt-[30px] flex justify-between flex-wrap flex-col md:flex-row gap-[30px]">
          <div className="flex items-start gap-[15px] w-[350px] max-w-full">
            <img
              src="src\assets\icon-location.svg"
              alt="location-img"
              className="w-[18px] h-[18px] object-contain"
            />
            <p className="font-normal text-sm tracking-[0.8px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              iure qui, maxime mollitia a provident pariatur sed aliquam
              eligendi impedit quia consectetur ab esse? Voluptas officia culpa
              reprehenderit quo sed?
            </p>
          </div>
          <div>
            {contact.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-[15px] mb-[15px] last-of-type:mb-0"
              >
                <img
                  src={`/src/assets/${item.icon}`}
                  alt="icon"
                  className="w-[18px] h-[18px] object-contain"
                />
                <p className="font-normal text-sm tracking-[0.8px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`${link.toLocaleLowerCase()}`}
                  className="text-base hover:text-primaryColor transition-all duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex gap-[15px] w-full justify-center md:w-auto">
            {socialIcons.map((icon) => (
              <li key={icon}>
                <a href="/">
                  <div className="w-[40px] h-[40px] element-center border border-white rounded-[50%] hover:bg-primaryColor transition-all duration-200">
                    {icon === "facebook" ? (
                      <FaFacebookF />
                    ) : icon === "twitter" ? (
                      <FaTwitter />
                    ) : (
                      <FaInstagram />
                    )}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
