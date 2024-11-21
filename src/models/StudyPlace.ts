import {Organisation} from "@/models/Organisation";

export class StudyPlace extends Organisation {

    constructor(options: Partial<StudyPlace>) {
        super({
            place: options.place,
            startDate: options.startDate,
            endDate: options.endDate,
        });

        this.degree = options.degree ?? "";
        this.speciality = options.speciality ?? "";
    }

    degree: string;
    speciality: string;
}
