import React from "react";

type BioProps = React.HTMLAttributes<HTMLDivElement>

const Bio = ({className, ...props}: BioProps) => {
    return (
        <div {...props} className={`${className ?? ""} grid gap-3 grid-rows-[repeat(4,_min-content)]`}>
            <div className="space-y-2">
                <h2 className="font-semibold">Обо мне</h2>
                <p className="whitespace-break-spaces text-justify max-w-prose">
                    Fullstack-разработчик, специализируюсь на разработке веб приложений. В свободное время изучаю
                    разработку мобильных приложений.
                    <br/>
                    Помимо программирования, занимаюсь концертной и студийной звукорежиссурой, написанием собственных
                    музыкальных произведений.
                </p>
            </div>
        </div>
    );
}

export default Bio;
