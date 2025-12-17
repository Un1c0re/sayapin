import {Badge} from "@/components/ui/badge";
import React from "react";

const TechStack = () => {
    return (
        <div className="space-y-2">
            <h2 className="font-semibold self-start">Стек технологий</h2>
            <div className="grid grid-rows-auto gap-1">
                <h3 className="text-gray-500">Backend</h3>
                <div className="flex flex-wrap gap-1 mb-2">
                    <Badge>ASP.Net</Badge>
                    <Badge>Entity Framework</Badge>
                    <Badge>NHibernate</Badge>
                    <Badge>Spring</Badge>
                    <Badge>Spring Boot</Badge>
                    <Badge>JUnit</Badge>
                </div>

                <h3 className="text-gray-500">Frontend</h3>
                <div className="flex flex-wrap gap-1 mb-2">
                    <Badge>Vue</Badge>
                    <Badge>Typescript</Badge>
                    <Badge>Javascript</Badge>
                    <Badge>Tailwind</Badge>
                    <Badge>Vite</Badge>
                    <Badge>Element+</Badge>
                </div>
                <h3 className="text-gray-500">Инструменты</h3>
                <div className="flex flex-wrap gap-1 mb-2">
                    <Badge>Docker</Badge>
                    <Badge>Git</Badge>
                    <Badge>Github</Badge>
                    <Badge>Gitlab</Badge>
                    <Badge>YouTrack</Badge>
                    <Badge>Visual Studio</Badge>
                    <Badge>Rider</Badge>
                    <Badge>WebStorm</Badge>
                    <Badge>ReSharper</Badge>
                </div>
            </div>
        </div>
    )
}

export default TechStack;