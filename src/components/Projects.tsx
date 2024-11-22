import {BentoCard} from "@/components/ui/bento-grid";
import {ProjetcFeatures} from "@/utils/ProjetcFeatures";
import IconCloud from "@/components/ui/icon-cloud";
import {stackIcons} from "@/utils/StackIcons";
import React from "react";

const Projects = () => {
    return (
        <div className="w-full sm:w-1/2 lg:w-1/4 h-full flex flex-col p-2 gap-2">
            <div className="flex flex-col gap-1 items-center justify-center">
                <h2 className="font-semibold self-start">Стек технологий</h2>
                <IconCloud iconSlugs={stackIcons}/>
            </div>
            <div className="flex flex-col gap-1 items-center justify-center">
                <h2 className="font-semibold self-start">Проекты</h2>
                <div className="flex flex-wrap gap-2">
                    {ProjetcFeatures.map((feature, index) => (
                        <BentoCard
                            key={index}
                            name={feature.name}
                            className="h-[10rem] w-[10rem]"
                            background={""}
                            Icon={feature.icon}
                            description={""}
                            href={feature.href}
                            cta="Посмотреть"
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects;
