import "./App.css";
import Info from "@/components/Info";
import Bio from "@/components/Bio";
import React from "react";
import Projects from "@/components/Projects";
import NavBar from "@/components/NavBar";
import {ThemeProvider} from "@/components/theme-provider";

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="w-[100vw] h-[100vh] flex flex-col gap-2">
                <div className="h-full flex justify-between items-start gap-2 p-2">
                    <Info/>
                    <Bio/>
                    <Projects/>
                </div>
            </div>
            <div className="absolute bottom-4 left-[40%]">
                <NavBar/>
            </div>
        </ThemeProvider>
    );
}

export default App;
