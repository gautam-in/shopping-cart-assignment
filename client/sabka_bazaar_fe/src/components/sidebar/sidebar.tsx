import { ReactElement } from "react";
import "./sidebar.scss";

interface IProps {
  menuOptions: any;
  filterOptions?: Function;
}

const Sidebar = (props: IProps): ReactElement => {
  const { menuOptions, filterOptions } = props;

  return (
    <>
      {menuOptions && (
        <ul>
          {menuOptions.map((option) => {
            return (
              <>
                <li key={option.name} onClick={() => filterOptions(option.id)} className={"menuOption"}>
                  {option.name}
                </li>
                <hr color="#dadbd5" />
              </>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Sidebar;
