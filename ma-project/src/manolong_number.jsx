import manolong from './adrianne.jpg'
import lining from './lining.jpg'
import desalit from './jeann.jpg'
import hermoso from './hermoso.jpg'
import nathaniel from './Nathaniel.jpg'
import image from './apate.png'
import image3 from './gitna.png'
import React, { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Ramirez from './ramirez'
import Header from './Header'

function ManolongNumber(){
     
    //  MAIN CONTAINER
    return(
        <>
        <Header />
        <div className="absolute w-full h-[93%] bg-[rgb(160,109,51)] bg-gradient-to-b from-[#a06d33] to-[#3a2812]">
        
            <div className="mr-[-200px] w-[35%] h-[80vh] left-[35%] top-full absolute -translate-full">
                
                <img src={image3} alt="" className='w-[100%] h-[80vh]'/>
                
            </div>
            <Name_LINKS/>
            <CARDS />
        </div>
        </>
    );
    //  MAIN CONTAINER


    function Name_LINKS() {
        return(
      
            <div className="mt-[100px] flex">
               
                <div className="lg:w-[250px] flex flex-col absolute">
                    <Link to="/"><button className="bg-white lg:bg-white p-[5px] w-[50px] flex justify-end items-center border-none mb-[10px] rounded-r-[50px] h-[50px] cursor-pointer"><img src={image} alt="" className='w-[40px] h-[40px] rounded-[50%] hover:w-[100px]' /></button></Link>
                    <Link to="manolong_Gmail">
                        <button className='bg-white lg:bg-white p-[5px] justify-end align-center flex border-none mb-[10px] rounded-r-[50px] w-[50px] h-[5-px] hover:w-[100px] cursor-pointer'><img src={image} alt="" className='w-[40px] h-[40px] rounded-[50%]' /></button>
                    </Link>
                    <button className='bg-white lg:bg-white p-[5px] justify-end align-center flex border-none mb-[10px] rounded-r-[50px] w-[100px] h-[5-px] hover:w-[100px] cursor-pointer'><img src={image} alt="" className='w-[40px] h-[40px] rounded-[50%]' /></button>
                    <Link to="manolongLocation">
                    <button className='bg-white lg:bg-white p-[5px] justify-end align-center flex border-none mb-[10px] rounded-r-[50px] w-[50px] h-[5-px] hover:w-[100px] cursor-pointer'><img src={image} alt="" className='w-[40px] h-[40px] rounded-[50%]' /></button>
                    </Link>
                </div>
             
                <div className="p-[10px] ml-63">
               
                    <p className="text-[70px] lg:text-[120px] font-bold relative text-white leading-1.5 cursor-default">Manolong Tigreal</p>
                   
                    <p className="text-[70px] lg:text-[120px] font-bold text-stroke-3 text-transparent">Manolong Tigreal</p>
                    <p className="text-[70px] lg:text-[120px] font-bold text-stroke-3 text-transparent leading-1.5">Manolong Tigreal</p>
                </div>
            </div>
        );
    }

    function CARDS() {
    
       
    
        return(
      
            <>
            <div className="w-full absolute mt-18 flex flex-col">
                <div className="w-full flex">
                    <div className="w-[850px]">
                    
                    </div>

                    <div className="w-full ml-20">
                        <div className="bg-white justify-self-end mr-10 w-[70%] h-[120px] p-2">
                            <div className="w-full flex items-center font-bold text-3xl text-[rgb(160,109,51)]">
                                <img src={image} alt="" className='h-[50px] w-[50px] mr-10'/>
                                <p>Phone Number</p>
                            </div>
                            <p className='text-5xl text-[rgb(160,109,51)] ml-20'>09064597681</p>
                        </div>
                        <p className='justify-self-end mr-10 text-white font-bold'>
                        If you want just call me baby
                        </p>
                    </div>
                </div>

                <div className="w-full flex -ml-20">
                    <div className="w-[850px]">
                        asd
                    </div>

                    {/* CARDS */}
                    <div className="w-full ml-20 p-1 -mt-15 flex">
                        {/* KHRISTINE LINING */}
                        <Link to="khristineNUMBER">
                            <div className="bg-white w-60 h-60 p-5">
                                <img src={lining} alt="" className='w-50 h-40 justify-self-center'/>
                                <h1 className='justify-self-center font-bold mt-3'>Khristine Lining</h1>
                               
                            </div>
                        </Link>
                        

                        {/* NATHANEIL RAMIREZ */}

                        <Link to="ramirezNUMBER">
                            <div className="bg-white w-45 h-50 mt-10 ml-1 p-3">
                                <img src={nathaniel} alt="" className='w-50 h-30 justify-self-center'/>
                                <h1 className='justify-self-center font-bold mt-3'>Nathaneil Ramirez</h1>
                            
                            </div>
                        </Link>

                        {/* JEANN DESALIT */}

                        <Link to="jeannNUMBER">
                            <div className="bg-white w-45 h-50 mt-10 ml-1 p-3">
                                <img src={desalit} alt="" className='w-50 h-30 justify-self-center'/>
                                <h1 className='justify-self-center font-bold mt-3'>Jeann Desalit</h1>
                               
                            </div>
                        </Link>

                        {/* CLARENCE HERMOSO */}

                        <Link to="clarenceNUMBER">
                            <div className="bg-white w-45 h-50 mt-10 ml-1 p-3">
                                <img src={hermoso} alt="" className='w-50 h-30 justify-self-center'/>
                                <h1 className='justify-self-center font-bold mt-3'>Clarence Hermoso</h1>
                               
                            </div>
                        </Link>
                    </div>
                    {/* CARDS */}

                </div>
            </div>
            
            
            </>
        );
    }
}

export default ManolongNumber