import {Organisation} from "@/models/Organisation";
import dayjs from "dayjs";

export class WorkPlace extends Organisation {

    constructor(options: Partial<WorkPlace>) {
        super({
            place: options.place,
            startDate: options.startDate,
            endDate: options.endDate,
        });

        this.job = options.job ?? "";
        this.stack = options.stack ?? "";
        this.isCurrentWorkPlace = options.isCurrentWorkPlace ?? false;
    }

    job: string;
    stack: string;
    isCurrentWorkPlace: boolean;

    get totalWorkTime() {
        const lastDate = this.endDate ? dayjs(this.endDate) : dayjs();
        return lastDate.diff(dayjs(this.startDate));
    }
}
