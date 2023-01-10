export const validateLogin = (data) => {

    const error = {}

    if (!data.email) {
        error.email = "Email required!"
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        error.email = "Invalid email"
    } else {
        delete error.email
    }

    if (!data.password) {
        error.password = "Password required!"
    } else if (!data.password.length) {
        error.password = "Password required"
    } else {
        delete error.password
    }

    return error;
}