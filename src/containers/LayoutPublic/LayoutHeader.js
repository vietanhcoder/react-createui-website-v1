import React from 'react';
import { BannerFruid } from '../../StyledComponents/pages/GlobalPageStyle';
import heroBannerImg from '../../img/homepage-welcome-bg.jpg';
const LayoutHeader = () => {
  return (
    <div>
      <BannerFruid
        big="big"
        BannerTitleText="love the way you pay"
        BannerSubTitleText="shop now, pay in four instalments"
        url={heroBannerImg}
      />
    </div>
  );
};

export default LayoutHeader;
