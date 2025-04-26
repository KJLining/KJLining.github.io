import image from './apate.png'
import manolong from './adrianne.jpg'
import lining from './lining.jpg'
import desalit from './jeann.jpg'
import hermoso from './hermoso.jpg'
import nathaniel from './Nathaniel.jpg'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Project_of_desalit(){
    const menu = document.querySelector('#menu');
    const Maincontents = document.querySelector('#Maincontents');
    
    const faSolid = document.querySelector('.fa-solid');
    function CLICKED(){
      menu.classList.toggle('hidden');
      Maincontents.classList.toggle('hidden');
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
                                                    <Link to="home"><li  className='p-1 hover:bg-[rgb(160,109,51)] hover:text-white rounded-xl ease-in duration-100'>HOME</li></Link>
                                                    <Link to="about"><li className='p-1 hover:bg-[rgb(160,109,51)] hover:text-white rounded-xl '>ABOUT</li></Link>
                                                    <Link to="teams"><li className='p-1 hover:bg-[rgb(160,109,51)] hover:text-white rounded-xl ease-in duration-200'>MEMBER</li></Link>
                                                    <Link to="projectCLARENCE"><li className='p-1 bg-[rgb(160,109,51)] text-white rounded-xl ease-in duration-200'>PROJECTS</li></Link>
                                                    <Link to="/"><li className='p-1 hover:bg-[rgb(160,109,51)] hover:text-white rounded-xl ease-in duration-200'>CONTACT</li></Link>
                                                </ul>
                                            </div>
                        
                                            <div id='hamburger' className='lg:hidden cursor-pointer z-50'>
                                                 <i onClick={CLICKED} className="fa-solid fa-bars"></i>
                                            </div>
                        
                                            <div id='menu' className="hidden bg-gray-800 w-full h-[100vh] absolute inset-0">
                                                <ul className='h-full grid place-items-center py-20'>
                                                    <Link to="home"><li  className='p-1 bg-[rgb(160,109,51)] text-white rounded-xl'>HOME</li></Link>
                                                    <li><a href="#"  className='p-1 hover:bg-[rgb(160,109,51)] hover:text-white rounded-xl ease-in duration-100'>ABOUT</a></li>
                                                    <Link to="teams"><li className='p-1 hover:bg-[rgb(160,109,51)] hover:text-white rounded-xl ease-in duration-200'>MEMBER</li></Link>
                                                    <Link to="projectCLARENCE"><li className='p-1 hover:bg-[rgb(160,109,51)] hover:text-white rounded-xl ease-in duration-200'>PROJECTS</li></Link>
                                                    <li><a href="/"  className='p-1 hover:bg-[rgb(160,109,51)] hover:text-white rounded-xl ease-in duration-200'>CONTACT</a></li>
                                                </ul>
                                            </div>
                                        </nav>
                        </header>


        <div className="absolute w-full h-[93%] bg-[rgb(160,109,51)] bg-gradient-to-b from-[#a06d33] to-[#3a2812]">
           
          <div className="w-full h-50 p-5 bg-amber-700 flex">

                <div className="w-[50%] ">
                    <div className="flex h-[80%] items-center justify-self-center">
                        <Link to="projectCLARENCE"><img src={hermoso} alt="" className='w-10 h-10 rounded-full mr-3' /></Link>
                        <Link to="projectLINING"><img src={lining} alt="" className='w-20 h-20 rounded-full mr-3 ' /></Link>
                        <Link><img src={desalit} alt="" className='w-30 h-30 rounded-full mr-3 ' /></Link>
                        <Link to="projectRAMIREZ"><img src={nathaniel} alt="" className='w-20 h-20 rounded-full mr-3 ' /></Link>
                        <Link to="projectMANOLONG"><img src={manolong} alt="" className='w-10 h-10 rounded-full ' /></Link>

                    </div>
                    <p className='justify-self-center font-bold text-white'>Jeann Desalit</p>
                </div>

            <div className="w-[50%] text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis delectus dolorum minus ab sapiente sed ducimus eos praesentium corrupti sequi error natus molestias nisi quod, ut consectetur! Sed, nesciunt consequuntur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis delectus dolorum minus ab sapiente sed ducimus eos praesentium corrupti sequi error natus molestias nisi quod, ut consectetur! Sed, nesciunt consequuntur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis delectus dolorum minus ab sapiente sed ducimus eos praesentium corrupti sequi error natus molestias nisi quod, ut consectetur! Sed, nesciunt consequuntur!

            </div>
          </div>

          <h1 className='text-5xl font-bold text-white justify-self-center'>Recent Project</h1>
            
            <div className="w-full flex">
                <div className="w-[50%] h-100 p-5 items-center content-center">
                    <video src="" className='w-full h-80 justify-self-center ' controls></video>
                </div>
                <div className="w-[50%] h-100 p-5 text-white">Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed libero accusantium enim magnam, temporibus quisquam ad possimus, rem unde similique dolorem. Blanditiis sed nobis dolorem at illo libero odio similique?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro facere ullam doloremque alias odio illo in? Quos unde dolorem error laboriosam labore assumenda corporis quasi quam. Voluptatum quae aliquid dolorem.
                </div>

            </div>

            {/* PREVIOUS AND NEXT BUTTON */}

        </div>
        </>
    );
   
}

export default Project_of_desalit