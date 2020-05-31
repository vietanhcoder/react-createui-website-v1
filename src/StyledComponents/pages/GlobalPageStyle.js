import styled, { css } from 'styled-components';
import bannerHomepage from '../../img/homepage-welcome-bg.jpg';
// breack ponter: 500,

// Home page
export const ContainerFluid = styled.div`
  width: 100%;
  padding-left: 0;
  padding-right: 0;
  margin-right: auto;
  margin-left: auto;
`;

// ${(props) =>
//   props.newAttr &&
//   css`
//     color: red;
//   `}
// const url = ${(props) => props.url && css`

//   `}
export const BannerWrapper = styled.div`
  background-image: url(${bannerHomepage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  color: white;
  position: relative;
  ${(props) =>
    props.big &&
    css`
      height: 600px;
    `}
`;

export const BannerTextWrapper = styled.div`
  position: absolute;
  left: 140px;
  top: 50%;
  -webkit-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  transform: translate(0, -50%);
`;

export const BannerTitle = styled.div`
  font-family: 'GreycliffCF-Bold', 'Helvetica Neue', helvetica, Arial, sans-serif;
  font-size: 55px;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
  color: white;
  margin-bottom: 5px;
`;

export const BannerSubTitle = styled.div`
  font-size: 30px;
  margin-bottom: 25px;
  color: white;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
`;

// =================================================================
// section how it works
// =================================================================
export const SectionWrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  padding: 60px 80px;
`;

export const TitleSection = styled.h2`
  ${(props) =>
    props.center &&
    css`
      text-align: center;
    `}
  ${(props) =>
    props.padding_bottom &&
    css`
      padding-bottom: 60px;
    `}
`;

export const SectionBodyWrapper = styled.ul`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;
export const ItemColumnWrapper = styled.li`
  padding: 0 20px;
  width: 33.3333%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
`;

export const ImageItem = styled.div`
  width: 141.5px;
  object-fit: contain;
  display: block;
  margin: auto;
  margin-bottom: 50px;
  height: auto;

  ${(props) =>
    props.bigImg &&
    css`
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin-bottom: 30px;
      img {
        width: 100%;
        max-width: 300px;
      }
    `}
  ${(props) =>
    props.centerImg &&
    css`
      img {
        margin: 0 auto;
      }
    `}
`;

export const TitleItem = styled.h4`
  text-align: center;
  margin-bottom: 30px;
  min-height: 34px;
  ${(props) =>
    props.bigImgMb &&
    css`
      margin-bottom: 30px;
      max-width: 220px;
    `}
`;

export const DesTitleItem = styled.p`
  text-align: left;
  ${(props) =>
    props.center &&
    css`
      text-align: center;
    `}
`;

// =================================================================
//  section About post pay
// =================================================================

export const SectionTwoElements = styled.section``;

export const SectionTwoElementsWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const SectionTwoElementsImgWrapper = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 300px;
    height: auto;
    object-fit: contain;
  }
`;

export const SectionTwoElementsTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 66%;
`;

export const SectionSubtitle = styled.h3`
  margin-bottom: 20px;
`;

export const SectionDescription = styled.div``;
