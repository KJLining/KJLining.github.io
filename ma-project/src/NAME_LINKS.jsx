import image from './apate.png'

function Name_LINKS() {
    return(
  
        <div className="mt-[100px] flex">
           
            <div className="lg:w-[250px] flex flex-col">
                <button className="bg-white lg:bg-white p-[5px] w-[100px] flex justify-end items-center border-none mb-[10px] rounded-r-[50px] h-[50px] cursor-pointer"><img src={image} alt="" className='w-[40px] h-[40px] rounded-[50%]' /></button>
                <button className='bg-white lg:bg-white p-[5px] justify-end align-center flex border-none mb-[10px] rounded-r-[50px] w-[50px] h-[5-px] hover:w-[100px] cursor-pointer'><img src={image} alt="" className='w-[40px] h-[40px] rounded-[50%]' /></button>
                <button className='bg-white lg:bg-white p-[5px] justify-end align-center flex border-none mb-[10px] rounded-r-[50px] w-[50px] h-[5-px] hover:w-[100px] cursor-pointer'><img src={image} alt="" className='w-[40px] h-[40px] rounded-[50%]' /></button>
                <button className='bg-white lg:bg-white p-[5px] justify-end align-center flex border-none mb-[10px] rounded-r-[50px] w-[50px] h-[5-px] hover:w-[100px] cursor-pointer'><img src={image} alt="" className='w-[40px] h-[40px] rounded-[50%]' /></button>
            </div>
         
            <div className="p-[10px]">
           
                <p className="text-[70px] lg:text-[120px] font-bold relative text-white leading-1.5 cursor-default">Manolong Adrianne</p>
               
                <p className="text-[70px] lg:text-[120px] font-bold text-stroke-3 text-transparent">Manolong Adrianne</p>
                <p className="text-[70px] lg:text-[120px] font-bold text-stroke-3 text-transparent leading-1.5">Manolong Adrianne</p>
            </div>
        </div>
    );
}

export default Name_LINKS