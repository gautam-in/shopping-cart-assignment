import { Icon, IconProps } from "./icon";

export function PlusIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M0,12a1.5,1.5,0,0,0,1.5,1.5h8.75a.25.25,0,0,1,.25.25V22.5a1.5,1.5,0,0,0,3,0V13.75a.25.25,0,0,1,.25-.25H22.5a1.5,1.5,0,0,0,0-3H13.75a.25.25,0,0,1-.25-.25V1.5a1.5,1.5,0,0,0-3,0v8.75a.25.25,0,0,1-.25.25H1.5A1.5,1.5,0,0,0,0,12Z" />
    </Icon>
  );
}

export function MinusIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor">
        <rect height="4" width="20" x="2" y="10" />
      </g>
    </Icon>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
      <path
        d="M18 6L6 18M6 6l12 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function CartIcon(props: IconProps) {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="9" cy="21" r="1"></circle>
      <circle cx="20" cy="21" r="1"></circle>
      <path d="M1 1h5l2 14h14"></path>
      <path d="M18 17H7"></path>
    </Icon>
  );
}
