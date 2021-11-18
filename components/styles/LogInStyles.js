import styled from "styled-components";

const LogInStyles = styled.section`
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
.input-group{
    display: flex;
    flex-direction: column-reverse;
    width: 300px;

}

input{
    display: block;
    width: 100%;
    padding: 1rem 0;
    border: none;
    border-bottom:2px solid var(--dark-grey);
    margin: 1rem 0;
    margin-bottom: 2rem;
    padding: 0.5rem;
    
}

label{
visibility: hidden;

}

 input:focus {
outline: none;
border-bottom:2px solid cyan;

+ label{
visibility: visible;
color: cyan;
}

}

button{

    background-color: var(--primary-color);
    width: 100%;
    padding: 10px;
    color: #fff;
    margin-top: 2rem;

}


`

export default LogInStyles