import SignUpHeaderStyle from "../styles/SignUpHeaderStyle"
export default function SignUpHeader({header, description}){
    return(
        <SignUpHeaderStyle>
            <h1>{header}</h1>
            <p>{description}</p>
        </SignUpHeaderStyle>
    )
}