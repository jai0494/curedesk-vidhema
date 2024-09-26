// src/components/Navbar.tsx
import React from 'react';
import { menuItems } from '../json/menuItems';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  

  return (
    <header className="py-2 bg-white fixed shadow-md top-0 left-0 right-0 z-50 border-solid border-[0px_0px_1px_0px] border-[#D7D7D754]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between p-4">
            {/* Logo */}
            <div className="text-gray-500 font-bold text-xl relative">
                <img src="/public/logo-light.svg" alt='Logo' className='h-[50px]' />
                <span className='font-nunito text-black font-bold absolute left-[64px] top-[10px] w-[129px] text-[2rem]'>Curedesk</span>
            </div>

            {/* Menu Items */}
            <div className="relative mx-auto">
                <ul className="flex space-x-6">
                {menuItems.map((item) => (
                    <li key={item.name} className="text-gray-500 relative group cursor-pointer font-nunito">
                    {item.dropdown ? (
                        <>
                        <span className="flex items-center">
                        <Link to={`${item.path}`} className="block w-full h-full">{item.name}</Link>
                        </span>
                        {/* Dropdown Menu */}
                        <ul className="absolute left-0 mt-2 w-60 bg-white text-black shadow-lg rounded-lg z-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transform transition-all duration-300 ease-in-out">
                            {item.dropdown.map((subItem) => (
                            <li key={subItem.name} className="px-4 py-2 hover:bg-gray-200 cursor-pointer font-nunito">
                                <Link to={`${subItem.path}`} className="block w-full h-full">
                                {subItem.name}
                                </Link>
                                
                            </li>
                            ))}
                        </ul>
                        </>
                    ) : (
                        <Link to={`${item.path}`} className="block w-full h-full">{item.name}</Link>
                    )}
                    </li>
                ))}
                </ul>
            </div>

            {/* CTA Button */}
            <div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Call to Action
                </button>
            </div>
            </nav>

        </div>
    </header>
  );
};

export default Navbar;
