import { Fragment, useCallback } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { toggleNavbar } from "../../store/navbar/navbar.action";
import { selectIsMenuOpen } from "../../store/navbar/navbar.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutStart } from "../../store/user/user.action";

import CartDropdown from "../../components/cart-dropdown/cart.component";

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
  const isCartOpen = useSelector(selectIsCartOpen);
  const currUser = useSelector(selectCurrentUser);

  const toggleMenu = () => {
    dispatch(toggleNavbar(!isMenu));
  };

  const toggleCart = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  const navigate = useNavigate();
  const navigateToHome = useCallback(() => {
    navigate("/");
  });

  const signOut = () => {
    dispatch(signOutStart());
  };

  return (
    <Fragment>
      <NavbarContainer>
        <NavLogo onClick={navigateToHome} />
        <NavLinksContainer>
          <NavLink to="/products">Products</NavLink>
          <NavLink>Deals</NavLink>
          <NavLink>Whats New</NavLink>
          <NavLink>Delivery</NavLink>
        </NavLinksContainer>
        <NavbarCtaContainer>
          {currUser ? (
            <NavLink onClick={signOut}>
              <i className="bx bx-log-out-circle"></i>Sign Out
            </NavLink>
          ) : (
            <NavLink to="/sign-in">
              <i className="bx bx-user icon"></i>Sign In
            </NavLink>
          )}

          <NavLink onClick={toggleCart}>
            <i className="bx bx-cart-alt icon"></i>Cart
          </NavLink>
          <NavMenu onClick={toggleMenu}>
            <i className="bx bx-menu"></i>
          </NavMenu>
        </NavbarCtaContainer>
      </NavbarContainer>

      {isMenu ? (
        <NavMenuContainer>
          <NavMenuBlock>
            <NavLink to="/products" onClick={toggleMenu}>
              Products
            </NavLink>
            <NavLink>Deals</NavLink>
            <NavLink>Whats New</NavLink>
            <NavLink>Delivery</NavLink>
          </NavMenuBlock>
        </NavMenuContainer>
      ) : (
        <BodyContainer>
          <Outlet />
        </BodyContainer>
      )}
      {isCartOpen && <CartDropdown />}
    </Fragment>
  );
};

export default Navigation;
