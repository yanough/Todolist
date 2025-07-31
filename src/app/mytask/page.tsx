"use client"
import { useState } from "react"
import AddTask from "./component/AddTask"
import Task from "./component/Task"
import { useMytaskStore } from "@/store/taskStore"

export default function mytask(){

    const {tasks , appendTask} = useMytaskStore()

    return(
        <div className=" h-screen w-screen bg-[#0E1F2F] py-4">
               
            <div className="h-full w-[88%] ml-[6%] bg-[#27425D] flex flex-col gap-6 p-8 rounded-2xl relative ">
                <AddTask />

                <header className="w-[90%] h-[5%] ml-[2%] text-2xl font-semibold text-right text-[#E2CAD8] flex flex-row mb-[-15px]">
                    <br/>
                    <div className="w-[50%] h-[90%] text-left">تاریخ امروز</div>
                    <div className="w-[50%] h-[90%] text-right"> 
                    </div>

                </header>
                <hr className="border-[#E2CAD8]"/>

                {tasks.map( (item , key) => (       
                    <Task key={key} item = {item}/>
                        
                    ))                
                }

            </div>

            
        </div>
    )
}