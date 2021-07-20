import React,{useState,useEffect} from 'react'
import {Container,SlideImage,DotsContainer,DotSpan} from './style'
import {SlideDot} from '../../atoms/Icons/Icons'

function Slider({ slideImages }) {
    
    let [imageIndex,setIndex] = useState(0)
    
    const Dot = ({ind}) => {
        let color = "#f0f0f0";
        if(ind === imageIndex ){
            color = "#6c707c"
        }
        return <SlideDot color={color} />
    }

    const loadImage = (ind)=>{
        return  setIndex(ind)
    }

    const incrementIndex = ()=>{
        return setIndex((prev) => {
            if(prev === slideImages.length-1) {
                return 0
            }else{
                return (prev + 1)
            }
        })    
    }
    

    useEffect(() => {
        const interVal = setInterval(incrementIndex,4000);
        return () => clearInterval(interVal);
    }, [])

    return(
        <Container>
            <SlideImage src={slideImages[imageIndex]?.bannerImageUrl} alt={slideImages[imageIndex]?.bannerImageAlt}  />
            <DotsContainer>
                {slideImages.map((image,i)=>{ return <DotSpan key={i} onClick={(event)=>loadImage(i)} ><Dot ind={i}  /></DotSpan> })}
            </DotsContainer>
        </Container>
    )
}


export default Slider