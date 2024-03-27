"use client";
import {createContext, useState, useEffect} from 'react'

export const ThemeContext = createContext<any>(null);

export const ThemeProvider = ({children}: any) => {
    const [theme, setTheme] = useState<string>("light");
    const [isMounted, setIsMounted] = useState<boolean>(false);

    useEffect(() => {
       setIsMounted(true);
       const storedTheme = localStorage.getItem("theme") || "light";
         setTheme(storedTheme);
    }, []);

   if(!isMounted) {
    return <>Loading...</>
   }

   const changeTheme = (theme: string) => {
         setTheme(theme);
         localStorage.setItem("theme", theme);
    }

    return (
        <ThemeContext.Provider value={{theme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}