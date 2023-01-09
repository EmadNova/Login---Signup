import React, {useEffect, useState} from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//CSS
import styles from "./Singup.module.scss"

//COMPONENT
import {validate} from "../validate"
import {notify} from "../toastify"

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
        setError(validate(data))
    }, [data, focus])

    const changeHandler = (event) => {
        if (event.target.name === "isAccepted") {
            setData({...data, [event.target.name]: event.target.checked})
        } else {
            setData({...data, [event.target.name]: event.target.value})
        }
    }

    const focusHandler = (event) => {
        setFocus({...focus, [event.target.name]: true})
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
    console.log(error.name)

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
                               onClick={focusHandler}
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
                               onClick={focusHandler}
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
                               onClick={focusHandler}
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
                               onClick={focusHandler}
                        />
                        {error.confirmPassword && focus.confirmPassword && <span> {error.confirmPassword} </span>}
                    </div>
                    <div className={styles.check}>
                        <input type="checkbox"
                               id="check"
                               name="isAccepted"
                               value={data.isAccepted}
                               onChange={changeHandler}
                               onClick={focusHandler}
                        />
                        <label htmlFor="check">I agree all statements in <a href="#">Terms of service</a></label>
                        <div>
                            {error.isAccepted && focus.isAccepted && <span> {error.isAccepted} </span>}
                        </div>
                    </div>
                    <div className={styles.submitBTN}>
                        <button type="submit">Register</button>
                    </div>
                    <ToastContainer />
                </form>
            </div>
        </div>
    );
};

export default Signup;