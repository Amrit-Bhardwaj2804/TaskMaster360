import './App.css'
import { useEffect, useState } from 'react'
import {TodoForm, TodoItem, ShortCutPanel, ThemeButton} from './components/index.js';
import useTodo, {TodoArrayContextProvider} from './contexts/TodoArrayContext'; 
import noTask from './images/noTask.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlus, faTrash, faCircleInfo, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { ThemeContextProvider } from './contexts/ThemeContext.js';

function App() {

  const [theme, setTheme] = useState('light');
  const darkTheme = () => {
    setTheme('dark');
  }
  const lightTheme = () => {
    setTheme('light');
  }

  useEffect(()=>{
    const themeFromLocalStorage = localStorage.getItem("appTheme");
    if(themeFromLocalStorage !== '')
      setTheme(themeFromLocalStorage);
  }, []);

  useEffect(()=>{
    localStorage.setItem("appTheme", theme);
  }, [theme])

  useEffect(()=>{

    const htmlElement = document.querySelector('html');
    htmlElement.classList.remove('light', 'dark');
    htmlElement.classList.add(theme);

  }, [theme])


  const [todoObjectArray, setTodoObjectArray] = useState([]);
 
  const addTodoObject = (todoObject) => {

    setTodoObjectArray((existing_todoObjectArray)=>{

      return [todoObject, ...existing_todoObjectArray];
    });
  }


  const deleteTodoObject = (id) => {
    setTodoObjectArray((existing_todoObjectArray)=>{
      return existing_todoObjectArray.filter((todoObject)=>{
        
        return todoObject.id !== id;
      })
    })
  }

  const updateTodoObject = (id, todoObjectWithNewMessage) => {

    setTodoObjectArray((existing_todoObjectArray)=>{

      return existing_todoObjectArray.map((existing_todoObject) => {

        return existing_todoObject.id === id ? todoObjectWithNewMessage : existing_todoObject;
      })
    })
  }

  const toggleTodoObject = (id) => {

    setTodoObjectArray((existing_todoObject) => {
      
      return existing_todoObject.map((todoObject) => { 
      
        return todoObject.id === id ? {...todoObject, isCompleted : !todoObject.isCompleted} : todoObject;
      })
      
    }); 
  }


  // Local Storage 

  useEffect(()=>{

    const localStorageArray = JSON.parse(localStorage.getItem('todoObjectArrayKEY'));
    if(localStorageArray && localStorageArray.length > 0)
      setTodoObjectArray(localStorageArray);

  }, []);

  useEffect(()=>{
    localStorage.setItem('todoObjectArrayKEY', JSON.stringify(todoObjectArray));
    
  }, [todoObjectArray]);


  // Theme Switching code
  const switchTheme = () => {

    const html = document.querySelector('html');
    if(html.classList.contains('light')){
      html.classList.remove('light');
      html.classList.add('dark');
    }
    else{
      html.classList.remove('dark');
      html.classList.add('light');
    }
  }

  if(todoObjectArray.length > 0){
    return (

      <ThemeContextProvider value={{theme, lightTheme, darkTheme}}>
        <TodoArrayContextProvider value={{todoObjectArray, addTodoObject, deleteTodoObject, updateTodoObject, toggleTodoObject}}>
          <div className='rounded-sm border-0 border-black border-solid h-[90vh] max-h-[90vh] w-[92vw] max-w-[92vw] bg-white shadow-md shadow-black/30 dark:shadow-lg dark:shadow-black/30   flex flex-row mt-5 overflow-hidden'>
            <ShortCutPanel />
            <section className='relative h-full w-full bg-white flex flex-col'>
              <TodoForm />
              <div id='scroll-container' className='bg-gray-50 dark:bg-[#000000f9] h-[90%] pt-6 pb-6 overflow-y-scroll flex flex-col items-center justify-start gap-5 border-b-0 border-b-[#9747ff69] dark:border-0'> 
                {
                  todoObjectArray.map((eachTodoObject) => {
                  // console.log(todoObjectArray)
                  return ( 
                      <div className='w-[95%]' key={eachTodoObject.id}>
                        <TodoItem todoObject={eachTodoObject} />
                      </div>
                    )
                  })
                }
              </div>
              
              <div onClick={()=>{
                switchTheme()
              }}>
                <ThemeButton />
              </div>
            </section>
            
          </div>
        </TodoArrayContextProvider>
      </ThemeContextProvider>
    )
  }
  else{
    return (
      
      <ThemeContextProvider value={{theme, lightTheme, darkTheme}}>
        <TodoArrayContextProvider value={{todoObjectArray, addTodoObject, deleteTodoObject, updateTodoObject, toggleTodoObject}}>
          <div className='relative rounded-sm border-0 border-black border-solid h-[90vh] max-h-[90vh] w-[92vw] max-w-[92vw] bg-white shadow-md shadow-black/30 flex flex-row mt-5 overflow-hidden'>
      
            <ShortCutPanel />
      
            <section className='h-full w-[95%] bg-white flex flex-col'>
      
              <TodoForm />
      
              <div id='scroll-container' className='h-[90%] pt-6 pb-6 overflow-y-scroll flex flex-col items-center bg-gray-50 dark:bg-[#000000ee] justify-center gap-5'> 
                <img className='h-16 ' src={noTask} alt="No Active Tasks" />
                <h1 className='medium:text-2xl small:text-lg text-gray-400 dark:text-white/50 text-center'>No active todos present! Add a new todo now </h1>
              </div>
      
              <div>
                  <ThemeButton />
              </div>
              
            </section>
              
          </div>
        </TodoArrayContextProvider>
      </ThemeContextProvider>
    ) 
  } 
}

export default App
