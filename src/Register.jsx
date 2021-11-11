import "./App.css";

export default function Register() {
    return(
        <>
        <form>
            <h1>Registration For New User </h1>
            <input type="text" placeholder="enter Name" /><br />
            <textarea type="text" placeholder="enter address" /><br />
            <input type="text" placeholder="enter email" /><br />
            <input type="password" placeholder="enter password" /><br />
            <input type="submit" name="Register" value="Register" />
            </form>
        </>
    );
}