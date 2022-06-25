import * as constants from '../../../constants';
import './sidebar.scss';

function Sidebar(props) {
  const { handleOnClickNavItems } = props;

  return (
    <>
      <aside className="sidebar">
        <ul className="navList">
          {constants.sideNavItems?.map(({ id, name }) => {
            return (
              <li tabIndex="0" key={id + name} className="navList__items" onClick={() => handleOnClickNavItems(id)}>
                {name}
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
