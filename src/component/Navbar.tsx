import React, { useState } from 'react';
import { menuItems } from '../json/menuItems';
import { Link } from 'react-router-dom';
import ModalComponent from './ModalComponent';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Function to close the menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="py-2 bg-white fixed shadow-md top-0 left-0 right-0 z-50 border-solid border-[0px_0px_1px_0px] border-[#D7D7D754]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-3 lg:px-8">
        <nav className="flex items-start md:items-center flex-col md:flex-row justify-between p-4 pl-0 pr-0">
          {/* Logo */}
          <div className="text-gray-500 font-bold text-xl relative min-w-[220px] md:min-w-[50px] xl:min-w-[270px]">
            <Link to="/">
              <img src="/logo-light.svg" alt="Logo" className="h-[50px] md:h-[40px] lg:h-[50px]" />
              <span className="font-nunito text-black font-bold absolute left-[64px] top-[10px] xl:w-[216px] text-[1.5rem] xl:text-[2rem] md:hidden lg:inline">
                The Curedesk
              </span>
            </Link>
          </div>

          {/* Hamburger/Close Icon for Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-500 focus:outline-none fixed top-[40px] right-[30px]">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuOpen ? (
                  // Close Icon
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  // Hamburger Icon
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div
            className={`${
              menuOpen ? 'block' : 'hidden'
            } md:block relative md:mx-auto md:flex md:space-x-6 pt-5 md:pt-0 md:ml-[-56px] lg:ml-0`}
          >
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
              {menuItems.map((item) => (
                <li key={item.name} className="text-gray-500 relative group cursor-pointer font-nunito">
                  {item.dropdown ? (
                    <>
                      <span className="flex items-center">
                        <Link 
                          to={`${item.path}`} 
                          className="block w-full h-full text-[0.8rem] xl:text-[1rem]"
                          onClick={handleLinkClick} // Close menu on link click
                        >
                          {item.name}
                        </Link>
                        {/* Dropdown arrow */}
                        <svg
                          className="ml-2 h-4 w-4 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
                      {/* Dropdown Menu */}
                      <ul className="md:min-w-[250px] absolute left-0 mt-0 border-[1.5px] border-blue-gray-50 w-60 bg-white text-black shadow-lg rounded-lg z-10 hidden group-hover:block hover:block transition-all duration-300 ease-in-out">
                        {item.dropdown.map((subItem) => (
                          <li key={subItem.name} className="px-4 py-2 hover:bg-gray-200 cursor-pointer font-nunito">
                            <Link 
                              to={`${subItem.path}`} 
                              className="block w-full h-full text-[0.8rem] xl:text-[1rem]"
                              onClick={handleLinkClick} // Close menu on link click
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link 
                      to={`${item.path}`} 
                      className="block w-full h-full text-[0.8rem] xl:text-[1rem]"
                      onClick={handleLinkClick} // Close menu on link click
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-blue-500 text-white px-4 md:px-2 lg:px-4 py-2 rounded hover:bg-blue-600 md:text-[0.8rem] lg:text-[1rem]" onClick={handleOpen}>
              Book Appointment
            </button>
          </div>
        </nav>

        {/* Mobile CTA Button */}
        {menuOpen && (
          <div className="md:hidden mt-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600" onClick={handleOpen}>
              Book Appointment
            </button>
          </div>
        )}
      </div>

      {/* ModalComponent for Book Appointment */}
      <ModalComponent open={open} handleClose={handleClose} title="Book an Appointment" />
    </header>
  );
};

export default Navbar;
