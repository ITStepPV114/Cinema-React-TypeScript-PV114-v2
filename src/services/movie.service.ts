import { AnyAction } from "@reduxjs/toolkit";
import instance  from "../api/axios.api";
import { ILoginDto, IRegistrationDto } from "../types/user";
import { IMovie, IMovieDTO } from "../types/movie";
import { AxiosResponse } from "axios";
import { getTokenFromLocalStorage } from "../helpers/localStorage.helper";
const headers = {
    headers: {
        Authorization: `Bearer ` + getTokenFromLocalStorage(),
    }
}
export const MovieService = {

    async movies(): Promise<IMovieDTO[] | undefined> {
        const result = await instance.get<IMovieDTO[]>('movies',headers);
        console.log(result);
        return result.data || undefined;
    },


}