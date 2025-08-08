import Task from "@/app/mytask/component/Task";
import { id } from "zod/locales";
import { create } from "zustand"

type taskType={
    id : string, 
    title : string,
    description : string ,
    deadline : string,
} 

type myTaskStoreType = {
   tasks: taskType [];
   appendTask: ( task : taskType ) => void;
   deleteTask: ( id : string ) => void;
   editTask: ( updatedTask : taskType ) => void;
}

export const useMytaskStore = create <myTaskStoreType> ( ( set , get ) => ({

    tasks: [
        {
                id : "1",
                title: "second",
                description: "belabela djcnssndjcnsdc jcnsdkcnj kwjdnwskc",
                deadline : '2012-02-20'
            },
            {
                id : "2",
                title: "third",
                description: "belabela djcnssndjcnsdc jcnsdkcnj kwjdnwskc",
                deadline : "3"
            },
       
        ],

    appendTask: ( task ) => {
        set( ( state ) => {
            const newTasks = [...state.tasks, task]
            return{ tasks: newTasks }
        }  )
    },

    deleteTask: ( id ) => {
        set( ( state ) => ({
            tasks: state.tasks.filter( (task) => task.id !== id )
        }));
        console.log(get().tasks )
    },

    editTask: ( updatedTask ) => {
        set( (state) => ({
            tasks: state.tasks.map((task) => 
                task.id === updatedTask.id ? updatedTask : task    
            ),

        }) )
    }

})); 

