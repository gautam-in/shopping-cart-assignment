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
              <li key={id} className="navList__items" onClick={() => handleOnClickNavItems(id)}>
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
