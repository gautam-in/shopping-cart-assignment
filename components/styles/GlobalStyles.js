import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


:root{
    --primary-color:#bb2c58;
    --medium-grey:#808080;
    --light-grey:#eeeeee;
    --dark-grey:#6c7386;
    --spacing:0.1rem;
    --max-width:1170px;

}

*,::before,::after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family:'Cabin', sans-serif;
}

html{
    font-size: 62.5%;
}

body {
    background-color: #fff;
    line-height: 1.5;
    font-size: 1rem;
    width: 100vw;
   .container-body{
    max-width:1170px;
    margin: 0 auto;
   }
   
}

ul{
    list-style-type:none;

}

a{
    text-decoration: none;
}



h1,h2,h3,h4{

    letter-spacing:var(---spacing) ;
    line-height: 1;
};
button{
    cursor: pointer;
    border: none;
    outline: none;
};

h1,h2,h3,h4 {
line-height: 1.;
}; 

h1{
    font-size: 3rem;
}

h2{
    font-size: 2.5rem;
}

h3{
    font-size: 1.75rem;
}
h4{
    font-size: 1rem;
}
body{
    font-size: 1.25rem;
  
}
p{
    color: var(---dark-grey);
    text-overflow: ellipsis;
}



@media screen and (max-width:800px){
    
    h1{
        font-size: 4rem;
    }
    
    h2{
        font-size: 2.5rem;
    }
    
    h3{
        font-size: 1.75rem;
    }
    h4{
        font-size: 1.1rem;
    }
    
    p{
        margin-bottom: 1.5rem;
        
    }
    body{
        font-size: 1.5rem;
        max-width: 100%;
    }
}
`;

export default GlobalStyles;
