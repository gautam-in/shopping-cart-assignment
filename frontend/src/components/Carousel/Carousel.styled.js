import styled from "styled-components";

export const CarouselContainer = styled.section`

.carousel-image{
  height: 30%;
}

.carousel-container {
  margin-bottom: 0.8rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: rgb(0 0 0 / 45%) 0px 19px 40px -46px;
  /* box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px; */
} 

@media (min-width: 1200px) {
  .carousel-container{
    width: 85%;
    margin: auto;
    margin-bottom: 0.8rem;
  }
}

.carousel-wrapper {
  display: flex;
  width: 100%;
  position: relative;
  margin-bottom: 1rem;
}

.carousel-content-wrapper {
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.carousel-content {
  display: flex;
  transition: all 500ms linear;
  -ms-overflow-style: none; /* hide scrollbar in IE and Edge */
  scrollbar-width: none; /* hide scrollbar in Firefox */
}

/* hide scrollbar in webkit browser */
.carousel-content::-webkit-scrollbar,
.carousel-content::-webkit-scrollbar {
  display: none;
}

.carousel-content > * {
  width: 100%;
  flex-shrink: 0;
  flex-grow: 1;
}

.left-arrow,
.right-arrow {
  cursor: pointer;
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  padding: 10px;
  background-color: rgba(0 0 0 / 15%);
  color: white ;
  font-weight: 600;
  border: none
}

.left-arrow {
  left: 24px;
}

.right-arrow {
  right: 24px;
}

@media (hover: none) and (pointer: coarse) {
  .left-arrow,
  .right-arrow
  /* .dot  */
  {
    display: none;
  }
}

@media (hover: none) and (pointer: coarse) {
  .left-arrow,
  .right-arrow
  /* .dot  */
  {
    display: none;
  }
}

@media (max-width: 600px) {
  .left-arrow,
  .right-arrow{
    display: none;
  }
}

@media (max-width: 600px) {
  .dot {
    /* display: none; */
  }
}

.dots {
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}

.dot {
  padding: 5px;
  border-radius: 50%;
  margin: 0 8px;
  background-color: #7e7c7c;
  cursor: pointer;
  border: none;
}
@media (max-width: 450px) {
  .dot{
    padding: 4px;
  }
}
@media (max-width: 350px) {
  .dot{
    padding: 3px;
  }
}
.dot.active {
  background-color: #151111;
}

`
