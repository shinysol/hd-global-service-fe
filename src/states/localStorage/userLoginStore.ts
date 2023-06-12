export type TUserInfo = {
    userId: string;
    name: string;
    email: string;
}
export const logIn = (user: TUserInfo) => {
    localStorage.setItem("userLoggedIn", JSON.stringify(user));
}
export const logOut = () => {
    localStorage.removeItem("userLoggedIn");
}
export const getUserInfo = (): TUserInfo => {
    try {
        return JSON.parse(localStorage.getItem("userLoggedIn") || "");
    } catch {
        return { userId: "", name: "", email: "" }
    }
}