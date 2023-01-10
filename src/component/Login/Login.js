import React, {useEffect, useState} from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from "react-router-dom";

//CSS
import styles from "./Login.module.scss"

//COMPONENT
import {validateLogin} from "./validateLogin"
import {notify} from "../toastify"

const Login = () => {

    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState({});
    const [focus, setFocus] = useState({});

    useEffect(() => {
        setError(validateLogin(data))
    }, [data, focus])

    const changeHandler = (event) => {
        if (event.target.name === "isAccepted") {
            setData({...data, [event.target.name]: event.target.checked})
        } else {
            setData({...data, [event.target.name]: event.target.value})
        }
    }

    const submitHandler = (event) => {
        event.preventDefault()
        if (!Object.keys(error).length) {
            notify("You are login successfully", "success")
        } else {
            notify("Invalid email or password", "error")
            setFocus({
                email: true,
                password: true,
            })
        }
    }

    return (
        <div className={styles.fullCard}>
            <div className={styles.container}>
                <h2>Login</h2>
                <form onSubmit={submitHandler} className={styles.form}>
                    <div className={styles.info}>
                        <label htmlFor="email">Email</label>
                        <input type="text"
                               className={(error.email && focus.email) ? styles.redOne : styles.field}
                               autoComplete="off"
                               id="email"
                               name="email"
                               value={data.email}
                               onChange={changeHandler}
                        />
                        {error.email && focus.email && <span> {error.email} </span>}
                    </div>
                    <div className={styles.info}>
                        <label htmlFor="password">Password</label>
                        <input type="password"
                               className={(error.password && focus.password) ? styles.redOne : styles.field}
                               id="password"
                               name="password"
                               value={data.password}
                               onChange={changeHandler}
                        />
                        {error.password && focus.password && <span> {error.password} </span>}
                    </div>
                    <div className={styles.submitBTN}>
                        <button type="submit">Login</button>
                        <Link to="/Signup" className={styles.router}>Create an account here</Link>
                    </div>
                    <ToastContainer/>
                </form>
            </div>
        </div>
    );
};

export default Login;