import {ProjetcFeatures} from "@/utils/ProjetcFeatures";
import React from "react";
import {MagicCard} from "@/components/ui/magic-card";
import {ShimmerButton} from "@/components/ui/shimmer-button";
import {useTheme} from "next-themes";
import {
    Card, CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";


type ProjectsProps = React.HTMLAttributes<HTMLDivElement>

const Projects = ({className, ...props}: ProjectsProps) => {
    const openUrl = (href: string) => {
        window.open(href, "_blank");
    }

    return (
        <div {...props} className={`${className ?? ""} flex flex-col justify-center gap-6 pb-10`}>
            <h1 className="font-semibold self-center">Мои проекты</h1>
            <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 place-items-center">
                {ProjetcFeatures.map((feature, index) => (
                    <Card key={index} className="w-full max-w-[22rem] h-[14em] grid grid-rows-[min-content_1fr_min-content]">
                        <CardHeader className="w-full flex flex-col gap-1 p-3">
                            <CardTitle>{feature.name}</CardTitle>
                            <CardDescription>{feature.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="p-3">
                            <div className="flex flex-wrap gap-1">
                                {
                                    feature.stack.map((stack, index) => (
                                        <Badge key={index}>{stack}</Badge>
                                    ))
                                }
                            </div>
                        </CardContent>
                        <CardFooter className="flex items-center p-3 justify-end">
                            <Button size="sm" variant="outline"
                                    onClick={() => openUrl(feature.href)}>Посмотреть</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Projects;
