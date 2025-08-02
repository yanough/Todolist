import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"
import { useMytaskStore } from "@/store/taskStore"; 
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

let renderCount = 0;

type FormValues={
    title : string,
    description : string ,
    deadline : string,
}

export default function Form(){

    const { appendTask } = useMytaskStore()
    const [isDisabled , setIsDisabled]= useState(false);
    const [countdown , setCountdown] = useState(0);

    const form = useForm<FormValues>({
        defaultValues: {
            title: "تسک"
        }
    }
    );
    
    const {register ,control ,handleSubmit , formState: {errors} } = form;
    renderCount++;

    const onSubmit = (data: FormValues) => {
        const newTask = {
            id: uuidv4(),
            ...data
        };
        console.log(newTask)
        appendTask(newTask)
        setIsDisabled(true)
        setCountdown(1)
    }

    useEffect(() => {
        let intervalid : NodeJS.Timeout 
        if(countdown > 0){
            intervalid = setInterval(() => {
                setCountdown( (prev) => prev - 1);
                console.log(countdown)

            }, 1000);

        }
        if( countdown===0 && isDisabled ){
        setIsDisabled(false)
        
        }
        return () => clearInterval(intervalid);
        
    } , [countdown])
    
    return(
        <div>
            {/* <h1>{renderCount}</h1> */}
            <form noValidate onSubmit={ handleSubmit(onSubmit) } className="flex flex-col gap-7">

                <input type="text" placeholder= "title" id="title" {...register("title" , {required: "الزامی است"}) }
                className="border rounded-md p-3  backdrop-brightness-50 "/>
                <p className="error">{errors.title?.message}</p>

                <input type="text" placeholder= "description" id="description" {...register("description" , {required: "الزامی است"})} 
                className="border rounded-md p-3  backdrop-brightness-50  "/>
                <p className="error">{errors.description?.message}</p>

                <div>
                    <label className="pr-2"> deadline: </label>
                    <input type="date" placeholder= "deadline" id="deadline" {...register("deadline")} 
                    className="border rounded-md p-3  backdrop-brightness-50 " />
                 
                </div>
               
                <button disabled={isDisabled}
                        className={` ${ isDisabled ?" shake opacity-50 cursor-not-allowed  bg-[#c18db45d]": " bg-[#c18db4dd]"}  border rounded-md p-3 transition-opacity duration-8000 ease-in-out`}> submit</button>
            </form>
            {/* <DevTool control = { control }/> */}
        </div>
    )
}