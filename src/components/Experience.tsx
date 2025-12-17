import ExperienceGrid from "@/components/ExperienceGrid";

type ExperienceProps = React.HTMLAttributes<HTMLDivElement>

const Experience = ({ className, ...props }: ExperienceProps) => {
    return (
        <div {...props} className={`${className ?? ""} grid`}>
            <ExperienceGrid isWork />
            <ExperienceGrid isWork={false} />
        </div>
    );
};

export default Experience;
