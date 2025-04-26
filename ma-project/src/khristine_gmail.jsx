
import image from './apate.png'
import image3 from './lining_bg.png'
import React, { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import manolong from './adrianne.jpg'
import lining from './lining.jpg'
import desalit from './jeann.jpg'
import hermoso from './hermoso.jpg'
import nathaniel from './Nathaniel.jpg'
import Header from './Header';

function KhristineGMAIL(){
   
    //  MAIN CONTAINER
    return(
        <>
        <Header />
        <div className="absolute w-full h-[93%] bg-[rgb(160,109,51)] bg-gradient-to-b from-[#a06d33] to-[#3a2812]">
        
            <div className="mr-[-200px] w-[40%] h-[80vh] left-[70%] top-full absolute -translate-full">
                
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
               
                <div className="lg:w-[250px] flex flex-col">
                    <Link to="khristine"><button className="bg-white lg:bg-white p-[5px] w-[50px] flex justify-end items-center border-none mb-[10px] rounded-r-[50px] h-[50px] cursor-pointer"><img src={image} alt="" className='w-[40px] h-[40px] rounded-[50%] hover:w-[100px]' /></button></Link>
                    <button className='bg-white lg:bg-white p-[5px] justify-end align-center flex border-none mb-[10px] rounded-r-[50px] w-[100px] h-[5-px] hover:w-[100px] cursor-pointer'><img src={image} alt="" className='w-[40px] h-[40px] rounded-[50%]' /></button>
                    <Link to="khristineNUMBER">
                        <button className='bg-white lg:bg-white p-[5px] justify-end align-center flex border-none mb-[10px] rounded-r-[50px] w-[50px] h-[5-px] hover:w-[100px] cursor-pointer'><img src={image} alt="" className='w-[40px] h-[40px] rounded-[50%]' /></button>
                    </Link>
                    <Link to="khristineLocation">
                        <button className='bg-white lg:bg-white p-[5px] justify-end align-center flex border-none mb-[10px] rounded-r-[50px] w-[50px] h-[5-px] hover:w-[100px] cursor-pointer'><img src={image} alt="" className='w-[40px] h-[40px] rounded-[50%]' /></button>
                    </Link>
                </div>
             
                <div className="p-[10px]">
               
                    <p className="text-[70px] lg:text-[120px] font-bold relative text-white leading-1.5 cursor-default">Khristine Lining</p>
                   
                    <p className="text-[70px] lg:text-[120px] font-bold text-stroke-3 text-transparent">Khristine Lining</p>
                    <p className="text-[70px] lg:text-[120px] font-bold text-stroke-3 text-transparent leading-1.5">Khristine Lining</p>
                </div>
            </div>
        );
    }

    function CARDS() {
    
       
    
        return(
      
            <>
            {/* TOP CARDS */}
            <div className="w-full mt-[10px] p-[10px]">
                <div className="flex justify-self-center w-[55%] justify-between">
                    {/* NATHANEIL */}
                    <Link to="jeannGMAIL">
                    <div className="bg-white h-40 w-35 p-3 pt-3">
                        <img src={desalit} alt="" className='w-full h-25'/>
                        <p className='justify-self-center mt-2'>Jeann</p>
                    </div>
                    </Link>
                   
                   {/* JEANN DESALIT */}
                   <Link to="clarenceGMAIL">
                   <div className="bg-white h-40 w-35 p-3 pt-3">
                        <img src={hermoso} alt="" className='w-full h-25'/>
                        <p className='justify-self-center mt-2'>Clarence</p>

                    </div>
                   </Link>
                    

                </div>
                {/* BOTTOM CARDS */}
                
            </div>

            {/* BOTTOM CARD */}
            <div className="w-full mt-[-40px] p-[10px]">
                
                <div className="flex justify-self-center w-[77%] justify-between">
                    {/* LINING KHRISTINE */}
                    <Link to="ramirezGMAIL">
                        <div className="bg-white h-45 w-40 p-3 pt-3">
                            <img src={nathaniel} alt="" className='w-full h-30'/>
                            <p className='justify-self-center mt-2'>Nathaneil</p>
                        </div>
                    </Link>
                   
                    <Link to="manolong_GMAIL">
                        <div className="bg-white h-45 w-40 p-3 pt-3">
                            <img src={manolong} alt="" className='w-full h-30'/>
                            <p className='justify-self-center mt-2'>Manolong</p>
                        </div>
                    </Link>

                </div>
                {/* BOTTOM CARDS */}
                
            </div>
            </>
        );
    }
}

export default KhristineGMAIL