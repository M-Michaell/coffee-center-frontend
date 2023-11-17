import { useEffect } from 'react'

import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { activate, reset } from '../../store/slices/auth'
import { toast } from 'react-toastify'
import Loader from "../../general_components/Loader/Loader";


const ActivatePage = () => {
    const { uid, token } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)
    const handleSubmit = (e) => {
        e.preventDefault()
        const userData = {
            uid,
            token
        }
        dispatch(activate(userData))
        toast.success("Your account has been activated! You can login now")
    }

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess) {
            navigate("/login")
        }

        // dispatch(reset())

    }, [isError, isSuccess, navigate, dispatch])


    return (
        <div className="m-5">
            <div className="container auth__container m-5">
                <h1 className="main__title m-5">Activate Account  </h1>
                {isLoading && <Loader />}
                <button className="btn border border-warning rounded-pill mb-5 btn-activate-account" type="submit" onClick={handleSubmit}>Activate Account</button>
            </div>
        </div>
    )
}

export default ActivatePage