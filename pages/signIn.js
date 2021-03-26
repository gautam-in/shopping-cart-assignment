import SignIn from "../components/SignIn";

function signIn(props) {
    return (
        <div>
            <SignIn/>
            <div style={{marginTop:'1rem', textAlign:'center',fontFamily:'monospace',padding:'12px',backgroundColor:'rgba(0,0,0,0.1)'}}>
                <p>Copyright &#169; 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd</p>
            </div>
        </div>
    )
}
export default signIn;