import "./App.css";
import Info from "@/components/Info";
import Bio from "@/components/Bio";
import React from "react";
import Projects from "@/components/Projects";
import {ThemeProvider} from "@/components/theme-provider";

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="w-[100vw] h-auto min-h-[100vh] flex flex-wrap lg:flex-nowrap gap-2 p-2">
                <Info/>
                <Bio/>
                <Projects/>
            </div>
        </ThemeProvider>
    );
}

export default App;
