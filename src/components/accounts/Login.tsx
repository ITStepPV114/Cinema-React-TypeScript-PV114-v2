import { Box, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { ILoginDto } from "../../types/user";
import { AuthService } from "../../services/auth.service";
import { setTokenLoaclStorage } from "../../helpers/localStorage.helper";
import { useAppDispatch } from "../../store/hooks";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/user/userSlise";



const Login = () => {
    const dispatch=useAppDispatch();
    const navigate=useNavigate();
    const {
        register,//to attrack changes of form inputs
        handleSubmit, //onSubmit event handler
        formState:{errors},

    }=useForm<ILoginDto>();

    // const onSubmit=(user:ILoginDto)=>{
    //         // alert(user.username);
    // }
    
    const onSubmit= async(user:ILoginDto)=>{
        // alert(user.username);
        try{
            const token=await AuthService.login(user);
            if (token){
            setTokenLoaclStorage('token', token);
            console.log(user, token);
            dispatch(login(user));
            alert(token);
            navigate('/movies');
            }
        }catch(err: any){
            const error=err.response?.data.message;
            alert("Errorrr");
        }
}
    return (
        <>
            <div className="Login">
                <h2> Login Form</h2>
                <Box sx={{width: '100%'}}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            {...register("username")}
                            id="username"
                            label="username"
                            type="username"
                            variant="filled"
                        />
                        <TextField 
                            {...register("password")}
                            id="password" 
                            label="Password" 
                            type="password" 
                            variant="filled" 
                        />
                    <Button variant="contained" type="submit">Login</Button>
                    </form>

                </Box>
            </div>
        </>
    )
        ;
}

export default Login;