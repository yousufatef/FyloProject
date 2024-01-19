import { useEffect, useRef, useState } from "react";

const Header = () => {
    const headerRef = useRef()
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 100){
                headerRef.current.style.background = "#0c1524"
                headerRef.current.style.padding = "20px 0"
            }else{
                 headerRef.current.style.background = "transparent";
                 headerRef.current.style.padding = "60px 0";
            }
        })
    })
    const [links] = useState([
    { name: "Features", path: "/features" },
    { name: "Team", path: "/team" },
    { name: "Sign In", path: "/sign-in" },
  ]);
  return (
    <header
      ref={headerRef}
      className="pt-[60px] fixed top-0 left-0 w-full z-50 transition-all duration-150"
    >
      <div className="container flex justify-between items-center gap-[30px] sm:gap-0 flex-col sm:flex-row">
        <a href="#">
          <img src="/src/assets/logo.svg" alt="Logo-img" />
        </a>
        <nav>
          <ul className="flex item-center gap-7">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.path}
                  className="font-medium text-white opacity-75 hover:opacity-100 transition-all duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
