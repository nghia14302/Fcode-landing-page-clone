import React from 'react';

import BlankButton from '../BlankButton';
import FilledButton from '../FilledButton';
import { NavLink } from '../header.style';
import { StyledNavBar } from './navBar.style';

const NavBar = () => {
    return (
        <StyledNavBar>
            <NavLink to="/">
                <BlankButton>Trang chủ</BlankButton>
            </NavLink>
            <NavLink to="/activities">
                <BlankButton>Hoạt động</BlankButton>
            </NavLink>
            <NavLink to="/timeline">
                <BlankButton>Timeline</BlankButton>
            </NavLink>
            <NavLink to="/faq">
                <BlankButton>FAQ</BlankButton>
            </NavLink>
            <NavLink to="/register">
                <FilledButton>ĐĂNG KÍ</FilledButton>
            </NavLink>
        </StyledNavBar>
    );
};

export default NavBar;
