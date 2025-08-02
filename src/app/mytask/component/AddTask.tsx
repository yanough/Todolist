import { useState } from "react"
import { z } from "zod"
import Form from "./Form";

export const taskSchema = z.object({
    title : z.string().max(25),
    description : z.string(),
    date : z.date()
});


export default function AddTask(){
    
    const [ isOpen , setIsOpen ] = useState <boolean> (false)

    return(
      <div className={`${ isOpen ? "bg-[#c18db44d] h-100 w-83 rounded-lg": "w-[35px] h-[35px] bg-[#C18DB4] rounded-md"} 
                      p-[3px] border-2 border-[#C18DB4]  backdrop-blur-xs backdrop-brightness-75  
                      duration-500  absolute z-10 right-10 flex justify-center mt-[-0px] `}
             onClick={ () => {if (!isOpen) setIsOpen(true)} } >

              <div className={`w-full h-full justify-center items-center ${isOpen ? "hidden" : "flex"} fixed `}>
                +
              </div>

              <div className={`w-full h-8 text-xl ${isOpen ? "flex justify-end " : "hidden" } fixed`}>

                <div className="w-[35px] h-[35px] mr-[2px] mt-[-1px] border-2 bg-[#C18DB4] border-[#C18DB4] rounded-sm flex justify-center items-center "
                     onClick={ () => setIsOpen(!isOpen) } >
                    ⨯	
                </div>
                
              </div>
           
            {isOpen && 
            <div className="mt-[10%] h-[90%] w-[90%] flex justify-center items-center ">
                
                <Form/>
                
            </div>

            }

      </div>

    )
} 