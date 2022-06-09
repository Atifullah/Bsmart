import { Fragment ,useContext} from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../img/crown.svg';
import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/CartContext';
import './Navigation.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { signOutUser } from '../../firebase/firebase.utils';

const Navigation = () => {
  const{currentUser}=useContext(UserContext);
  const {isCartOpen}=useContext(CartContext);

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