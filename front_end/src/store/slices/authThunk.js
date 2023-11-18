import axios from "axios"

const BACKEND_DOMAIN = "http://localhost:8000"

const REGISTER_URL = `${BACKEND_DOMAIN}/accounts/api/auth/users/`
const LOGIN_URL = `${BACKEND_DOMAIN}/accounts/api/auth/jwt/create/`
const ACTIVATE_URL = `${BACKEND_DOMAIN}/accounts/api/auth/users/activation/`
const RESET_PASSWORD_URL = `${BACKEND_DOMAIN}/accounts/api/auth/users/reset_password/`
const RESET_PASSWORD_CONFIRM_URL = `${BACKEND_DOMAIN}/accounts/api/auth/users/reset_password_confirm/`
const GET_USER_INFO = `${BACKEND_DOMAIN}/accounts/api/auth/users/me/`
const DELETE_USER = `${BACKEND_DOMAIN}/accounts/api/auth/users/me/`



// Register user

const register = async (userData) => {
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    const response = await axios.post(REGISTER_URL, userData, config)

    return response.data
}

// Login user

const login = async (userData) => {
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    const response = await axios.post(LOGIN_URL, userData, config)

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data))
    }

    return response.data
}

// Logout

const logout = () => {
    localStorage.removeItem("userInfo")
    localStorage.removeItem("user")
}

// Activate user

const activate = async (userData) => {
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    const response = await axios.post(ACTIVATE_URL, userData, config)

    return response.data
}

// Reset Password

const resetPassword = async (userData) => {
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    const response = await axios.post(RESET_PASSWORD_URL, userData, config)

    return response.data
}

// Reset Password

const resetPasswordConfirm = async (userData) => {
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    const response = await axios.post(RESET_PASSWORD_CONFIRM_URL, userData, config)

    return response.data
}

// Get User Info

const getUserInfo = async (accessToken) => {
    const config = {
        headers: {
            "Authorization": `JWT ${accessToken}`
        }
    }

    const response = await axios.get(GET_USER_INFO, config)
    if (response.data){
        localStorage.setItem("userInfo", JSON.stringify(response.data));
    }
    return response.data
}
// delete user

const deleteUser = async (accessToken,userData) => {
    // const user = JSON.parse(localStorage.getItem("user"));
    // const accessToken = user.access;
    // console.log("mohammed", accessToken);
    const config = {
        headers: {
            "Authorization": `JWT ${accessToken}`
        },
        data: userData,

    }
    const response = await axios.delete(DELETE_USER, config)
    return response.data
}



const authService = { register, login, logout, activate, resetPassword, resetPasswordConfirm, getUserInfo, deleteUser }

export default authService

















































// import axios from 'axios'
// import { createAsyncThunk } from '@reduxjs/toolkit'
// const backendURL = 'http://127.0.0.1:8000'
//
// export const registerUser = createAsyncThunk(
//   'auth/register',
//   async (input, { rejectWithValue }) => {
//     try {
//       console.log("mohammed",input)
//       const config = {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       }
//       await axios.post(
//         `${backendURL}/accounts/api/auth/users/`,
//         { ...input},
//         config
//       )
//     } catch (error) {
//     // return custom error message from backend if present
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message)
//       } else {
//         return rejectWithValue(error.message)
//       }
//     }
//   }
// )
//
//
// export const userLogin = createAsyncThunk(
//   'auth/login',
//   async ({email, password}, { rejectWithValue }) => {
//
//     try {
//       // configure header's Content-Type as JSON
//       const config = {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       }
//       const response = await axios.post(
//         `${backendURL}/accounts/api/auth/jwt/create/`,
//         {email, password},
//         config
//       )
//       // store user's token in local storage
//       localStorage.setItem("user", JSON.stringify(response.data))
//       console.log(response)
//       return response.data
//     } catch (error) {
//       // return custom error message from API if any
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message)
//       } else {
//         return rejectWithValue(error.message)
//       }
//     }
//   }
// )
//
//
//
// // -------------------------------------------------------------
//
// // Login user
//
// // const login = async (userData) => {
// //     const config = {
// //         headers: {
// //             "Content-type": "application/json"
// //         }
// //     }
// //
// //     const response = await axios.post(LOGIN_URL, userData, config)
// //
// //     if (response.data) {
// //         localStorage.setItem("user", JSON.stringify(response.data))
// //     }
// //
// //     return response.data
// // }
// //
// // // Logout
// //
// // const logout = () => {
// //     return localStorage.removeItem("user")
// // }
// //
// // // Activate user
// //
// // const activate = async (userData) => {
// //     const config = {
// //         headers: {
// //             "Content-type": "application/json"
// //         }
// //     }
// //
// //     const response = await axios.post(ACTIVATE_URL, userData, config)
// //
// //     return response.data
// // }
// //
// // // Reset Password
// //
// // const resetPassword = async (userData) => {
// //     const config = {
// //         headers: {
// //             "Content-type": "application/json"
// //         }
// //     }
// //
// //     const response = await axios.post(RESET_PASSWORD_URL, userData, config)
// //
// //     return response.data
// // }
// //
// // // Reset Password
// //
// // const resetPasswordConfirm = async (userData) => {
// //     const config = {
// //         headers: {
// //             "Content-type": "application/json"
// //         }
// //     }
// //
// //     const response = await axios.post(RESET_PASSWORD_CONFIRM_URL, userData, config)
// //
// //     return response.data
// // }
// //
// // // Get User Info
// //
// // const getUserInfo = async (accessToken) => {
// //     const config = {
// //         headers: {
// //             "Authorization": `Bearer ${accessToken}`
// //         }
// //     }
// //
// //     const response = await axios.get(GET_USER_INFO, config)
// //
// //     return response.data
// // }
// //
// //
// //
// // const authService = { register, login, logout, activate, resetPassword, resetPasswordConfirm, getUserInfo }
// //
// // export default authService