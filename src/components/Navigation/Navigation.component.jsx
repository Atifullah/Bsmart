import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';

import { ReactComponent as CrwnLogo } from '../../img/crown.svg';

import { selectCurrentUser } from '../Store/user/user.selector';
import { selectIsCartOpen } from '../Store/cart/cart.selector';
import './Navigation.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { signOutStart } from '../Store/user/user.action';

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen =useSelector(selectIsCartOpen);
  const signOutUser = ()=> dispatch(signOutStart());
  return (

    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {currentUser ?
          (
            <span className='nav-link' onClick={signOutUser}>SIGNOUT</span>
          ):(
          <Link className='nav-link' to='/auth'>
            SIGN IN
          </Link>
          )}
          <CartIcon/>
        </div>
        {isCartOpen && <CartDropdown/>}

      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;