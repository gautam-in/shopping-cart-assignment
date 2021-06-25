import ButtonStyles from "./styles/ButtonStyles";
export default function CustomButton({
  text,
  classes,
  clickHandler,
  additionalText,
}) {
  return (
    <ButtonStyles
      type="button"
      className={classes ? classes : ""}
      onClick={clickHandler}
      additionalText={additionalText}
    >
      {text}
    </ButtonStyles>
  );
}
