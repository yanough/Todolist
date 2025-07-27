import { create } from "zustand"

type taskType={
    title : string,
    description : string ,
    deadline : string,
    
} 

type myTaskStoreType = {
   tasks: taskType [];
   appendTask: ( task : taskType ) => void;
}

export const useMytaskStore = create <myTaskStoreType> ( ( set , get ) => ({

    tasks: [
        {
                title: "second",
                description: "belabela djcnssndjcnsdc jcnsdkcnj kwjdnwskc",
                deadline : '2012-02-20'
            },
            {
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
    }
})) 

