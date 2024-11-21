import ExperienceGrid from "@/components/ExperienceGrid";

const Bio = () => {
    return (
        <div className="w-2/4 h-full flex flex-col p-2 gap-5">
            <div className="flex flex-col gap-2">
                <h2 className="font-semibold">Обо мне</h2>
                <p className="whitespace-break-spaces text-justify">
                    Фуллстек разработчик, специализируюсь на разработке мобильных веб приложений.
                    Основной стек - Flutter, Vue3, React, .NET.
                    так же имею опыт работы с Laravel, java.
                    Сейчас работаю в ООО "МедИнфоЦентр".
                </p>
            </div>
            <div className="flex flex-col gap-2">
                <ExperienceGrid isWork={false}/>
            </div>
            <div className="flex flex-col gap-2">
                <ExperienceGrid isWork={true}/>
            </div>
        </div>
    );
}

export default Bio;
