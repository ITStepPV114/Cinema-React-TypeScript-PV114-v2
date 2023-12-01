import { useAppSelector } from "../store/hooks";
import { ILoginDto } from "../types/user";

export const useAuthUser=():ILoginDto|null=>{
    const user=useAppSelector((state)=>state.user.user);
    return user;
}