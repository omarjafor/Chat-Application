const isAuthenticated = async(req, res, next) => {
    try {
        const token = req.cookies.token;
        console.log(token);
    } catch (error) {
        console.log(error);
    }
}
export default isAuthenticated;