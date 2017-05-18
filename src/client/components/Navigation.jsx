import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Svg from 'Ui/Svg';
import classnames from 'classnames';
import { connect } from 'react-redux';

function Navigation({ location, user, qty, scrolled }) {
  const isRoot = location.pathname === '/';
  return (
    <nav
      style={{ position: 'fixed' }}
      className={
        classnames('global-nav global-padding-x flex-parent flex-justify-between flex-align-center', {
          root: isRoot && !scrolled,
        })
      }
    >
      <div className="logo">
        <Link to="/"><Svg variant="archadon-logo" color="#FFF" /></Link>
      </div>
      <div className="flex-parent flex-align-center">

        {user.authToken && user.ID ?
          (
            [<div key="a" style={{ marginRight: '35px' }}>
              <Link to="/account">My Account</Link>
            </div>,
            <div key="b" style={{ marginRight: '35px' }}>
              <Link to="/logout">Log Out</Link>
            </div>]
          ) : (
            [<div key="c" style={{ marginRight: '35px' }}>
              <Link to="/login">Log In</Link>
            </div>,
            <div key="d" style={{ marginRight: '35px' }}>
              <Link to="/signup">Sign Up</Link>
            </div>]
          )}
        <Link to="/cart">
          <div className="flex-parent flex-align-center">
            <div className="margin--right-1" style={{ width: '24px', height: '16px' }}>
              <Svg variant="icon-cart" color="#FFF" />
            </div>
            <div>
              {qty}
            </div>
          </div>
        </Link>

      </div>
    </nav>
  );
}

const mapStateToProps = state => ({
  user: state.user,
  qty: state.cart.totalQty,
});

export default withRouter(connect(mapStateToProps)(Navigation));
