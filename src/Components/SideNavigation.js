import SideNav, { Nav, NavItem, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
function SideNavigation(props) {
    const { data, onOptionSelect } = props;
    const sideNavStyle = {
        backgroundColor: "lightgrey",
        zIndex: "0",
        opacity: "0.6",
        marginLeft: "275px",
        paddingBottom: "100%"
    }
    const navTextStyle = {
        color: "black",
        opacity: "0.8",
        fontWeight: "500", 
        borderBottom: "1px solid #969191",
        marginLeft: "8px", 
        paddingLeft: "8px"
    }
    
    return (
        <div>
            <SideNav defaultExpanded style={sideNavStyle} onSelect={(selected) =>onOptionSelect(selected)}>
                <SideNav.Toggle />
                <Nav style={{ marginTop: "10px" }}>
                    {data?.map((ele, index) => (
                        <NavItem key={index} eventKey={ele.id}>
                            <NavText style={navTextStyle}>
                                {ele.name}
                            </NavText>
                        </NavItem>
                    ))}
                </Nav>
                <div style={{height: "80vh"}}></div>
            </SideNav>
        </div>
    )
}
export default SideNavigation;