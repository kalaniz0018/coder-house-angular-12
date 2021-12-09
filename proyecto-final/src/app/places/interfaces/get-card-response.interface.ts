export interface GetCardResponse {
    list: Array<List>,
}

export interface List {
    title: string,
    image: string,
    id: string,
    description: string,
    year: string,
    actors: string
}

