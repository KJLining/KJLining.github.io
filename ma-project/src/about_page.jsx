
import manolong from './adrianne.jpg'
import lining from './lining.jpg'
import desalit from './jeann.jpg'
import hermoso from './hermoso.jpg'
import nathaniel from './Nathaniel.jpg'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Header from './Header';
import Ramirez from './ramirez';


function About_page(){
    
    return(
        <>
       <Header />
       

        <main className="p-10 text-9xl font-bold absolute w-full h-[93%] bg-[rgb(160,109,51)] bg-gradient-to-b from-[#a06d33] to-[#3a2812]">
           
            <div className="smaller flex flex-col space-y-[2rem] md:space-y-0 sm:space-y-3">
            <h1 className="text-5xl text-fill-transparent text-stroke-2 text-stroke-white font-bold mb-10">ABOUT US</h1>

            {/* bg-[url(./assets/BG.jpg)] */}
               <div className="bg-white p-3 rounded-2xl">
               
               

               <p className="text-2xl text-fill-transparent text-stroke-2 text-stroke-white font-bold">
                We are a team of passionate  and innovative students from Cavite State University-Imus 
                Campus
                dedicated to showcasing creativity,knowledge, and excellence through our projects. As future 
                professionals, we strive to apply our skills, collaborate effectively, and create meaningful contributions
                that reflect the values and education instilled in us by our university.
                </p>
               
                
               </div>

               <div className="my-5 flex">
                    <div className="bg-white w-20 mr-2">
                        <img src={nathaniel} alt="" className='w-20 justify-self-center p-1 border-amber-800 border-dashed border-3'/>
                    </div>
                    <div className="bg-white w-20 mr-2">
                        <img src={desalit} alt="" className='w-20 justify-self-center p-1 border-amber-800 border-dashed border-3'/>
                    </div> <div className="bg-white w-20 mr-2">
                        <img src={hermoso} alt="" className='w-20 h-20 justify-self-center p-1 border-amber-800 border-dashed border-3'/>
                    </div> <div className="bg-white w-20 mr-2">
                        <img src={manolong} alt="" className='w-20 justify-self-center p-1 border-amber-800 border-dashed border-3'/>
                    </div> <div className="bg-white w-20 mr-2">
                        <img src={lining} alt="" className='w-20 justify-self-center p-1 border-amber-800 border-dashed border-3'/>
                    </div>
                </div>

               <div className="bg-white p-3 rounded-2xl">
               <p className="text-2xl text-fill-transparent text-stroke-2 text-stroke-white font-bold justify-self-end">Our work is is a testament to our commitment to learning, innovation, and community engagement.</p>
                <p className="text-2xl text-fill-transparent text-stroke-2 text-stroke-white font-bold justify-self-end">
                Through hard work that teamwork, we aim to inspire and make a difference in both our academic and  professional journeys.</p>
                <p className="text-2xl text-fill-transparent text-stroke-2 text-stroke-white font-bold justify-self-end">Made by the Students of Cavite State University-Imus Campus
                “Excellence,Service, and Innovation in Action”
                </p>
               </div>
               {/* <img src={BG} alt="" className='w-100'/> */}
            </div>
        </main>
        
        </>
    );
   

  
}

export default About_page