import images from './hermoso_bg.png'
import image from './apate.png'
import manolong from './adrianne.jpg'
import lining from './lining.jpg'
import desalit from './jeann.jpg'
import hermoso from './hermoso.jpg'
import nathaniel from './Nathaniel.jpg'
import React, { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Header from './Header'


function Clarencelocation(){
     // Initial image source
    
    return(
        <>
        <Header />
        <div className="absolute w-full h-[93%] bg-[rgb(160,109,51)] bg-gradient-to-b from-[#a06d33] to-[#3a2812]">
           
            <div className="w-[40%] h-[80vh] left-full top-full absolute -translate-full">
                
                <img src={images} alt="" className='w-full h-[80vh]'/>
                
            </div>
            <Name_LINKS/>
            <CARDS />
  
        </div>
        </>
    );
    function Name_LINKS() {
        return(
      
            <div className="mt-[100px] flex">
               
                <div className="lg:w-[250px] flex flex-col">
                    <Link to="clarence">
                    <button className="bg-white lg:bg-white p-[5px] w-[50px] flex justify-end items-center border-none mb-[10px] rounded-r-[50px] h-[50px] cursor-pointer"><img src={image} alt="" className='w-[40px] h-[40px] rounded-[50%]' /></button>
                    </Link>
                    <Link to="clarenceGMAIL"><button className='bg-white lg:bg-white p-[5px] justify-end align-center flex border-none mb-[10px] rounded-r-[50px] w-[50px] h-[5-px] hover:w-[100px] cursor-pointer'><img src={image} alt="" className='w-[40px] h-[40px] rounded-[50%]' /></button></Link>
                    <Link to="clarenceNUMBER">
                    <button className='bg-white lg:bg-white p-[5px] justify-end align-center 
                    flex border-none mb-[10px] rounded-r-[50px] w-[50px] h-[5-px] hover:w-[100px] 
                    cursor-pointer'><img src={image} alt="" className='w-[40px] h-[40px] rounded-[50%]' />
                    </button>
                    </Link>
                    <button className='bg-white lg:bg-white p-[5px] justify-end align-center flex border-none mb-[10px] rounded-r-[50px] w-[100px] h-[5-px] hover:w-[100px] cursor-pointer'><img src={image} alt="" className='w-[40px] h-[40px] rounded-[50%]' /></button>
                </div>
             
                <div className="p-[10px]">
               
                    <p className="text-[70px] lg:text-[120px] font-bold relative text-white leading-1.5 cursor-default">Clarence Hermoso</p>
                   
                    <p className='lg:text-sm mt-15 text-white font-bold '>
                        Where you can find me you ask?
                        Right here Baby
                    </p>

                    <div className="bg-white w-[700px] h-[300px] flex">
                        <div className="border-dashed m-4 border-2 w-full">
                            asd
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    function CARDS() {
    
       
    
        return(
      
            <div className="w-full flex absolute mt-[-100px]">
               
                <div className="">
          
                    <div className="w-[400px] h-[100px] text-white ml-[10px] mb-[-10px]">
                    </div>
                 
                    <div className="flex mt-[15px]">
                    <div className="">
    
                    <div className="h-[30px]">
                        
                    </div>

                    <div className="flex">
                        {/* CARD */}
                        
                                    {/* NATHANIEL */}
                                        <Link to="jeannLOCATION">
                                            <div style={{ cursor: 'pointer' }} className="bg-white ml-[10px] p-[10px] w-[200px] h-[178px] rounded-2xl">
                                            <img src={desalit} alt="" className='h-[100px] w-[160px] flex justify-self-center ' />
                                            <h1 className='justify-self-center text-[15px] mt-5'>Jeann Desalit</h1>
                                        
                                            </div>
                                        </Link>
                                    {/* NATHANEIL */}

                                    {/* CARD */}
                                    {/* JEANN */}
                                    <Link to="ramirezLOCATION">
                                        <div className="bg-white ml-[10px] p-[10px] w-[200px] h-[178px]">
                                            <img src={nathaniel} alt="" className='h-[100px] w-[160px] flex justify-self-center ' />
                                            <h1 className='justify-self-center text-[15px] mt-5'>Nathaneil Ramirez</h1>
                                        
                                            
                                        </div>
                                    </Link>
                                    {/* JEANN */}

                                    {/* CARD */}

                                    <Link to="khristineLOCATION">
                                    <div className="bg-white ml-[10px] p-[10px] w-[200px] h-[178px]">
                                        <img src={lining} alt="" className='h-[100px] w-[160px] flex justify-self-center ' />
                                        <h1 className='justify-self-center text-[15px] mt-5'>Khristine Lining</h1>
                                        
                                    </div>
                                    </Link>


                    </div>

    

                </div>
                        {/* SECOND CARD */}
                        <Link to="manolongLocation">
                            <div style={{ cursor: 'pointer' }} className="w-[240px] p-[10px] ml-[5px] h-[208px] bg-white">
                                <img src={manolong} alt="" className='h-[130px] w-[210px] flex justify-self-center'/>
                                <h1 className='justify-self-center text-[20px] mt-2'>Manolong Adrianne</h1>
                            
                            </div>
                        </Link>
                        {/* SECOND CARD */}
                       
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Clarencelocation