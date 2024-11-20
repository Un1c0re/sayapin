import {FileTextIcon, HeartPulseIcon, Hospital, StickyNoteIcon} from "lucide-react";
import {BentoCard} from "@/components/ui/bento-grid";
import { faUserNurse } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
    // const features = [
    //     {
    //         Icon: FileTextIcon,
    //         name: "CancerNEO",
    //         description: "Мобильный ассистент для пациентов с НЭО",
    //         href: "#",
    //         cta: "Посмотреть",
    //         background: (
    //             <div className="bg-blue-400">LSKLSKDLKS</div>
    //         ),
    //     }
    // ]

    return (
        <div className="flex flex-col items-start justify-center gap-2 w-full overflow-clip">
            <h2 className="font-semibold">Портфолио</h2>
            <div className="flex items-center justify-center gap-2 w-full">
                <BentoCard
                    name="CancerNEO"
                    className="h-[12rem] w-[18rem]"
                    background={""}
                    Icon={HeartPulseIcon}
                    description="Мобильный ассистент для пациентов с НЭО"
                    href="#"
                    cta="Посмотреть"
                />
                <BentoCard
                    name="digiNotes"
                    className="h-[12rem] w-[18rem]"
                    background={""}
                    Icon={StickyNoteIcon}
                    description="Простая доска заметок на Vue"
                    href="#"
                    cta="Посмотреть"
                />
                <BentoCard
                    name="CancerNEO"
                    className="h-[12rem] w-[18rem]"
                    background={""}
                    Icon={FileTextIcon}
                    description="Мобильный ассистент для пациентов с НЭО"
                    href="#"
                    cta="Посмотреть"
                />
            </div>
        </div>
    )
}

export default Projects;
