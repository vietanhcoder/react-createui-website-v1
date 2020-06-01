import styled, { css } from 'styled-components';

// Container fluid
export const ContainerFluid = styled.div`
  width: 100%;
  padding-left: 0;
  padding-right: 0;
  margin-right: auto;
  margin-left: auto;
`;

// Container
export const Container = styled.div`
  padding: 60px 80px;
`;

// Hero banner
export const BannerWrapper = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  color: white;
  position: relative;
  width: 100%;
  height: 550px;
  ${(props) =>
    props.big &&
    css`
      height: 600px;
    `}
  ${(props) =>
    props.overlay &&
    css`
      position: relative;
      &:before {
        content: '';
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.5);
        position: absolute;
      }
    `}
`;

export const BannerTitle = styled.div`
  font-family: 'GreycliffCF-Bold', 'Helvetica Neue', helvetica, Arial, sans-serif;
  font-size: 39px;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
  color: white;
  margin-bottom: 5px;
`;

export const BannerSubTitle = styled.div`
  font-size: 15px;
  margin-bottom: 25px;
  color: white;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
`;

export const BannerTextWrapper = styled.div`
  position: absolute;
  left: 140px;
  top: 50%;
  -webkit-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  transform: translate(0, -50%);
  ${(props) =>
    props.sectionCTA &&
    css`
      max-width: 800px;
      left: 25%;
      text-align: center;
      color: #252524;
      ${BannerTitle} {
        color: #252524;
      }
      ${BannerSubTitle} {
        margin-bottom: 25px;
        line-height: 20px;
        color: #252524;
        font-size: 20px;
      }
    `}
`;

export const Headline = styled.div`
  font-size: 27px;
  color: #252524;
  margin-bottom: 5px;
`;

export const Button = styled.a`
  display: inline-block;
  text-align: center;
  font-size: 1rem;
  background-color: transparent;
  cursor: pointer;
  font-weight: bold;
  font-family: GreycliffCF-Bold;
  width: 200px;
  color: rgb(87, 87, 86);
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  padding: 10px 15px;
  border-color: rgb(87, 87, 86);
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;
