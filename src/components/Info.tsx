import React, {useEffect, useState} from "react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';
import {SiGithub, SiTelegram, SiLeetcode, SiLocal, SiGeode} from "@icons-pack/react-simple-icons";

type InfoProps = React.HTMLAttributes<HTMLDivElement>

const Info = ({className, ...props}: InfoProps) => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const date = new Date();
            const formattedDate = new Intl.DateTimeFormat('ru-RU', {
                timeZone: 'Etc/GMT-5',
                hour: '2-digit',
                minute: '2-digit'
            }).format(date);
            setTime(formattedDate);
        };

        const intervalId = setInterval(updateTime, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div {...props} className={`${className ?? ""} grid gap-3 text-center md:text-left`}>
            <Avatar className="h-32 w-32 md:h-[10rem] md:w-[10rem] lg:justify-self-start justify-self-center">
                <AvatarImage
                    src="https://gravatar.com/userimage/254577929/f636e038385165e1c6209c2bdd948b2e.jpeg?size=256"
                    alt="@shadcn"/>
                <AvatarFallback>Аватар</AvatarFallback>
            </Avatar>

            <div className="space-y-1">
                <h1>Павел Саяпин</h1>
                <h2 className="text-gray-500">Fullstack Web Developer</h2>
            </div>

            <div className="space-y-1">
                <p><FontAwesomeIcon icon={faLocationDot}/>Сургут, Россия</p>
                <p>{time} <span className="text-gray-500">(UTC + 05:00)</span></p>
            </div>

            <div className="flex gap-4 justify-center md:justify-start">
                <a href="https://t.me/plavlusha">
                    <SiTelegram className="size-6"/>
                </a>
                <a href="https://github.com/Un1c0re">
                    <SiGithub className="size-6"/>
                </a>
                <a href="https://leetcode.com/u/Un1c0re/">
                    <SiLeetcode className="size-6"/>
                </a>
            </div>
        </div>
    )
}

export default Info;
