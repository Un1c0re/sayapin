export class Organisation {
    constructor(options: Partial<Organisation>) {
        this.place = options.place ?? "";
        this.startDate = options.startDate ? new Date(options.startDate) : new Date();
        this.endDate = options.endDate ? new Date(options.endDate) : null;
    }

    place: string;
    startDate: Date;
    endDate: Date | null;
}
