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
      <div className={`${ isOpen ? "h-100 w-83": "w-[35px] h-[35px] bg-[#807070]"} 
                      p-[3px] border-2 border-[#655757] rounded-lg backdrop-blur-xs backdrop-brightness-75  
                      shadow-sm shadow-zinc-500 duration-500  absolute z-10 right-10 flex justify-center `}
             onClick={ () => {if (!isOpen) setIsOpen(true)} } >

              <div className={`w-full h-full justify-center items-center ${isOpen ? "hidden" : "flex"} fixed `}>
                +
              </div>

              <div className={`w-full h-8 text-xl ${isOpen ? "flex justify-end " : "hidden" } fixed`}>

                <div className="w-[35px] h-[35px] border-2 bg-[#807070] border-[#655757] rounded-md flex justify-center items-center "
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