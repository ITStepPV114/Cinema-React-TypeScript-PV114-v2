import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { ILoginDto } from '../../types/user'

// Define a type for the slice state
interface UserState {
  user:ILoginDto|null,
  isAuth: boolean
}

// Define the initial state using that type
const initialState: UserState = {
  user: null, isAuth: false,
}

export const counterSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
   login:(state, action:PayloadAction<ILoginDto>)=>{
    state.user=action.payload;
    state.isAuth=true;
   },
   logout:(state)=>{
    state.isAuth=false;
    state.user=null;
   }
  },
})

export const { login, logout } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user

export default counterSlice.reducer