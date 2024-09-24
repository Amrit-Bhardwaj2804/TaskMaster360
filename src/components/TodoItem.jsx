import { useEffect, useState } from "react";
import useTodo from "../contexts/TodoArrayContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCoffee, faPlus, faTrash, faCircleInfo, faClock } from '@fortawesome/free-solid-svg-icons';

export default function TodoItem({todoObject}){

    const time = new Date();

    const [newTodoMessage, setNewTodoMessage] = useState(todoObject.yourTodoMessage);
    const [isTodoEditable, setIsTodoEditable] = useState(todoObject.isTodoEditable);
    const [placeholder, setPlaceholder] = useState('');

    useEffect(() => {

        if(isTodoEditable === false)
            setPlaceholder("Click 'Edit' Button and update your task here");
        else
            setPlaceholder("Enter your task here and click 'Save' Button");
            
    }, [isTodoEditable])

    const {deleteTodoObject, updateTodoObject, toggleTodoObject, changeIfTodoMsgEmpty} = useTodo();

    const editTodo = () => {
        updateTodoObject(todoObject.id, {...todoObject, yourTodoMessage: newTodoMessage, isTodoEditable: false});
        setIsTodoEditable(false);
    }

    const toggleMethod = () => {
        toggleTodoObject(todoObject.id);
    }


    return(


        <div className="shadow-todoItemShadow rounded-sm w-full p-1 max-h-[826.584px] transition-all border border-solid dark:border dark:border-[#9747ff33] dark:bg-inherit flex flex-row gap-x-1 pl-4">

            <input 
                type='checkbox' 
                className="mr-2 cursor-pointer outline-none" 
                checked={todoObject.isCompleted}
                onChange={toggleMethod}
                disabled={isTodoEditable}
            />

            <input 
                id='todoFields' 
                type="text" 
                placeholder={placeholder} 
                // ${isTodoEditable ? "bg-[#f3f2f2] pl-1 rounded-sm mr-4" : "bg-[#f6f5f5]"} bg-[#f3f2f2] bg-[#9747ff4f]"
                className={`${todoObject.isCompleted ? "line-through" : ""} ${isTodoEditable ? "pl-1 rounded-sm mr-2 border border-black border-dashed dark:border-white"  : ""} transition-transitionProperty duration-transitionDuration ease-transitionTimingFunction w-full medium:text-lg small:text-[16px] bg-inherit placeholder:text-black/20 dark:placeholder:text-white/20 dark:text-[#ffffffd8] text-black p-1 outline-none`}
                value={newTodoMessage}
                onChange={(e) => {
                    setNewTodoMessage(e.target.value);
                }}
                readOnly={!isTodoEditable} 
            />            

            <button 
                onClick={() => {

                    if(todoObject.isCompleted)
                        return
                    if(isTodoEditable)
                        editTodo(); // This will update the todoObject interally...
                    else
                        setIsTodoEditable((previousValue) => {
                            return !previousValue;
                        })
                }} 
                className={`${todoObject.isCompleted ? "opacity-50" : "hover:bg-[#9747ffb1] dark:hover:bg-[#9747ffb1]"} medium:text-[16px] small:text-sm transition-transitionProperty duration-transitionDuration ease-transitionTimingFunction bg-gray-100 dark:bg-inherit dark:text-[#ffffffd8] border-0 border-solid rounded-sm border-white px-6`}
                disabled={todoObject.isCompleted}
            >
                    {!isTodoEditable ? 'Edit' : 'Save'}
            </button>

            <button 
                onClick={()=>{
                    deleteTodoObject(todoObject.id);
                }}
                className="medium:text-[16px] small:text-sm transition-transitionProperty duration-transitionDuration ease-transitionTimingFunction bg-gray-100 dark:bg-inherit dark:text-[#ffffffd8] border-0 border-solid rounded-sm border-white px-6 hover:bg-[#9747ffb1] dark:hover:bg-[#9747ffb1] ">
                    Delete
            </button>

            <div className="w-[150px] text-black bg-gray-100 dark:bg-inherit dark:text-[#ffffffd8] hover:underline medium:text-[0.72rem] small:text-[10px] flex items-center justify-center font-medium border-0 border-solid font-none border-black">
               {todoObject.date}
            </div>

        </div>
    )
}





