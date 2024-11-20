import "./App.css";
import Info from "@/components/Info";
import Bio from "@/components/Bio";
import React from "react";
import Projects from "@/components/Projects";

function App() {
    return (
        <div className="w-[100vw] h-[100vh] flex flex-col gap-2">
            <div className="h-3/5 flex justify-between items-start gap-2 p-2">
                <Info/>
                <Bio/>
            </div>
            <div className="w-full h-2/5 p-2 flex gap-2 justify-between">
                <Projects/>
            </div>
            <footer className="w-full">
                <p className="text-gray-500 flex justify-center items-center">Актуальные данные на 2024 год</p>
            </footer>
        </div>
    );
}

export default App;
