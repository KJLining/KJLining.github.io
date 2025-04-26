import image from './apate.png'
import React, { useState } from 'react';
import images from './try-4.png'

function CARDS() {

    // Initial image source
      const [imageSrc, setImageSrc] = useState(image);
    
      // Function to handle the click and change the image source
      const changeImage = () => {
        setImageSrc(images); // Change to the new image
      };

    return(
  
        <div className="w-full flex h-[48vh] absolute mt-[35px]">
          
            <div className="w-[350px] p-[10px] ml-[10px] bg-white h-[335px] flex flex-col justify-center items-center">
                <img src={image} alt="" className='h-[200px] w-[300px] flex justify-center items-center' />
                <h1 className='self-center text-[20px] mt-[-1px]'>Manolong Tigreal</h1>
         
                <div className=" flex self-center w-[90%] mt-[40px]">
                    <img src={image} alt="" className='w-[50px] h-[50px] mr-[60px] rounded-[50%]' />
                    <p>Manolong Adrianne</p>
                </div>
            </div>

            <div className="">
      
                <div className="w-[400px] h-[100px] text-white ml-[10px] mb-[-10px]">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga similique pariatur facere, deleniti error dolore rem veniam ipsum qui repellat labore deserunt quasi. Iste, aspernatur quis saepe autem excepturi tempora.</p>
                </div>
             
                <div className="flex mt-[15px]">
                    {/* SECOND CARD */}
              
                    <div onClick={changeImage} style={{ cursor: 'pointer' }} className="w-[240px] p-[10px] ml-[5px] h-[230px] bg-white">
                        <img src={imageSrc} alt="" className='h-[130px] w-[210px] flex justify-self-center'/>
                        <h1 className='justify-self-center text-[20px] mt[-1px]'>Manolong Tigreal</h1>
                     
                        <div className="justify-self-center items-center flex w-[90%] mt-[10px] text-[15px]">
                            <img src={image} alt="" className='w-[40px] h-[40px] rounded-[50%] mr-[10px]' />
                            <p>Manolong Adrianne</p>
                        </div>
                    </div>
                    {/* SECOND CARD */}
                   
                    <div className="">

                        <div className="h-[30px]">
                            
                        </div>
    
                       <div className="flex">
                         {/* CARD */}
                         
                         <div className="bg-white ml-[10px] p-[10px] w-[200px] h-[200px]">
                            <img src={image} alt="" className='h-[100px] w-[160px] flex justify-self-center ' />
                            <h1 className='justify-self-center text-[15px] mt-[-1px]'>Manolong Tigreal</h1>
                         
                            <div className="flex justify-self-center items-center w-[90%] mt-[20px] text-[12px]">
                                <img src={image} alt="" className='w-[40px] h-[40px] mr-[5px] rounded-[50%]' />
                                <p>Manolong Adrianne</p>
                            </div>
                        </div>

                         {/* CARD */}
                 
                         <div className="bg-white ml-[10px] p-[10px] w-[200px] h-[200px]">
                            <img src={image} alt="" className='h-[100px] w-[160px] flex justify-self-center ' />
                            <h1 className='justify-self-center text-[15px] mt-[-1px]'>Manolong Tigreal</h1>
                        
                            <div className="flex justify-self-center items-center w-[90%] mt-[20px] text-[12px]">
                                <img src={image} alt="" className='w-[40px] h-[40px] mr-[5px] rounded-[50%]' />
                                <p>Manolong Adrianne</p>
                            </div>
                        </div>

                         {/* CARD */}
                
                         <div className="bg-white ml-[10px] p-[10px] w-[200px] h-[200px]">
                            <img src={image} alt="" className='h-[100px] w-[160px] flex justify-self-center ' />
                            <h1 className='justify-self-center text-[15px] mt-[-1px]'>Manolong Tigreal</h1>
                            
                            <div className="flex justify-self-center items-center w-[90%] mt-[20px] text-[12px]">
                                <img src={image} alt="" className='w-[40px] h-[40px] mr-[5px] rounded-[50%]' />
                                <p>Manolong Adrianne</p>
                            </div>
                        </div>


                       </div>

                        

                    </div>
                </div>
            </div>
        </div>
    );
}

export default CARDS