/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Route } from 'react-router-dom'
import { logout } from '../../actions/userActions'
import '../../App.css'
import Search from './Search'




const Header = () => {
    const alert = useAlert();
    const dispatch = useDispatch();

    const { user, loading } = useSelector(state => state.auth)
    const { cartItems } = useSelector(state => state.cart)

    const logoutHandler = () => {
        dispatch(logout());
        alert.success('Logged out successfully.')
    }

    return (
        <Fragment>
            <div className='container-fluid'>
            <nav className="navbar row">
                <div className="col-12 col-md-3">
                    <div className="navbar-brand">
                        <Link to="/" className='text-decoration-none'>
                            <h2 className='text-white'>JIBIKA</h2>
                        </Link>
                    </div>
                </div>

                <div className="col-12 col-md-6 mt-2 mt-md-0">
                    <Route render={({ history }) => <Search history={history} />} />
                </div>

                <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                    <Link to="/cart" style={{ textDecoration: 'none' }} >
                        <span id="cart" className="ms-3">Cart</span>
                        <span className="ms-1" id="cart_count">{cartItems.length}</span>
                    </Link>

                    {user ? (
                        <div className="ms-4 dropdown d-inline">
                            <button className="btn dropdown-toggle text-white me-4" type="button" id="dropDownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">

                                <figure className="avatar avatar-nav">
                                    <img
                                        src={user.avatar && user.avatar.url}
                                        alt={user && user.name}
                                        className="rounded-circle"
                                    />
                                </figure>
                                <span>{user && user.name}</span>
                            </button>

                            <div className="dropdown-menu" aria-labelledby="dropDownMenuButton">

                                {user && user.role === 'admin' && (
                                    <Link className="dropdown-item" to="/dashboard">Dashboard</Link>
                                )}
                                <Link className="dropdown-item" to="/orders/me">Orders</Link>
                                <Link className="dropdown-item" to="/me">Profile</Link>
                                <Link className="dropdown-item text-danger" to="/" onClick={logoutHandler}>
                                    Logout
                                </Link>

                            </div>


                        </div>

                    ) : !loading && <Link to="/login" className="btn ms-4" id="login_btn">Login</Link>}


                </div>
            </nav>
                </div>
        </Fragment>
    )
}

export default Header
