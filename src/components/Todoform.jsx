import { useEffect, useState } from "react";
import useTodo from "../contexts/TodoArrayContext";

export default function TodoForm(){

    const [todoMessage, setTodoMessage] = useState('');
    
    const {addTodoObject} = useTodo();

    const addMethod = (e) => {

        e.preventDefault();

        const dateOdTodo = new Date();
        const monthObject = {
            1:'Jan', 2:'Feb', 3:'Mar', 4:'Apr', 5:'May', 6:'Jun', 7:'Jul', 8:'Aug', 9:'Sep', 10:'Oct', 11:'Nov', 12:'Dec'
        }
        const dateString = `${dateOdTodo.getDate()} ${monthObject[1+dateOdTodo.getMonth()]} ${dateOdTodo.getFullYear()}`

        let valueForIsTodoEditable = false;
        if(todoMessage === '')  
            valueForIsTodoEditable = true;
        addTodoObject(
            {
                id:Date.now(),
                yourTodoMessage : todoMessage,
                isCompleted : false,
                date : dateString,
                isTodoEditable : valueForIsTodoEditable             
            }
        );
        setTodoMessage('');
    }

    return(

        <form onSubmit={addMethod} className='w-full h-[10%] relative border-t border-t-[#9747ff69] dark:border-t-0 shadow-none flex justify-center items-center'>
            
            <input 
                id='enterTodoMessageHere'
                type="text" 
                placeholder='Hi there! please, enter your tasks here' 
                className='relative border-b border-b-[#9747ff50] dark:border-0 bg-gray-50 dark:bg-black dark:text-white placeholder:text-[#9747ff] dark:placeholder:text-white/50 focus:placeholder:text-gray-300 transition-all outline-none pl-6 pt-1 h-full max-h-full text-xl w-[100%]'
                
                value={todoMessage}
                onChange={(e)=>{
                    setTodoMessage(e.target.value);
                }}
            />

            <button 
                type="submit" 
                className='medium:w-[135px] small:w-[100px] absolute right-0 bg-[#9747ff] hover:bg-[#8638e5] dark:bg-[#8638e5] dark:hover:bg-[#7c2bda] text-white transition-all  rounded-r-md rounded-l-md h-[77%] mr-1.5 text-[18px]'
            >
                    Todo
            </button>

        </form>
    );
}