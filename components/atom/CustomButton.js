import ButtonStyles from "../styles/ButtonStyles";
export default function CustomButton({
  children,
  classes,
  clickHandler,
  additionalText,
}) {
  return (
    <ButtonStyles
      className={classes ? classes : ""}
      onClick={clickHandler}
      additionalText={additionalText}
    >
      {children}
    </ButtonStyles>
  );
}
