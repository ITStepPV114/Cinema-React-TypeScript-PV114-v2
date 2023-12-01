import { AnyAction } from "@reduxjs/toolkit";
import  instance  from "../api/axios.api";
import { ILoginDto, IRegistrationDto } from "../types/user";
import { removeTokenLoaclStorage } from "../helpers/localStorage.helper";

export const AuthService={
    async registration(userData:IRegistrationDto):Promise<any>{
        await instance.post<IRegistrationDto>('accounts/registration', userData);
    
    },
    async login(userData:ILoginDto):Promise<string|undefined>{
        const {data} = await instance.post<string>('accounts/login', userData);
        console.log(data);
        return data;
    },
    async logout(){
        await instance.post<any>('accounts/logout');
        removeTokenLoaclStorage('token');
    },

}