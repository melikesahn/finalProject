import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { FcReadingEbook } from "react-icons/fc";
import { AuthContext } from '../contects/AuthProvider';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const {user}=useContext(AuthContext);
    console.log(user);

    // Toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Nav items
    const navItems = [
        { link: 'Anasayfa', path: '/' },
        { link: 'Hakkımızda', path: '/about' },
        { link: 'Kitaplar', path: '/shop' },
        { link: 'Kendi Kitabını Sat', path: '/admin/dashboard' },
        { link: 'Blog', path: '/blog' },
    ];

    return (
        <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
            <nav className={`py-4 lg:px-24 px-4  ${isSticky ? "sticky top-0 left-0 right-0 bg-teal-200":""}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    <Link to="/" className="text-2xl font-bold text-cyan-900 flex items-center gap-2">
                        <FcReadingEbook className="inline-block" />
                        ExBook
                    </Link>
                    <ul className='md:flex space-x-12 hidden mx-auto'>
                        {navItems.map(({ link, path }) => (
                            <li key={path}>
                                <Link to={path} className="block text-base text-black uppercase cursor-pointer hover:text-cyan-900">
                                    {link}
                                </Link>
                            </li>
                        ))}
                        
                    </ul>
                    {/* btn for lg devices */}
                    <div className='space-x-12  1g:flex items-center'>
                        <button><FaBarsStaggered className='w-5 hover:text-cyan-900'/></button>
                       {/* {
                            user? user.email :""
                        }*/}
                    </div>
                    {/* mobile menu */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-black focus:outline-none'>
                            {
                                isMenuOpen ? <FaXmark className='h-5 w-5 text-black'/>:<FaBarsStaggered
                                className='h-5 w-5 text-black'/>
                            }
                        </button>

                    </div>
                           
                </div>
                {/* mobile navitems*/}
                <div className={`space-y-4 px-4 mt-16 py-7 bg-cyan-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                {navItems.map(({ link, path }) => (
                            <li key={path}>
                                <Link to={path} className="block text-base text-white uppercase cursor-pointer hover:text-cyan-900">
                                    {link}
                                </Link>
                            </li>
                        ))}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
