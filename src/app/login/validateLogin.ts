export const validateLogin = (loginDetail: {
    username: string;
    password: string;
}) => {
    const { username, password } = loginDetail;
    //check username
    if (!username) {
        return false;
    }
    //ckeck password
};
