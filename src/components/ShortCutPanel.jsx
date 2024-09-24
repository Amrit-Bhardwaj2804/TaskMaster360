import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlus, faTrash, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import useTodo from '../contexts/TodoArrayContext';

export default function ShortCutPanel(){

    const {todoObjectArray, addTodoObject, deleteTodoObject} = useTodo();

    return(
        
        <aside className='pt-2 h-full w-[60px] border-r-0 border-r-gray-400 bg-[#9747ff] dark:bg-[#8638e5] border-t border-t-[#9747ff69] p-0 flex flex-col justify-start items-center'>

            <div 
                title='Add a todo for yourself' 
                className='transition-all cursor-pointer bg-[#7c2bda] hover:bg-black/50 rounded-full text-white flex justify-center items-center w-4 h-4 p-5 mt-2'
                onClick={() => {

                    const dateOdTodo = new Date();
                    const monthObject = {
                        1:'Jan', 2:'Feb', 3:'Mar', 4:'Apr', 5:'May', 6:'Jun', 7:'Jul', 8:'Aug', 9:'Sep', 10:'Oct', 11:'Nov', 12:'Dec'
                    }
                    const dateString = `${dateOdTodo.getDate()} ${monthObject[1+dateOdTodo.getMonth()]} ${dateOdTodo.getFullYear()}`
                    addTodoObject(
                        {
                            id:Date.now(),
                            yourTodoMessage : '',
                            isCompleted : false,
                            date : dateString,
                            isTodoEditable : true               
                        }
                    );
                }}
            >
              <FontAwesomeIcon icon={faPlus} />
            </div>

            <div 
                title='Delete all completed todos (checked)' 
                className='transition-all cursor-pointer bg-[#7c2bda] hover:bg-black/50 rounded-full text-white flex justify-center items-center w-4 h-4 p-5 mt-2'
                onClick={() => {

                    todoObjectArray.forEach((todoObject) => {
                        if(todoObject.isCompleted === true)
                            deleteTodoObject(todoObject.id);
                    })
                }}
            >
                    <FontAwesomeIcon icon={faTrash} />
            </div>

            <a target='_blank' href="https://github.com/Amrit-Bhardwaj2804/TaskMaster360">    
                <div 
                    title='Get Source Code at Github.com' 
                    className='transition-all cursor-pointer bg-[#7c2bda] hover:bg-black/50 rounded-full text-white flex justify-center items-center w-4 h-4 p-5 mt-2'

                >
                        <FontAwesomeIcon icon={faCircleInfo} />
                </div>
            </a>

        </aside>
    )
}