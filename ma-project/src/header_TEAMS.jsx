import logoIMAGE from './apate.png';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Header_teams(){
    const humburger = document.querySelector('#hamburger');
    const menu = document.querySelector('#menu');
    const hLink = document.querySelector('#hLink');
    const faSolid = document.querySelector('.fa-solid');
    function CLICKED(){
      menu.classList.toggle('hidden');
      faSolid.classList.toggle('fa-xmark');
    }
    
    return (
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
          <div className="w-full flex items-center justify-between text-red-500 text-[20px] h-13.5 p-[15px] md:text-white">
            <div className="flex">
                <img src={logoIMAGE} alt="" className='w-10 h-10 mr-[10px] rounded-full' />
                <p className='text-black font-bold self-center'> TEAM<span className='text-[rgb(160,109,51)]'> NAME</span></p>
            </div>
            <div className="">
                <ul className='hidden lg:flex items-center space-x-6 text-black'>
                    <Link to="home"><li  className='p-1 hover:bg-[rgb(160,109,51)] hover:text-white rounded-xl'>HOME</li></Link>
                    <li><a href="#"  className='p-1 hover:bg-[rgb(160,109,51)] hover:text-white rounded-xl'>ABOUT</a></li>
                    <Link to="teams"><li className='p-1 bg-[rgb(160,109,51)] text-white rounded-xl'>MEMBER</li></Link>
                    <Link to="projectCLARENCE"><li className='p-1 hover:bg-[rgb(160,109,51)] hover:text-white rounded-xl'>PROJECTS</li></Link>
                    <li><a href="/"  className='p-1 hover:bg-[rgb(160,109,51)] hover:text-white rounded-xl'>CONTACT</a></li>
                </ul>
            </div>
            {/* HUMBURGER MENU */}
            <div id='hamburger' className='lg:hidden cursor-pointer z-50'>
                <i onClick={CLICKED} className="fa-solid fa-bars"></i>
            </div>

            <div id='menu' className="hidden bg-gray-800 text-white h-[100vh] absolute inset-0 lg:hidden">
            <ul className='h-full grid place-items-center py-20'>
                    <li><a href="#"  className='hover:text-black'>HOME</a></li>
                    <li><a id='hLink' href="#"  className='hover:text-black'>ABOUT</a></li>
                    <li><a id='hLink' href="#"  className='hover:text-black'>MEMBER</a></li>
                    <li><a id='hLink' href="#"  className='hover:text-black'>PROJECTS</a></li>
                    <li><a id='hLink' href="#"  className='hover:text-black'>CONTACT</a></li>
            </ul>
          </div>
          </div>
        
         
         
        </>
      );

     
   
}

export default Header_teams