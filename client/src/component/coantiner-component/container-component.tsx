import {  Container, SxProps } from "@mui/material";

const HomeContainer = (props: any) => {
  return (
    <>
      <Container
        sx={containerStyle}
      >
        {props.children}
      </Container>
    </>
  );
};
export default HomeContainer;

export const containerStyle: SxProps = {
  pt: 1,
  pb: 1,
  width: "70%",
  '@media screen and (max-width: 600px)': {
    width: "100%",
  },
  boxShadow: "0px 11px 11px -14px #111",
}