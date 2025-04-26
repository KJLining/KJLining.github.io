import image from './apate.png'

import React, { useState } from 'react';
import manolong from './adrianne.jpg'
import lining from './lining.jpg'
import desalit from './jeann.jpg'
import hermoso from './hermoso.jpg'
import nathaniel from './Nathaniel.jpg'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';



function Teams(){
    const humburger = document.querySelector('#hamburger');
    const menu = document.querySelector('#menu');

    //  const home = document.querySelector('#home');



    const hLink = document.querySelector('#hLink');
    const faSolid = document.querySelector('.fa-solid');
    function CLICKED(){

      menu.classList.toggle('hidden');
    // home.classList.toggle('hidden');
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
                                    <Link to="teams"><li className='p-1 bg-[rgb(160,109,51)] text-white rounded-xl ease-in duration-200'>MEMBER</li></Link>
                                    <Link to="projectCLARENCE"><li className='p-1 hover:bg-[rgb(160,109,51)] hover:text-white rounded-xl ease-in duration-200'>PROJECTS</li></Link>
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
        
        <main>
            <section id='home' className='text-9xl font-bold absolute w-full h-[93%] bg-[rgb(160,109,51)] bg-gradient-to-b from-[#a06d33] to-[#3a2812]'>
            <p className='text-2xl text-white lg:text-5xl'>Introducing Our Team Members</p>

            <div className="wrap w-[95%] justify-self-center h-[80%] mt-10 flex">

            {/* NATHANEIL RAMIREZ */}
            <div className="bg-white w-75 h-150 border-1 mr-5 min-w-70 rounded-2xl">
                <div className="bg-black h-40 rounded-tl-2xl rounded-tr-2xl">
                    
                </div>
                <img src={nathaniel} alt="" className='w-50 h-50 justify-self-center bg-white rounded-full -mt-35' />
                <p className='text-2xl justify-self-center'>Ramirez, Nathanieal</p>
                <p className='text-2xl justify-self-center font-light'>Project Manager</p>
                <p className='text-[18px] mt-10 ml-3 font-light'>Skills and expertise</p>
                <div className="flex">
                    <img src={image} alt=""  className='w-15 h-15 m-2'/>
                    <img src={image} alt=""  className='w-15 h-15 mt-2 mr-2'/>
                    <img src={image} alt=""  className='w-15 h-15 mt-2'/>
                    <img src={image} alt=""  className='w-15 h-15 m-2'/>

                </div>
                <p className='text-[18px] ml-3 mt-2 font-light'>Social Media</p>
                <div className="">
                    <div className="flex items-center">
                        <img src={image} alt=""  className='w-10 h-10 m-2'/>
                        <p className='text-[18px] ml-3 font-light justify-self-center'>Ramirex Nathaneil</p>
                    </div>
                    <div className="flex items-center">
                        <img src={image} alt=""  className='w-10 h-10 m-2'/>
                        <p className='text-[18px] ml-3 font-light justify-self-center'>Nathaneil</p>
                    </div>
                    
                </div>

                
                
            </div>

            {/* MANOLONG ADRIANNE */}
            <div className="bg-white w-75 h-150 border-1 mr-5 min-w-70 rounded-2xl">
                <div className="bg-black h-40 rounded-tl-2xl rounded-tr-2xl">
                    
                </div>
                <img src={manolong} alt="" className='w-50 h-50 justify-self-center bg-white rounded-full -mt-35' />
                <p className='text-2xl justify-self-center'>Manolong, Adrianne</p>
                <p className='text-[20px] justify-self-center font-light'>Project Manager / QA tester</p>
                <p className='text-[18px] mt-10 ml-3 font-light'>Skills and expertise</p>
                <div className="flex">
                    <img src={image} alt=""  className='w-15 h-15 m-2'/>
                    <img src={image} alt=""  className='w-15 h-15 mt-2 mr-2'/>
                    <img src={image} alt=""  className='w-15 h-15 mt-2'/>
                    <img src={image} alt=""  className='w-15 h-15 m-2'/>

                </div>
                <p className='text-[18px] ml-3 mt-2 font-light'>Social Media</p>
                <div className="">
                    <div className="flex items-center">
                        <img src={image} alt=""  className='w-10 h-10 m-2'/>
                        <p className='text-[18px] ml-3 font-light justify-self-center'>Manolong Adrianne</p>
                    </div>
                    <div className="flex items-center">
                        <img src={image} alt=""  className='w-10 h-10 m-2'/>
                        <p className='text-[18px] ml-3 font-light justify-self-center'> Adrianne</p>
                    </div>
                    
                </div>

                
                
            </div>

            {/* HERMOSO CLARENCE */}
            <div className="bg-white w-75 h-150 border-1 mr-5 min-w-70 rounded-2xl">
                <div className="bg-black h-40 rounded-tl-2xl rounded-tr-2xl">
                    
                </div>
                <img src={hermoso} alt="" className='w-50 h-50 justify-self-center bg-white rounded-full -mt-35' />
                <p className='text-2xl justify-self-center'>Hermoso, Clarence</p>
                <p className='text-2xl justify-self-center font-light'>Frontend Developer</p>
                <p className='text-[18px] mt-10 ml-3 font-light'>Skills and expertise</p>
                <div className="flex">
                    <img src={image} alt=""  className='w-15 h-15 m-2'/>
                    <img src={image} alt=""  className='w-15 h-15 mt-2 mr-2'/>
                    <img src={image} alt=""  className='w-15 h-15 mt-2'/>
                    <img src={image} alt=""  className='w-15 h-15 m-2'/>

                </div>
                <p className='text-[18px] ml-3 mt-2 font-light'>Social Media</p>
                <div className="">
                    <div className="flex items-center">
                        <img src={image} alt=""  className='w-10 h-10 m-2'/>
                        <p className='text-[18px] ml-3 font-light justify-self-center'>Clarence Hermoso</p>
                    </div>
                    <div className="flex items-center">
                        <img src={image} alt=""  className='w-10 h-10 m-2'/>
                        <p className='text-[18px] ml-3 font-light justify-self-center'> Hermoso</p>
                    </div>
                    
                </div>

                
                
            </div>

            {/* KHRISTINE LINING */}
            <div className="bg-white w-75 h-150 border-1 mr-5 min-w-70 rounded-2xl">
                <div className="bg-black h-40 rounded-tl-2xl rounded-tr-2xl">
                    
                </div>
                <img src={lining} alt="" className='w-50 h-50 justify-self-center bg-white rounded-full -mt-35' />
                <p className='text-2xl justify-self-center'>Lining, Khristine</p>
                <p className='text-2xl justify-self-center font-light'>Frontend Developer</p>
                <p className='text-[18px] mt-10 ml-3 font-light'>Skills and expertise</p>
                <div className="flex">
                    <img src={image} alt=""  className='w-15 h-15 m-2'/>
                    <img src={image} alt=""  className='w-15 h-15 mt-2 mr-2'/>
                    <img src={image} alt=""  className='w-15 h-15 mt-2'/>
                    <img src={image} alt=""  className='w-15 h-15 m-2'/>

                </div>
                <p className='text-[18px] ml-3 mt-2 font-light'>Social Media</p>
                <div className="">
                    <div className="flex items-center">
                        <img src={image} alt=""  className='w-10 h-10 m-2'/>
                        <p className='text-[18px] ml-3 font-light justify-self-center'>Khristine Lining</p>
                    </div>
                    <div className="flex items-center">
                        <img src={image} alt=""  className='w-10 h-10 m-2'/>
                        <p className='text-[18px] ml-3 font-light justify-self-center'> Lining</p>
                    </div>
                    
                </div>

                
                
            </div>

            {/* JEANN DESALIT */}
            <div className="bg-white w-75 h-150 border-1 mr-5 min-w-70 rounded-2xl">
                <div className="bg-black h-40 rounded-tl-2xl rounded-tr-2xl">
                    
                </div>
                <img src={desalit} alt="" className='w-50 h-50 justify-self-center bg-white rounded-full -mt-35' />
                <p className='text-2xl justify-self-center'>Desalit, Jeann</p>
                <p className='text-2xl justify-self-center font-light'>UI/UX Designer</p>
                <p className='text-[18px] mt-10 ml-3 font-light'>Skills and expertise</p>
                <div className="flex">
                    <img src={image} alt=""  className='w-15 h-15 m-2'/>
                    <img src={image} alt=""  className='w-15 h-15 mt-2 mr-2'/>
                    <img src={image} alt=""  className='w-15 h-15 mt-2'/>
                    <img src={image} alt=""  className='w-15 h-15 m-2'/>

                </div>
                <p className='text-[18px] ml-3 mt-2 font-light'>Social Media</p>
                <div className="">
                    <div className="flex items-center">
                        <img src={image} alt=""  className='w-10 h-10 m-2'/>
                        <p className='text-[18px] ml-3 font-light justify-self-center'>Jeann Desalit</p>
                    </div>
                    <div className="flex items-center">
                        <img src={image} alt=""  className='w-10 h-10 m-2'/>
                        <p className='text-[18px] ml-3 font-light justify-self-center'> Desalit</p>
                    </div>
                    
                </div>

                
                
            </div>

            </div>
            </section>
        </main>
         
        
        
        </>
    );
   

  
}

export default Teams