import IconCloud from "@/components/ui/icon-cloud";
import Marquee from "@/components/ui/marquee";

const Bio = () => {
    const slugs = [
        "typescript",
        "javascript",
        "react",
        "vite",
        "dotnet",
        "flutter",
        "dart",
        "java",
        "android",
        "postgresql",
        "docker",
        "git",
        "github",
        "gitlab",
        "figma",
        "c",
    ];

    return (
        <div className="w-3/4 h-full flex flex-col items-start justify-start p-2 gap-5">
            <div className="flex items-start justify-between w-full gap-3">
                <div className="flex flex-col w-1/2 gap-10">
                    <div className="flex flex-col gap-2">
                        <h2 className="font-semibold">Обо мне</h2>
                        <p className="whitespace-break-spaces text-justify">Ut quam quasi quo expedita voluptas sed
                            omnis
                            voluptas qui
                            laboriosam aliquam aut atque
                            consequatur ut aperiam cupiditate. Aut necessitatibus autem et soluta explicabo est esse
                            natus
                            est dolores nesciunt et laboriosam velit rem Quis voluptas et voluptas laborum! Non minus
                            suscipit 33 reiciendis dicta qui tempora autem et voluptas delectus vel deserunt optio et
                            quas
                            expedita! Quo velit dolores est deserunt ducimus aut sint animi qui veritatis voluptas ab
                            quos
                            architecto sit aspernatur voluptas ea nulla repellat.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="font-semibold">Опыт работы</h2>
                        <p className="whitespace-break-spaces text-justify">Ut quam quasi quo expedita voluptas sed
                            omnis
                            voluptas qui
                            laboriosam aliquam aut atque
                            consequatur ut aperiam cupiditate. Aut necessitatibus autem et soluta explicabo est esse
                            natus
                            est dolores nesciunt et laboriosam velit rem Quis voluptas et voluptas laborum! Non minus
                            suscipit 33 reiciendis dicta qui tempora autem et voluptas delectus vel deserunt optio et
                            quas
                            expedita! Quo velit dolores est deserunt ducimus aut sint animi qui veritatis voluptas ab
                            quos
                            architecto sit aspernatur voluptas ea nulla repellat.
                        </p>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col gap-1 items-center justify-center">
                    <h2 className="font-semibold self-start">Стек технологий</h2>
                    <IconCloud iconSlugs={slugs}/>
                </div>
            </div>
        </div>
    );
}

export default Bio;
