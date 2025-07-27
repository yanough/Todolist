import { useForm } from "react-hook-form"
import {DevTool} from "@hookform/devtools"
import { useMytaskStore } from "@/store/taskStore"; 

let renderCount = 0;

type FormValues={
    title : string,
    description : string ,
    deadline : string,
}

export default function Form(){

    const { appendTask } = useMytaskStore()

    const form = useForm<FormValues>({
        defaultValues: {
            title: "تسک"
        }
    }
    );
    
    const {register ,control ,handleSubmit , formState: {errors} } = form;
    renderCount++;

    const onSubmit = (data: FormValues) => {
        console.log(data)
        appendTask(data)
    }
    
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
               
                <button className="border rounded-md p-3  backdrop-brightness-0 ">submit</button>
            </form>
            {/* <DevTool control = { control }/> */}
        </div>
    )
}