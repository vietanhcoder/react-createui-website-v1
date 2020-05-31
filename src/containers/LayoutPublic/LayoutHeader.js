import React from 'react';
import {
  ContainerFluid,
  BannerWrapper,
  BannerTextWrapper,
  BannerTitle,
  BannerSubTitle,
} from '../../StyledComponents/pages/GlobalPageStyle';

const LayoutHeader = () => {
  const Herobaner = ({ BannerTitleText, BannerSubTitleText }) => {
    return (
      <ContainerFluid>
        <BannerWrapper big="big">
          <BannerTextWrapper>
            <BannerTitle>{BannerTitleText}</BannerTitle>
            <BannerSubTitle>{BannerSubTitleText}</BannerSubTitle>
          </BannerTextWrapper>
        </BannerWrapper>
      </ContainerFluid>
    );
  };

  return (
    <div>
      <Herobaner
        BannerTitleText="love the way you pay"
        BannerSubTitleText="shop now, pay in four instalments"
      />
    </div>
  );
};

export default LayoutHeader;
