import { createGlobalStyle } from 'styled-components';

import GreycliffCFBold from '../../fonts/GreycliffCF-Bold.otf';
import GreycliffCFLight from '../../fonts/GreycliffCF-Light.otf';
import GreycliffCFRegular from '../../fonts/GreycliffCF-Regular.otf';

export const SCREENSIZES = {
  desktop: '@media screen and (min-width: 500px)',
  mobile: '@media screen and (max-width: 500px)',
  smallerMobile: '@media screen and (max-width: 320px)',
};
// import icomoonEot from '../../fonts/icomoon/fonts/icomoon.eot';
// import icomoonSvg from '../../fonts/icomoon/fonts/icomoon.svg';
// import icomoonTtf from '../../fonts/icomoon/fonts/icomoon.ttf';
// import icomoonWoff from '../../fonts/icomoon/fonts/icomoon.woff';
/* @font-face {
  font-family: 'icomoon';
  src:  url(${icomoonEot});
  src:  url(${icomoonEot}) format('embedded-opentype'),
    url(${icomoonTtf}) format('truetype'),
    url(${icomoonWoff}) format('woff'),
    url(${icomoonSvg}) format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
  } */
export const GlobalStyle = createGlobalStyle`


  @font-face {
    font-family: 'GreycliffCF-Bold';
    src: local('GreycliffCF-Bold'), local('GreycliffCFBold'),
    url(${GreycliffCFBold}) format('opentype');
    font-weight: 700;
    font-style: bold;
  }
  @font-face {
    font-family: 'GreycliffCF-Light';
    src: local('GreycliffCF-Light'), local('GreycliffCFLight'),
    url(${GreycliffCFLight}) format('opentype');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'GreycliffCF-Light';
    src: local('GreycliffCF-Light'), local('GreycliffCFLight'),
    url(${GreycliffCFLight}) format('opentype');
    font-weight: 400;
    font-style: normal;
  }
  html{
    font-size: 62.5%;
  }
  body{
    box-sizing: border-box;
    font-size: 1.6rem;
    font-family: 'GreycliffCF-Light','Helvetica Neue',helvetica,Arial, sans-serif;
    color: #575756;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    height: 100%;
    background: white;
    margin: 0;
    padding: 0;
  }
  h1,h2,h4,h5,h6{
    font-family: 'GreycliffCF-Bold','Helvetica Neue',helvetica,Arial, sans-serif;
    padding:0;
    line-height: 1;
    margin: 0;
  }
 

  h2 {
    font-size:3.5rem;
    color: #575756;
  }
  h3{
    font-size:2.8rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.26;
    letter-spacing: -1.52px;
    color: #888888;
    padding:0;
    margin: 0;
  }
  h4{
    font-size: 2rem;
    font-family: GreycliffCF-Bold;
    margin-bottom: 20px;
    color: #4d4d4d;
    line-height: 20px;
    height: 30px;
  }
  p{
    letter-spacing: -0.5px;
    color: #888888;
    display: block;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    margin-bottom: 2px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.1;
    text-align: left;
  }
  ul,li{
    list-style-type: none;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0;
  }
  img{
    border: none;
    height: 100%;
    width: 100%;
    vertical-align: middle;
  }
  a {
    color: rgb(87, 87, 86);
    text-decoration: none;
  }


`;
