import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPlus, faTrash, faCircleInfo, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import useTheme from '../contexts/ThemeContext';

export default function ThemeButton(){

    const {theme, darkTheme, lightTheme} = useTheme();

    return(
        
        <div 
            onClick={() => {
                
                if(theme === 'light')
                    darkTheme();
                else
                    lightTheme();
            }}
            className='text-[18px] bg-[#9747ff] hover:bg-[#8638e5] dark:bg-[#8638e5] dark:hover:bg-[#7c2bda] text-white flex justify-center items-center absolute bottom-3 right-3 cursor-pointer rounded-full h-[50px] w-[50px] shadow-md shadow-black/20'
        >
            {
                theme === 'light' ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />
            }
        </div>
    )
}