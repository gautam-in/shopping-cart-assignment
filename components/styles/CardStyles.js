import styled from "styled-components"

const CardStyle = styled.div`
width: 230px;
border-radius: 10px;
margin: 2rem 0.5rem;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

.container-img{
    img{
        width: 100%;
        height: 100%;
    }
}

.container-description{
    height: 120px;
    background-color: var(--light-grey);
    padding: 2rem;
    font-size: 1.5rem;
    margin: 0 1rem;
    overflow: hidden;
}
.container-price{
    margin: 3rem 2rem 2rem 2rem;
    display: flex;
    justify-content: space-between;
    margin: 3rem 1rem;
    align-items: center;
    font-size: 1.8rem;
    button{
        background-color: var(--primary-color);
        padding: 10px 20px;
        color: #fff;
        border-radius: 5px;
    
    
    }
   
    };

    @media screen and (max-width:800px){
        width: 100%; 
      .container-one{
          display: flex;
          .container-img{
              width: 200%;
          }
        
      }
.container-price{
    button{
              width: 200px;
          }
}
     
      
}

`

export default CardStyle