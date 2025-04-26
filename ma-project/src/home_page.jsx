import image from './apate.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


function Home_page(){
    // const humburger = document.querySelector('#hamburger');
    const menu = document.querySelector('#menu');
    const home = document.querySelector('#home');
    // const hLink = document.querySelector('#hLink');
    const faSolid = document.querySelector('.fa-solid');
    function CLICKED(){

      menu.classList.toggle('hidden');
      home.classList.toggle('hidden');
      faSolid.classList.toggle('fa-xmark');
    }
    
    return(
        <>
  
           <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

           <header>
                <nav className=' w-full flex items-center justify-between text-red-500 text-[20px] h-13.5 p-[15px] md:text-black'>
                    <div className="w-80 py-5 font-bold text-3xl flex">
                        <img src={image} alt="" className='w-10 h-10 mr-[10px] rounded-full' />
                        <a href="">
                            TEAM<span className='text-[rgb(160,109,51)] self-center'>NAME</span>
                        </a>
                    </div>

                    <div>
                        <ul className='hidden lg:flex items-center space-x-6 text-black'>
                            <Link to="home"><li  className='p-1 bg-[rgb(160,109,51)] text-white rounded-xl'>HOME</li></Link>
                            <Link to="about"><li className='p-1 hover:bg-[rgb(160,109,51)] hover:text-white rounded-xl ease-in duration-100'>ABOUT</li></Link>
                            <Link to="teams"><li className='p-1 hover:bg-[rgb(160,109,51)] hover:text-white rounded-xl ease-in duration-200'>MEMBER</li></Link>
                            <Link to="projectCLARENCE"><li className='p-1 hover:bg-[rgb(160,109,51)] hover:text-white rounded-xl ease-in duration-200'>PROJECTS</li></Link>
                            <li><a href="/"  className='p-1 hover:bg-[rgb(160,109,51)] hover:text-white rounded-xl ease-in duration-200'>CONTACT</a></li>
                        </ul>
                    </div>

                    <div id='hamburger' className='lg:hidden cursor-pointer z-50'>
                         <i onClick={CLICKED} className="fa-solid fa-bars"></i>
                    </div>

                    <div id='menu' className="hidden bg-gray-800 w-full h-[100vh] absolute inset-0">
                        <ul className='h-full grid place-items-center py-20'>
                            <Link to="home"><li  className='p-1 bg-[rgb(160,109,51)] text-white rounded-xl'>HOME</li></Link>
                            <Link to="about"><li className='p-1 hover:bg-[rgb(160,109,51)] hover:text-white rounded-xl ease-in duration-100'>ABOUT</li></Link>
        
                            <Link to="teams"><li className='p-1 hover:bg-[rgb(160,109,51)] hover:text-white rounded-xl ease-in duration-200'>MEMBER</li></Link>
                            <Link to="projectCLARENCE"><li className='p-1 hover:bg-[rgb(160,109,51)] hover:text-white rounded-xl ease-in duration-200'>PROJECTS</li></Link>
                            <li><a href="/"  className='p-1 hover:bg-[rgb(160,109,51)] hover:text-white rounded-xl ease-in duration-200'>CONTACT</a></li>
                        </ul>
                    </div>
                </nav>
           </header>

           <main>
                <section id='home' className='h-[93vh] w-full bg-[rgb(160,109,51)] bg-gradient-to-b from-[#a06d33] to-[#3a2812]'>
                    <div  className="text-stroke-4 text-transparent text-[120px] font-bold relative">
                        <p className='justify-self-center '>WELCOME TO</p>
                        <p className='justify-self-center '>OUR TEAM</p>
                        <p className='justify-self-center '>PORTFOLIO!</p>
                    </div>

                    <div className="text-5xl -mt-100 text-stroke-3 text-transparent">
                        <p className='justify-self-center'>MADE BY STUDENTS OF CAVITE STATE UNIVERSITY IMUS</p>
                        <p className='justify-self-center'>CAMPUS</p>
                    </div>
                </section>
           </main>
                  

      
        
        </>
    );
   

  
}

export default Home_page