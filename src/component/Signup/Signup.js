import React, {useEffect, useState} from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//CSS
import styles from "./Singup.module.scss"

//COMPONENT
import {validateSignUp} from "./validateSignUp"
import {notify} from "../toastify"
import {Link} from "react-router-dom";

const Signup = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccepted: false,
    });

    const [error, setError] = useState({});
    const [focus, setFocus] = useState({});

    useEffect(() => {
        setError(validateSignUp(data, ))
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
            notify("Your registration completed", "success")
        } else {
            notify("Invalid data", "error")
            setFocus({
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
                isAccepted: true,
            })
        }
    }

    return (
        <div className={styles.fullCard}>
            <div className={styles.container}>
                <h2>Create an account</h2>
                <form onSubmit={submitHandler} className={styles.form}>
                    <div className={styles.info}>
                        <label htmlFor="name">Name</label>
                        <input type="text"
                               className={(error.name && focus.name) ? styles.redOne : styles.field}
                               autoComplete="off"
                               id="name"
                               name="name"
                               value={data.name}
                               onChange={changeHandler}
                        />
                        {error.name && focus.name && <span> {error.name} </span>}
                    </div>
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
                    <div className={styles.info}>
                        <label htmlFor="Confirm Password">Repeat your Password</label>
                        <input type="password"
                               className={(error.confirmPassword && focus.confirmPassword) ? styles.redOne : styles.field}
                               id="Confirm Password"
                               name="confirmPassword"
                               value={data.confirmPassword}
                               onChange={changeHandler}
                        />
                        {error.confirmPassword && focus.confirmPassword && <span> {error.confirmPassword} </span>}
                    </div>
                    <div className={styles.check}>
                        <input type="checkbox"
                               id="check"
                               name="isAccepted"
                               value={data.isAccepted}
                               onChange={changeHandler}
                        />
                        <label htmlFor="check">I agree all statements in <a href="#">Terms of service</a></label>
                        <div>
                            {error.isAccepted && focus.isAccepted && <span> {error.isAccepted} </span>}
                        </div>
                    </div>
                    <div className={styles.submitBTN}>
                        <button type="submit">Register</button>
                        <Link to="/Login" className={styles.router}>Already have an account?</Link>
                    </div>
                    <ToastContainer/>
                </form>
            </div>
        </div>
    );
};

export default Signup;