import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
    status: 'idle' | 'loading' | 'loaded' | 'failed',
    data: User[],
    error: undefined | string,
}

const initialState: InitialState = {
    status : 'idle',
    data: [],
    error: undefined
}

const UsersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {},

})