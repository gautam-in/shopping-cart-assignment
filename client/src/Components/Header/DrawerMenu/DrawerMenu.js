import React, { useEffect } from 'react'
import { DrawerMenuWrapper } from './DrawerMenu.style';
import { Button, Drawer } from 'antd';
import { Link } from 'react-router-dom';
import { ArrowRightOutlined} from '@ant-design/icons';


const DrawerMenu = ({ drawerMenu , authToken, closeMenuDrawer}) => {

  return (
    <DrawerMenuWrapper>
        <Drawer
            title="Main Menu"
            placement="left"
            closable={true}
            onClose={closeMenuDrawer}
            visible={drawerMenu}
            key="drawerMenu"
        >
            <div className='menu_mobile'>
                <Link to={"/"}>Home <ArrowRightOutlined/></Link>
                <Link to={"/products"}>Products <ArrowRightOutlined/></Link>
            </div>
            {!authToken ? <div className='menu_login_signup'>
                <Button type='primary' danger size='large'><Link to={"/Login"}>Log in</Link></Button>
                <Button type='primary' danger size='large'><Link to={"/signup"}>Sign up</Link></Button>
            </div>: null}
        </Drawer>
    </DrawerMenuWrapper>
  )
}

export default DrawerMenu;
