"use client";

import { useEffect, useState } from 'react'
import { MdLightMode } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { useTheme } from 'next-themes';

export default function DarkModeSwitch() {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    const currentTheme = theme === "system" ? systemTheme : theme;
    return (
        <>
            {mounted && (currentTheme === 'dark' ? (
                <MdLightMode className='text-xl cursor-pointer hover:text-amber-500' onClick={() => setTheme("light")} />
            ) : (
                <FaMoon className='text-xl cursor-pointer hover:text-amber-500' onClick={() => setTheme("dark")} />
            ))}

        </>
    )
}