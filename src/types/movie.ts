export interface IMovie{
    title:string,
    year:number,
    imageUrl:string,
    description:string
}

export interface IMovieDTO{
    id:number;
    title:string;
    year:number;
    imageUrl:string;
    description?: string;
    duration:string;
    // isCurrent:boolean;
    genres?:IGenre[];
}


export interface IGenre {
    id: number;
    name: string
};
