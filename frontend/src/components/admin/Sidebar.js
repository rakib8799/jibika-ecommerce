import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="sidebar-wrapper">
            <nav id="sidebar">
                <ul className="list-unstyled components">
                    <li>
                        <Link to="/dashboard"><i className="fa fa-tachometer"></i> Dashboard</Link>
                    </li>

                    <li className='dropdown'>
                        <a class="btn btn-secondary dropdown-toggle" href="#productSubmenu" role="button" id="productSubmenu" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa fa-product-hunt"></i> 
                            Products
                        </a>
                        <ul className="dropdown-menu bg-dark" aria-labelledby="productSubmenu">
                            <li>
                                <Link to="/admin/products" className="dropdown-item"><i className="fa fa-clipboard"></i> All</Link>
                            </li>

                            <li>
                                <Link to="/admin/product" className="dropdown-item"><i className="fa fa-plus"></i> Create</Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/admin/orders"><i className="fa fa-shopping-basket"></i> Orders</Link>
                    </li>

                    <li>
                        <Link to="/admin/users"><i className="fa fa-users"></i> Users</Link>
                    </li>

                    <li>
                        <Link to="/admin/reviews"><i className="fa fa-star"></i> Reviews</Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Sidebar
