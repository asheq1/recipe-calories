import Search from '../../assets/search.png'
import Profile from '../../assets/profile.png'

const Header = () => {
    return (
        <div className='flex justify-around items-center mt-3'>
            <h1 className="text-logo font-bold">Recipe Calories</h1>
            <div className="text-mid space-x-5 ">
                <a href="" className='hover:text-hover'>Home</a>
                <a href="" className='hover:text-hover'>Recipe</a>
                <a href="" className='hover:text-hover'>About</a>
                <a href="" className='hover:text-hover'>Search</a>
            </div>
            <div className='flex'>
                <div className='flex items-center mr-2 p-2 bg-gray-100 rounded-full'>
                    <img className='w-6' src={Search} alt="" />
                    <input className='mb-1 ml-1 bg-gray-100 ' type="text" name="" id="" placeholder="Search"/>
                </div>
                <div>
                    <img className='w-10 bg-[#0BE58A] rounded-full' src={Profile} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;