import React, { useState } from 'react';
import { NavBarHeader } from '../../StyledComponents/pages/GlobalPageStyle';
/**
 * NavBarComponent
 *  container
 *    Navbarwrapper
 *   - logo
 *   - wrapper
 *   - Lv1NavLink: how it works
 *   - Lv1NavLink: postpay for business (dropdown)
 *       dropdown-wrapper
 *         Lv2NavLink: benefits
 *         Lv2NavLink: benefits
 *   - Login button
 */

const Navbar = () => {
  const [scrollPos, setScrollPos] = useState(false);

  const showNavBarPos = 0;
  window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos > showNavBarPos) {
      setScrollPos(true);
    } else {
      setScrollPos(false);
    }
  };

  return (
    <div>
      <NavBarHeader scrollPos={scrollPos} />
    </div>
  );
};

export default Navbar;
