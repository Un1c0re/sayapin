import React, {useEffect, useState} from "react";
import GitHubCalendar, {Activity} from "react-github-calendar";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';
import NavBar from "@/components/NavBar";

const Info = () => {
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

    const selectLastHalfYear = (contributions: Activity[]) => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 6;

        return contributions.filter((activity: { date: string | number | Date; }) => {
            const date = new Date(activity.date);
            const monthOfDay = date.getMonth();

            return (
                date.getFullYear() === currentYear &&
                monthOfDay > currentMonth - shownMonths &&
                monthOfDay <= currentMonth
            );
        });
    };
    return (
        <div className="h-full w-full sm:w-1/2 lg:w-1/4 flex flex-col gap-5 p-2">
            <div className="flex sm:flex-no-wrap gap-3 lg:flex-col">
                <Avatar className="h-[10rem] w-[10rem]">
                    <AvatarImage
                        src="https://gravatar.com/userimage/254577929/f636e038385165e1c6209c2bdd948b2e.jpeg?size=256"
                        alt="@shadcn"/>
                    <AvatarFallback>Аватар</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-3">
                    <div>
                        <h1>Павел Саяпин</h1>
                        <h2 className="text-gray-500">Fullstack-разработчик</h2>
                    </div>
                    <div className="flex flex-col items-start text-md gap-0.5">
                        <p><FontAwesomeIcon icon={faLocationDot}/> Сургут, Россия</p>
                        <p>{time} (UTC + 05:00)</p>
                    </div>
                </div>
            </div>
            <div>
                <GitHubCalendar
                    transformData={selectLastHalfYear}
                    hideColorLegend
                    hideTotalCount
                    colorScheme="light"
                    blockSize={9}
                    username="Un1c0re"
                />
            </div>
            <NavBar/>
        </div>
    )
}

export default Info;
