import images from './ramirez_bg.png'
import image from './apate.png'
import manolong from './adrianne.jpg'
import lining from './lining.jpg'
import desalit from './jeann.jpg'
import hermoso from './hermoso.jpg'
import nathaniel from './Nathaniel.jpg'
import React, { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Contact_TEXT from './Contact_usTEXT'
import Header from './Header'

function Ramirez(){
    
    return(
        <>
        <Header />
        <div className="absolute w-full h-[93%] bg-[rgb(160,109,51)] bg-gradient-to-b from-[#a06d33] to-[#3a2812]">
           
            <div className="w-[40%] h-[80vh] left-full top-full absolute -translate-full">
                
                <img src={images} alt="" className='w-full h-[80vh]'/>
                
            </div>
            <Contact_TEXT />
            <Name_LINKS/>
            <CARDS />
        </div>
        </>
    );
    function Name_LINKS() {
        return(
      
            <div className="mt-[100px] flex">
               
                <div className="lg:w-[250px] flex flex-col">
                 
                    <button className="bg-white lg:bg-white p-[5px] w-[100px] flex justify-end items-center border-none mb-[10px] rounded-r-[50px] h-[50px] cursor-pointer"><img src={image} alt="" className='w-[40px] h-[40px] rounded-[50%]' /></button>
                    <Link to="ramirezGMAIL"><button className='bg-white lg:bg-white p-[5px] justify-end align-center flex border-none mb-[10px] rounded-r-[50px] w-[50px] h-[5-px] hover:w-[100px] cursor-pointer'><img src={image} alt="" className='w-[40px] h-[40px] rounded-[50%]' /></button></Link>
                    <Link to="ramirezNUMBER">
                    <button className='bg-white lg:bg-white p-[5px] justify-end align-center 
                    flex border-none mb-[10px] rounded-r-[50px] w-[50px] h-[5-px] hover:w-[100px] 
                    cursor-pointer'><img src={image} alt="" className='w-[40px] h-[40px] rounded-[50%]' />
                    </button>
                    </Link>
                    <Link to="ramirezLOCATION">
                    <button className='bg-white lg:bg-white p-[5px] justify-end align-center flex border-none mb-[10px] rounded-r-[50px] w-[50px] h-[5-px] hover:w-[100px] cursor-pointer'><img src={image} alt="" className='w-[40px] h-[40px] rounded-[50%]' /></button>
                    </Link>
                </div>
             
                <div className="p-[10px]">
               
                    <p className="text-[70px] lg:text-[120px] font-bold relative text-white leading-1.5 cursor-default">Nathaniel Ramirez</p>
                    <p className="text-[70px] lg:text-[120px] font-bold text-stroke-3 text-transparent">Nathaniel Ramirez</p>
                    <p className="text-[70px] lg:text-[120px] font-bold text-stroke-3 text-transparent leading-1.5">Nathaniel Ramirez</p>
                </div>
            </div>
        );
    }

    function CARDS() {
    
       
    
        return(
      
            <div className="w-full flex absolute mt-[20px]">
                
                    <div className="w-[350px] p-[10px] ml-[10px] bg-white h-[335px] flex flex-col justify-center items-center">
                        <img src={nathaniel} alt="" className='h-[200px] w-[300px] flex justify-center items-center' />
                        <h1 className='self-center text-[20px] mt-[-1px]'>Nathaniel Ramirez</h1>
                
                        <div className=" flex self-center w-[90%] mt-[40px]">
                            <img src={image} alt="" className='w-[50px] h-[50px] mr-[60px] rounded-[50%]' />
                            <p>Nathaniel Ramirez</p>
                        </div>
                    </div>
             
                <div className="">
          
                    <div className="w-[400px] h-[100px] text-white ml-[10px] mb-[-10px]">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga similique pariatur facere, deleniti error dolore rem veniam ipsum qui repellat labore deserunt quasi. Iste, aspernatur quis saepe autem excepturi tempora.</p>
                    </div>
                 
                    <div className="flex mt-[15px]">
                        {/* SECOND CARD */}
                        <Link to="jeann">
                            <div style={{ cursor: 'pointer' }} className="w-[240px] p-[10px] ml-[5px] h-[230px] bg-white">
                                <img src={desalit} alt="" className='h-[130px] w-[210px] flex justify-self-center'/>
                                <h1 className='justify-self-center text-[20px] mt[-1px]'>Jeann Makabago</h1>
                            
                                <div className="justify-self-center items-center flex w-[90%] mt-[10px] text-[15px]">
                                    <img src={image} alt="" className='w-[40px] h-[40px] rounded-[50%] mr-[10px]' />
                                    <p>Jeann Makabago</p>
                                </div>
                            </div>
                        </Link>
                        {/* SECOND CARD */}
                       
                        <div className="">
    
                            <div className="h-[30px]">
                                
                            </div>
        
                           <div className="flex">
                             {/* CARD */}
                             
                             {/* NATHANIEL */}
                                <Link to="clarence">
                                    <div style={{ cursor: 'pointer' }} className="bg-white ml-[10px] p-[10px] w-[200px] h-[200px]">
                                    <img src={hermoso} alt="" className='h-[100px] w-[160px] flex justify-self-center ' />
                                    <h1 className='justify-self-center text-[15px] mt-[-1px]'>Clarence Hermoso</h1>
                                
                                    <div className="flex justify-self-center items-center w-[90%] mt-[20px] text-[12px]">
                                        <img src={image} alt="" className='w-[40px] h-[40px] mr-[5px] rounded-[50%]' />
                                        <p>Clarence Hermoso</p>
                                    </div>
                                    </div>
                                </Link>
                             {/* NATHANEIL */}
    
                             {/* CARD */}
                     
                             <Link to="/">
                             <div className="bg-white ml-[10px] p-[10px] w-[200px] h-[200px]">
                                <img src={manolong} alt="" className='h-[100px] w-[160px] flex justify-self-center ' />
                                <h1 className='justify-self-center text-[15px] mt-[-1px]'>Manolong Tigreal</h1>
                            
                                <div className="flex justify-self-center items-center w-[90%] mt-[20px] text-[12px]">
                                    <img src={image} alt="" className='w-[40px] h-[40px] mr-[5px] rounded-[50%]' />
                                    <p>Manolong Adrianne</p>
                                </div>
                            </div>
                             </Link>
    
                             {/* CARD */}
                    
                            <Link to="khristine">
                            <div className="bg-white ml-[10px] p-[10px] w-[200px] h-[200px]">
                                <img src={lining} alt="" className='h-[100px] w-[160px] flex justify-self-center ' />
                                <h1 className='justify-self-center text-[15px] mt-[-1px]'>Khristine Lining</h1>
                                
                                <div className="flex justify-self-center items-center w-[90%] mt-[20px] text-[12px]">
                                    <img src={image} alt="" className='w-[40px] h-[40px] mr-[5px] rounded-[50%]' />
                                    <p>Khristine Lining</p>
                                </div>
                            </div>
                            </Link>
    
    
                           </div>
    
                            
    
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Ramirez