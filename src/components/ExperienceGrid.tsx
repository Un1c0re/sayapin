import {workExperiences} from "@/utils/WorkExpiriences";
import {studyExperiences} from "@/utils/StudyExperience";
import dayjs from "dayjs";
import {WorkPlace} from "@/models/WorkPlace";

const ExperienceGrid = ({isWork}: { isWork: boolean }) => {

    const data = isWork ? workExperiences : studyExperiences;
    const firstCellName = isWork ? "Место работы" : "Место учебы";
    const secondCellName = isWork ? "Время работы" : "Время обучения";
    const thirdCellName = isWork ? "Специальность" : "Степень";
    const fourthCellName = isWork ? "Стек технологий" : "Направление";

    const getDeclension = (number: number, forms: [string, string, string]) => {
        const absNumber = Math.abs(number) % 100;
        const lastDigit = absNumber % 10;

        if (absNumber > 10 && absNumber < 20) return forms[2];
        if (lastDigit > 1 && lastDigit < 5) return forms[1];
        if (lastDigit === 1) return forms[0];
        return forms[2];
    };

    const totalTime = data
        .filter((exp) => exp instanceof WorkPlace)
        .map((exp: WorkPlace) => dayjs.duration(exp.totalWorkTime))
        .reduce(
            (total, duration) => ({
                years: total.years + duration.years(),
                months: total.months + duration.months(),
            }),
            {years: 0, months: 0}
        );

    return (
        <>
            <div className="flex gap-2">
                <h2 className="font-semibold">{isWork ? "Опыт работы" : "Образование"}</h2>
                {isWork &&
                    <p className="text-gray-500 font-semibold">
                        {totalTime.years > 0 &&
                            `${totalTime.years} ${getDeclension(totalTime.years, [
                                "год",
                                "года",
                                "лет",
                            ])}, `}
                        {totalTime.months > 0 &&
                            `${totalTime.months} ${getDeclension(totalTime.months, [
                                "месяц",
                                "месяца",
                                "месяцев",
                            ])}`}
                    </p>
                }

            </div>
            {
                data.map((exp) => (
                    <div className="grid grid-cols-2 gap-1">
                        <div>
                            <p className="text-[11px] text-gray-500">{firstCellName}</p>
                            <p>{exp.place}</p>
                        </div>
                        <div>
                            <p className="text-[11px] text-gray-500">{secondCellName}</p>
                            <div className="flex gap-2">
                                <p>
                                    {dayjs(exp.startDate).format("MMMM YYYY")} - {exp.endDate ? dayjs(exp.endDate).format("MMMM YYYY") : "н.в."}
                                </p>
                                {exp instanceof WorkPlace && exp.isCurrentWorkPlace && (
                                    <p className="text-gray-500">
                                        {(() => {
                                            const totalDuration = dayjs.duration(exp.totalWorkTime);
                                            const years = totalDuration.years();
                                            const months = totalDuration.months();

                                            return (
                                                <>
                                                    {years > 0 &&
                                                        `${years} ${getDeclension(years, [
                                                            "год",
                                                            "года",
                                                            "лет",
                                                        ])}, `}
                                                    {months > 0 &&
                                                        `${months} ${getDeclension(months, [
                                                            "месяц",
                                                            "месяца",
                                                            "месяцев",
                                                        ])}`}
                                                </>
                                            );
                                        })()}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div>
                            <p className="text-[11px] text-gray-500">{thirdCellName}</p>
                            <p>{exp instanceof WorkPlace ? exp.job : exp.degree}</p>
                        </div>
                        <div>
                            <p className="text-[11px] text-gray-500">{fourthCellName}</p>
                            <p>{exp instanceof WorkPlace ? exp.stack : exp.speciality}</p>
                        </div>
                    </div>
                ))
            }
        </>
    );
}

export default ExperienceGrid;
