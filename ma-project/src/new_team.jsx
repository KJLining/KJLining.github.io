import image from './apate.png'

import React, { useState } from 'react';
import manolong from './adrianne.jpg'
import lining from './lining.jpg'
import desalit from './jeann.jpg'
import hermoso from './hermoso.jpg'
import nathaniel from './Nathaniel.jpg'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';



function NEW_Teams(){
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
                        <nav className='bg-white w-full flex items-center justify-between text-[20px] h-13.5 p-[15px] md:text-black'>
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
           <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 gap-x-2 m-10 '>
            {/* HERMOSO */}
            <div className="bg-white min-h-50px rounded-lg">
                <div className="bg-black w-full h-40 rounded-tr-lg rounded-tl-lg"></div>
                <img src={hermoso} alt="" className='w-40 h-40 justify-self-center rounded-full p-1 -mt-30 border-white border-2'/>
                <p className='justify-self-center font-bold mt-2'>Clarence Herold Hermoso</p>
                <p className='justify-self-center mb-3'>Frontend Developer</p>
                <p className='p-2'>Skills and expertise</p>
                <div className="grid grid-cols-4 justify-self-center gap-7">
                    <img src={image} alt="" className='w-10'/>
                    <img src={image} alt="" className='w-10'/>
                    <img src={image} alt="" className='w-10'/>
                    <img src={image} alt="" className='w-10'/>

                </div>
                <p className='p-2'>Social Media</p>

                {/* FACEBOOK ACCOUNT */}
                <div className="flex items-center ml-6">
                    <img src={image} alt="" className='w-8'/>
                    <p className='ml-2'>Clarence Herold Hermoso</p>
                </div>

                {/* GITHUB ACCOUNT */}
                <div className="flex items-center ml-6 mt-3 mb-20">
                    <img src={image} alt="" className='w-8'/>
                    <p className='ml-2'>Clarence Herold Hermoso</p>
                </div>

            </div>
            {/* LINING */}
            <div className="bg-white min-h-50px rounded-lg">
                <div className="bg-black w-full h-40 rounded-tr-lg rounded-tl-lg"></div>
                <img src={lining} alt="" className='w-40 h-40 justify-self-center rounded-full p-1 -mt-30 border-white border-2'/>
                <p className='justify-self-center font-bold mt-2'>Khristine Lining</p>
                <p className='justify-self-center mb-3'>Frontend Developer</p>
                <p className='p-2'>Skills and expertise</p>
                <div className="grid grid-cols-4 justify-self-center gap-7">
                    <img src={image} alt="" className='w-10'/>
                    <img src={image} alt="" className='w-10'/>
                    <img src={image} alt="" className='w-10'/>
                    <img src={image} alt="" className='w-10'/>

                </div>
                <p className='p-2'>Social Media</p>

                {/* FACEBOOK ACCOUNT */}
                <div className="flex items-center ml-6">
                    <img src={image} alt="" className='w-8'/>
                    <p className='ml-2'>Khristine Lining</p>
                </div>

                {/* GITHUB ACCOUNT */}
                <div className="flex items-center ml-6 mt-3 mb-20">
                    <img src={image} alt="" className='w-8'/>
                    <p className='ml-2'>Khristine Lining</p>
                </div>

            </div>
            {/* MANOLONG */}
            <div className="bg-white min-h-50px rounded-lg">
                <div className="bg-black w-full h-40 rounded-tr-lg rounded-tl-lg"></div>
                <img src={manolong} alt="" className='w-40 h-40 justify-self-center rounded-full p-1 -mt-30 border-white border-2'/>
                <p className='justify-self-center font-bold mt-2'>Adrianne Manolong</p>
                <p className='justify-self-center mb-3'>Project Manager/ QA Tester</p>
                <p className='p-2'>Skills and expertise</p>
                <div className="grid grid-cols-4 justify-self-center gap-7">
                    <img src={image} alt="" className='w-10'/>
                    <img src={image} alt="" className='w-10'/>
                    <img src={image} alt="" className='w-10'/>
                    <img src={image} alt="" className='w-10'/>

                </div>
                <p className='p-2'>Social Media</p>

                {/* FACEBOOK ACCOUNT */}
                <div className="flex items-center ml-6">
                    <img src={image} alt="" className='w-8'/>
                    <p className='ml-2'>Adrianne Manolong</p>
                </div>

                {/* GITHUB ACCOUNT */}
                <div className="flex items-center ml-6 mt-3 mb-20">
                    <img src={image} alt="" className='w-8'/>
                    <p className='ml-2'>Adrianne Manolong</p>
                </div>

            </div>
            {/* NATHANIEL */}
            <div className="bg-white min-h-50px rounded-lg">
                <div className="bg-black w-full h-40 rounded-tr-lg rounded-tl-lg"></div>
                <img src={nathaniel} alt="" className='w-40 h-40 justify-self-center rounded-full p-1 -mt-30 border-white border-2'/>
                <p className='justify-self-center font-bold mt-2'>Nathaneil Ramirez</p>
                <p className='justify-self-center mb-3'>Project Manager</p>
                <p className='p-2'>Skills and expertise</p>
                <div className="grid grid-cols-4 justify-self-center gap-7">
                    <img src={image} alt="" className='w-10'/>
                    <img src={image} alt="" className='w-10'/>
                    <img src={image} alt="" className='w-10'/>
                    <img src={image} alt="" className='w-10'/>

                </div>
                <p className='p-2'>Social Media</p>

                {/* FACEBOOK ACCOUNT */}
                <div className="flex items-center ml-6">
                    <img src={image} alt="" className='w-8'/>
                    <p className='ml-2'>Nathaneil Ramirez</p>
                </div>

                {/* GITHUB ACCOUNT */}
                <div className="flex items-center ml-6 mt-3 mb-20">
                    <img src={image} alt="" className='w-8'/>
                    <p className='ml-2'>Nathaneil Ramirez</p>
                </div>

            </div>
            {/* DESALIT */}
            <div className="bg-white min-h-50px rounded-lg">
                <div className="bg-black w-full h-40 rounded-tr-lg rounded-tl-lg"></div>
                <img src={desalit} alt="" className='w-40 h-40 justify-self-center rounded-full p-1 -mt-30 border-white border-2'/>
                <p className='justify-self-center font-bold mt-2'>Jeann Desalit</p>
                <p className='justify-self-center mb-3'>UI/UX Designer</p>
                <p className='p-2'>Skills and expertise</p>
                <div className="grid grid-cols-4 justify-self-center gap-7">
                    <img src={image} alt="" className='w-10'/>
                    <img src={image} alt="" className='w-10'/>
                    <img src={image} alt="" className='w-10'/>
                    <img src={image} alt="" className='w-10'/>

                </div>
                <p className='p-2'>Social Media</p>

                {/* FACEBOOK ACCOUNT */}
                <div className="flex items-center ml-6">
                    <img src={image} alt="" className='w-8'/>
                    <p className='ml-2'>Jeann Desalit</p>
                </div>

                {/* GITHUB ACCOUNT */}
                <div className="flex items-center ml-6 mt-3 mb-20">
                    <img src={image} alt="" className='w-8'/>
                    <p className='ml-2'>Jeann Desalit</p>
                </div>

            </div>
            
            
           </section>
        </main>

         
        
        
        </>
    );
   

  
}

export default NEW_Teams