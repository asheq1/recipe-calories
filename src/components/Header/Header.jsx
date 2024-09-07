import Search from '../../assets/search.png'
import Profile from '../../assets/profile.png'
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }


    return (
        <div className='flex justify-around items-center mt-3'>
            <h1 className="hidden sm:block text-logo font-bold">Recipe Calories</h1>
            
            {/* menu:  hidden one mobile  */}
            <div className="hidden sm:flex text-mid space-x-5 ">
                <a href="" className='hover:text-hover'>Home</a>
                <a href="" className='hover:text-hover'>Recipe</a>
                <a href="" className='hover:text-hover'>About</a>
                <a href="" className='hover:text-hover'>Search</a>
            </div>
            <div className='flex'>
                <div className="flex items-center hidden sm:flex mr-2 p-2 bg-gray-100 rounded-full">
                    <img className="w-6" src={Search} alt="Search icon" />
                    <input
                        className="mb-1 ml-1 bg-gray-100 outline-none text-sm"
                        type="text"
                        placeholder="Search"
                    />
                </div>
                <div className='cursor-pointer'>
                    <img className='w-10 bg-[#0BE58A] rounded-full' src={Profile} alt="" title='Profile' />
                </div>
            </div>

            {/* hamburger icon  */}
            <div className='sm:hidden'>
                <button onClick={toggleMenu} className='focus:outline-none'>
                    {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className='w-6 h-6'/>}
                </button>
            </div>

            {/* mobile menu  */}
            <div className={`${isOpen ? 'block' : 'hidden'} absolute top-16 left-0 text-center w-full bg-gray-100 sm:hidden z-50`} 
                style={{zIndex: 50}}>
                <a href="" className="block mb-2 hover:text-hover">Home</a>
                <a href="" className="block mb-2 hover:text-hover">Recipe</a>
                <a href="" className="block mb-2 hover:text-hover">About</a>
                <a href="" className="block mb-2 hover:text-hover">Search</a>
            </div>

        </div>
    );
};

export default Header;