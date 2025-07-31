"use client"
import { useState } from "react"

type optionType = "edit" | "delete" | "more" | ""

type taskType={
     title : string,
     description : string ,
     deadline : string,
} 

export default function Task( {item} : {item : taskType}) {

     const [ option , setOption ] = useState <optionType> ("more")

     return(
            <div className="w-[94%] min-h-[100px] ml-[3%] bg-[#87A7D0]  rounded-2xl p-3 pl-5 shadow-md shadow-[#87A7D0] flex flex-row">
               <div className=" h-full w-[88%] flex flex-col">
                    <h1 className=" h-[30px] w-[100%] text-2xl font-semibold ">
                         { item.title }
                    </h1>
                    <div className=" min-h-[20px] w-[100%] text-sm pl-6 my-1 ">
                         { item.description }
                    </div>
                    <div className=" [30px] w-[100%] ">
                         deadline : { item.deadline }
                    </div>
               </div>

               <div className="w-[12%] h-full text-right "> 
                    <select className="w-[53%] h-7 m-1 mt-2 border-1 rounded-lg" value={option} onChange={ ( e ) => setOption( e.target.value as optionType ) }>
                         <option value={"edit"}>
                              Edit
                         </option>
                         <option value={"delete"}>
                              Delete
                         </option>
                    </select>

               </div>
                   

            </div>
    )
}