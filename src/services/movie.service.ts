import { AnyAction } from "@reduxjs/toolkit";
import { instance } from "../api/axios.api";
import { ILoginDto, IRegistrationDto } from "../types/user";
import { IMovie, IMovieDTO } from "../types/movie";
import { AxiosResponse } from "axios";
import { getTokenFromLocalStorage } from "../helpers/localStorage.helper";

export const MovieService={
    async movies():Promise<IMovieDTO[]|undefined>{
        const result=await instance.get<IMovieDTO[]>('movies',{headers:{
            Authorization: `Bearer `+getTokenFromLocalStorage(),
                  }});
        console.log(result);
        return result.data||undefined;
    },
    // async login(userData:ILoginDto):Promise<string|undefined>{
    //     const {data} = await instance.post<string>('accounts/login', userData);
    //     return data;
    // },
    // async logout(){
    //     await instance.post<any>('accounts/logout');
    // },

}