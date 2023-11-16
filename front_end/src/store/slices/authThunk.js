import axios from 'axios'
import {createAsyncThunk} from '@reduxjs/toolkit';

const backendURL = 'http://127.0.0.1:8000';

export const registerUser = createAsyncThunk(
    'auth/register',
    async (input, {rejectWithValue}) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            console.log("mohammed", input)
            await axios.post(
                `${backendURL}/accounts/api/auth/users/`,
                {...input},
                config
            )
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)
