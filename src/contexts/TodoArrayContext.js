import { createContext, useContext } from "react";

export const TodoArrayContext = createContext({

    todoObjectArray : [
        {
            id : 101,
            yourTodoMessage : 'what you want to do',
            isCompleted : false,
            dateOfTodo : '',
            isTodoEditable : false
        },
        {...{}}
    ],
    addTodoObject : (todoObject) => {},
    deleteTodoObject : (id) => {},
    updateTodoObject : (id, todoObject) => {},
    toggleTodoObject : (id) => {},
    // changeIfTodoMsgEmpty : (id) => {}
});
// console.log("Type of TodoArrayContext :",typeof TodoArrayContext);

export const TodoArrayContextProvider = TodoArrayContext.Provider;

export default function useTodo(){
    return useContext(TodoArrayContext);
}