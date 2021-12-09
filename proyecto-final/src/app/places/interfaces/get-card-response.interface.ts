export interface GetCardResponse {
    list: Array<List>,
}

export interface List {
    title: string,
    image: string,
    id: number,
    description: string,
    year: string,
    actors: string,
    price:number
}

