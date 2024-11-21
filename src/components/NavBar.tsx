import React from "react";

import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {Dock, DockIcon} from "@/components/ui/dock";
import {ModeToggle} from "@/components/mode-toggle";
import {SiGithub, SiGmail, SiTelegram, SiVk} from "@icons-pack/react-simple-icons";


const DATA = {
    contact: {
        social: {
            GitHub: {
                name: "GitHub",
                url: "#",
                icon: SiGithub,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "#",
                icon: SiTelegram,
            },
            X: {
                name: "X",
                url: "#",
                icon: SiVk,
            },
            email: {
                name: "Send Email",
                url: "#",
                icon: SiGmail,
            },
        },
    },
};

const NavBar = () => {
    return (
        <Dock direction="middle">
            {Object.entries(DATA.contact.social).map(([name, social]) => (
                <DockIcon key={name}>
                    <a
                        href={social.url}
                        aria-label={social.name}
                        className={cn(
                            buttonVariants({variant: "ghost", size: "icon"}),
                            "size-12 rounded-full",
                        )}
                    >
                        <social.icon className="size-4"/>
                    </a>
                </DockIcon>
            ))}
            <Separator orientation="vertical" className="h-full py-2"/>
            <DockIcon>
                <ModeToggle className="rounded-full bg-transparent focus:outline-none"/>
            </DockIcon>
        </Dock>
    );
}

export default NavBar;
