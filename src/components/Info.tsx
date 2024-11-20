import React, {useEffect, useState} from "react";
import GitHubCalendar from "react-github-calendar";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';

const Info = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const date = new Date();
            const options = {timeZone: 'Etc/GMT-5', hour: '2-digit', minute: '2-digit'};
            const formattedTime = date.toLocaleTimeString('ru-RU', options);
            setTime(formattedTime);
        };

        const intervalId = setInterval(updateTime, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const selectLastHalfYear = contributions => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 6;

        return contributions.filter(activity => {
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
        <div className="flex flex-col items-start gap-5 h-full w-1/4 p-2">
            <Avatar className="h-[10rem] w-[10rem]">
                <AvatarImage
                    src="https://gravatar.com/userimage/254577929/f636e038385165e1c6209c2bdd948b2e.jpeg?size=256"
                    alt="@shadcn"/>
                <AvatarFallback>Аватар</AvatarFallback>
            </Avatar>
            <div>
                <h1>Павел Саяпин</h1>
                <h2 className="text-gray-500">Фулстек-разработчик</h2>
            </div>
            <div className="flex flex-col items-start text-md gap-0.5">
                <p><FontAwesomeIcon icon={faLocationDot}/> Сургут, Россия</p>
                <p>{time} (UTC + 05:00)</p>
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
        </div>
    )
}

export default Info;
