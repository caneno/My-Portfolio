import React from 'react';
import NavBar from './NavBar';
import '../NavDrawer.css';
import {Drawer,Layout,Navigation} from 'react-mdl';

const NavDrawer = ({DrawerClose}) => {
        return ( 
            <div style={{display: 'none'}} className='drawer-container' onClick={DrawerClose}>
                <Layout >
                    <Drawer >
                        <Navigation>
                            <NavBar />
                        </Navigation>
                    </Drawer>
                </Layout>
            </div>
         );
    }
 
export default NavDrawer;