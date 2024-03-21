export class cliente{
    constructor(
        readonly id: number,
        readonly name: string,
        readonly last_name: string,
        readonly phone: number,
        readonly address: string,
        readonly service: string,
        readonly item: number,
        readonly price: number,
        readonly date_int: string,
        readonly date_end: string,
        readonly total_payment: number,
        readonly status_payment: string,

    ){}
}

