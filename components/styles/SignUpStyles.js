import styled from "styled-components";

const SignUpStyles = styled.section`
display: grid;
grid-template-columns: repeat(2,300px) ;
gap: 20px;
justify-items: center;
align-items: center;
justify-content: center;
margin: 6rem auto;

h3{
    transform: translateY(-4rem);
}

form{
    width: 100%;
    .input-group{
        display: flex;
        flex-direction: column-reverse;
    }
}

input{
    display: block;
    padding: 1rem 0;
    width: 100%;
    border: none;
    border-bottom: 2px solid var(--dark-grey);
    margin-bottom: 1rem;

}

label{
    visibility: hidden;
}

input:focus{
    outline: none;
border-bottom: 2px solid cyan;
    + label{
        visibility: visible;
        color: cyan;
    }
}

button{
    text-align: center;
    width: 100%;
    color: #fff;
    background-color: var(--primary-color);
    padding: 10px;
    margin-top: 2rem;
}



`

export default SignUpStyles