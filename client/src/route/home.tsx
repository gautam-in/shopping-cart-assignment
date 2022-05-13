import AdCoantiner from "../component/coantiner-component/container-component";
import Button from "../component/Button/Button-component";
import { Box, Typography, SxProps } from "@mui/material";
import CarouselComponent from "../component/Carousel/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/hook";
import { selectCategory } from "../store/action/action";
import { BannerCategoryProps } from "../type";
import {
  MainBox,
  ImageBox,
  ADBox,
  ADTitle,
  ADDescription,
  btnText,
} from "./home.style";
import { Dispatch } from "redux";
const Home = ({ bannersImage, category }: BannerCategoryProps) => {
  let navigate = useNavigate();
  const dispatch: Dispatch<any> = useAppDispatch();
  const MainBoxStyle: SxProps = (index: any) => {
    let bool = false;
    if (index % 2 === 0) {
      bool = true;
    }

    const style = MainBox(bool);
    return { ...style };
  };

  const categoryBtnClick = (order: any) => {
    dispatch(selectCategory(order))
    navigate(`/products`);
  }

  return (
    <>
      <AdCoantiner>
        <CarouselComponent image={bannersImage} />
      </AdCoantiner>
      
      {category &&
        category.map((cate: any) => {
          return (
            cate.imageUrl && (
              <AdCoantiner key={cate.id}>
                <Box sx={MainBoxStyle(cate.order)}>
                  <Box
                    component={"img"}
                    src={cate.imageUrl}
                    sx={ImageBox}
                    alt={cate.name}
                  />
                  <Box sx={ADBox}>
                    <Typography variant="caption" sx={ADTitle}>{cate.name}</Typography>
                    <Typography sx={ADDescription}>
                      {cate.description}
                    </Typography>
                    <Button
                      id={cate.order}
                      sx={btnText}
                      onClick={() => categoryBtnClick(cate.order)}
                      title={`Explore ${cate.key}`}
                    >
                    </Button>
                  </Box>
                </Box>
              </AdCoantiner>
            )
          );
        })}
    </>
  );
};

export default Home;
