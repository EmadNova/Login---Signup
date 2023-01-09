export const validate = (data) => {

    const error = {}

    if (!data.name.trim()) {
        error.name = "Name required"
    } else {
        delete error.name
    }

    if (!data.email) {
        error.email = "Email required"
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        error.email = "Invalid email address!"
    } else {
        delete error.email
    }

    if (!data.password) {
        error.password = "Password required"
    } else if (!data.password.length < 6) {
        error.password = "Password need to be more than 6 characters"
    } else {
        delete error.password
    }

    if (!data.confirmPassword) {
        error.confirmPassword = "Repeat your password"
    } else if (data.confirmPassword !== data.password) {
        error.confirmPassword = "Password does not match"
    } else {
        delete error.confirmPassword
    }

    if (!data.isAccepted) {
        error.isAccepted = "Accept our terms"
    } else {
        delete error.isAccepted
    }

    return error;
}