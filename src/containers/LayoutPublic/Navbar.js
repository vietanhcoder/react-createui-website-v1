import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

// tạo 1 cái style component chứa cái Navlinklv1
// Tạo 1 cái style component chứa Navlinklv2

// Cấu trúc:
/**
 * Navbarwrapper
 *  container
 *   - logo
 *   - Lv1NavLink: how it works
 *   - Lv1NavLink: postpay for business (dropdown)
 *       dropdown-wrapper
 *         Lv2NavLink: benefits
 *         Lv2NavLink: benefits
 *   - Login button
 *
 */

const Navbar = () => {
  return <div>this is navbar content</div>;
};

export default Navbar;
