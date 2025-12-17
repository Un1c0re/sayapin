import "./App.css";
import Info from "@/components/Info";
import Bio from "@/components/Bio";
import React from "react";
import Projects from "@/components/Projects";
import {AnimatedThemeToggler} from "@/components/ui/animated-theme-toggler";
import {Particles} from "@/components/ui/particles";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import ExperienceGrid from "@/components/ExperienceGrid";

function App() {
    return (
        <div className="relative min-h-screen overflow-y-auto px-4 lg:px-10 pt-14 grid grid-cols-1 grid-rows-none gap-x-6 gap-y-14 md:grid-cols-[28rem_1fr_1fr] md:grid-rows-[auto_1fr] md:overflow-hidden">
            <Particles className="absolute inset-0 z-0" quantity={100} ease={80} color={"#999999"} refresh/>
            <AnimatedThemeToggler className={"absolute top-4 right-4 bg-transparent border-none focus:border-none focus:outline-none p-0"}/>

            <Info className="self-start"/>

            <div className="grid">
                <Bio/>
                <TechStack/>
            </div>

            <div className="flex flex-col gap-6 lg:gap-12">
                <ExperienceGrid isWork />
                <ExperienceGrid isWork={false} />
            </div>

            <Projects className="md:col-span-3"/>
        </div>
    );
}

export default App;
