import "./App.css";

export default function SignIn() {
    return(
        <>
        <form>
            <h1>Log In </h1>
            <input type="text" placeholder="enter email" /><br />
            <input type="password" placeholder="enter password" /><br />
            <input type="submit" />
            </form>
        </>
    );
}