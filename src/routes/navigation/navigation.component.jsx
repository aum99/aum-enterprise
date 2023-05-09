import { Fragment, useCallback } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { toggleNavbar } from "../../store/navbar/navbar.action";
import { selectIsMenuOpen } from "../../store/navbar/navbar.selector";

import {
  NavbarContainer,
  NavLogo,
  NavLinksContainer,
  NavLink,
  NavbarCtaContainer,
  NavMenu,
  NavMenuContainer,
  NavMenuBlock,
  BodyContainer,
} from "./navigation.styles";

const Navigation = () => {
  const dispatch = useDispatch();
  const isMenu = useSelector(selectIsMenuOpen);

  const toggleMenu = () => {
    dispatch(toggleNavbar(!isMenu));
  };

  const navigate = useNavigate();
  const navigateToHome = useCallback(() => {
    navigate("/");
  });

  return (
    <Fragment>
      <NavbarContainer>
        <NavLogo onClick={navigateToHome} />
        <NavLinksContainer>
          <NavLink to="/categories">Categories</NavLink>
          <NavLink>Deals</NavLink>
          <NavLink>Whats New</NavLink>
          <NavLink>Delivery</NavLink>
        </NavLinksContainer>
        <NavbarCtaContainer>
          <NavLink>
            <i className="bx bx-user icon"></i>Register
          </NavLink>
          <NavLink>
            <i className="bx bx-cart-alt icon"></i>Cart
          </NavLink>
          <NavMenu onClick={toggleMenu}>
            <i className="bx bx-menu"></i>
          </NavMenu>
        </NavbarCtaContainer>
        {isMenu && (
          <NavMenuContainer>
            <NavMenuBlock>
              <NavLink to="/categories" onClick={toggleMenu}>
                Categories
              </NavLink>
              <NavLink>Deals</NavLink>
              <NavLink>Whats New</NavLink>
              <NavLink>Delivery</NavLink>
            </NavMenuBlock>
          </NavMenuContainer>
        )}
      </NavbarContainer>
      <BodyContainer>
        <Outlet />
      </BodyContainer>
    </Fragment>
  );
};

export default Navigation;
