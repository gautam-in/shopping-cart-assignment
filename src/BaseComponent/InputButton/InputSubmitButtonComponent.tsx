import "./InputSubmitButtonComponent.scss";

interface IInputSubmitButtonComponentProps {
  id: string;
  buttonName: string;
  externalClassName?: string;
}

export const InputSubmitButtonComponent: React.FC<IInputSubmitButtonComponentProps> = (
  props
) => {
  const { id, buttonName, externalClassName } = props;
  const BASE_CLASSNAME: string = "input-button";
  return (
    <div className={externalClassName}>
      <input 
        id={id} 
        className={BASE_CLASSNAME}
        type="submit"
        value={buttonName}
        />
    </div>
  );
};
