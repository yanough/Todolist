"use client"
import { useState } from "react"
import { useMytaskStore } from "@/store/taskStore"
import ConfirmDialog from "./ConfirmDialog"
import EditDialog from "./EditDialog"

type optionType = "edit" | "delete" | "more" | ""

type taskType={
     id : string,
     title : string,
     description : string ,
     deadline : string,
} 

export default function Task( {item} : {item : taskType}) {

     const [ option , setOption ] = useState <optionType> ("more")

     const [isConfirmOpen , setIsConfirmOpen] = useState(false)
     const { deleteTask } = useMytaskStore();

     const [isEditDialogOpen , setIsEditDialogOpen] = useState(false);
     const { editTask } = useMytaskStore(); 

     const handleOptionChange = ( selectedOption : optionType ) => {
          setOption( selectedOption)
          console.log(selectedOption)
          if(selectedOption === "delete"){
               setIsConfirmOpen(true)
          }
          else if(selectedOption === "edit"){
               setIsEditDialogOpen(true)

          }
     }

     const handleDelete = () => {
          deleteTask(item.id)
          setOption("more")
          setIsConfirmOpen(false)
     }

     const handleEdit = ({id , title , description , deadline} : taskType) => {
          editTask({id , title , description , deadline})
          setOption("more")
          setIsEditDialogOpen(false)
     }

     return(
          <>
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
                    <select className="w-[53%] h-7 m-1 mt-2 border-1 rounded-lg" value={option} onChange={ ( e ) => handleOptionChange( e.target.value as optionType) }>
                         <option value={"more"}>
                              choose
                         </option>
                         <option value={"edit"}>
                              Edit
                         </option>
                         <option value={"delete"}>
                              Delete
                         </option>
                    </select>
               </div> 
            </div>

            <ConfirmDialog isOpen={isConfirmOpen} onCofrim={handleDelete} 
                           onCancel={()=>{
                              setIsConfirmOpen(false)
                              setOption("more")
                           }}
                           message={item.title} />

            <EditDialog isOpen={isEditDialogOpen} initialData={item} onConfirm={handleEdit}
                           onCancel={()=>{
                              setIsEditDialogOpen(false)
                              setOption("more")
                           }}/>
          </>
    )
}