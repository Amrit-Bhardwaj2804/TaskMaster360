import {createContext, useContext} from 'react';

export const ThemeContext = createContext();
console.log("Type of themeContext :",typeof ThemeContext);

export const ThemeContextProvider = ThemeContext.Provider;
export default function useTheme(){
    return useContext(ThemeContext);
}