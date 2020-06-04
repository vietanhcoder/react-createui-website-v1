import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../StyledComponents/molecules/GlobalMoleculeStyle';
import { WidthPageContext } from '../../useContext/UseContext';

import insta from '../../img/insta.svg';
import linkedin from '../../img/linkedin.svg';
import snapchat from '../../img/snapchat.svg';
import twitter from '../../img/twitter.svg';

// item li
// item group: ul
const LayoutFooter = () => {
  /**
   * FooterContentWrapper
   * -- FooterItemGrouplv1
   * ----- FooterItemGrouplv2
   * -------- FooterItemGroupWrapper3
   * ------------ FooterContentItemWrapper
   */
  const [isSmallScreen, setIsSmallScreen] = useContext(WidthPageContext);

  const FooterNavItem = styled(Link)`
    color: #575756;
    font-family: 'GreycliffCF-Light';
  `;

  const FooterTextItem = {
    fontFamily: 'GreycliffCF-Light',
    marginTop: '5px',
    marginBottom: '5px',
  };

  const FooterItemGroupWrapper3 = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    &:first-child {
      margin-top: 0px;
    }
  `;
  const FooterContentItemWrapper = styled.div`
    display: flex;
    font-family: 'GreycliffCF-Bold';
    margin-top: 15px;
    flex-direction: column;
    a {
      margin-top: 10px;
      &:first-child {
        margin-top: 0px;
      }
    }
    ${(props) =>
      props.socialLink &&
      css`
        flex-direction: row;
        a {
          margin-top: 0;
          margin-right: 10px;
          &:last-child {
            margin-right: 0;
          }
        }
      `}
    ${(props) =>
      props.mt_0 &&
      css`
        margin-top: 0px;
      `}
  `;

  const FooterItemGrouplv2 = styled.div`
    display: flex;
    font-family: 'GreycliffCF-Bold';
    padding-right: 15px;
    padding-left: 15px;
    ${(props) =>
      props.contactUs &&
      css`
        width: 33%;
        flex-direction: column;
      `}
    ${(props) =>
      props.information &&
      css`
        flex-direction: column;
        width: 25%;
      `}
    ${(props) =>
      props.companies &&
      css`
        flex-direction: column;
        width: 41%;
      `}
  `;
  const FooterItemGrouplv1 = styled.div`
    display: flex;
    font-family: 'GreycliffCF-Bold';
    padding: 0 15px;
    ${(props) =>
      props.footerNav &&
      css`
        width: 59%;
      `}
    ${(props) =>
      props.footerSubscribe &&
      css`
        width: 41%;
        flex-direction: column;
        align-items: flex-end;
      `}
      ${(props) =>
        props.isSmallScreen &&
        css`
          padding: 0;
          flex-direction: column;
          ${FooterItemGrouplv2} {
            width: 100%;
            padding: 0;
            margin-top: 20px;
          }
          ${FooterItemGroupWrapper3} {
            width: 100%;
          }
          ${FooterNavItem} {
            max-width: 100%;
          }
          ${FooterContentItemWrapper} {
            margin-top: 0px;
            a:first-child {
              margin-top: 10px;
            }
          }
        `}
  `;

  const FormSubscription = styled.form`
    display: flex;
    ${(props) =>
      props.isSmallScreen &&
      css`
        flex-direction: column;
      `}
  `;
  const FormContentWrapper = styled.div`
    width: 70%;
    margin-right: 20px;
  `;
  const FormFieldSet = styled.fieldset`
    background-color: white;
    position: relative;
    border-style: solid;
    border-color: rgb(213, 213, 213);
    border-image: initial;
    border-width: 1px;
    border-radius: 5px;
    margin: 0;
    padding: 0;
  `;
  const FormLegend = styled.legend`
    width: max-content;
    margin-left: 10px;
    margin-bottom: 0px;
    font-size: 0.7rem;
    font-weight: 500;
    text-align: left;
    color: rgb(170, 170, 170);
    padding: 0px 5px;
  `;
  const FormInputWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 3px 10px 5px 15px;
  `;
  const FormContentInput = styled.input`
    flex-grow: 1;
    width: 100%;
    box-sizing: border-box;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    background: transparent;
    outline: none;
  `;

  const FooterContentWrapper = styled.div`
    display: flex;
    padding: 60px 0;
    ${(props) =>
      props.isSmallScreen &&
      css`
        flex-direction: column;
        padding-top: 20px;
      `}
  `;

  const FooterComponent = () => (
    <Container isSmallScreen={isSmallScreen}>
      <FooterContentWrapper isSmallScreen={isSmallScreen}>
        {/* footer footerNav */}
        <FooterItemGrouplv1 isSmallScreen={isSmallScreen}>
          <FooterItemGrouplv2 contactUs>
            <FooterItemGroupWrapper3>
              connect with us
              <FooterContentItemWrapper socialLink>
                <FooterNavItem to="/">
                  <img src={linkedin} alt="linkedin" />
                </FooterNavItem>
                <FooterNavItem to="/">
                  <img src={insta} alt="instagram" />
                </FooterNavItem>
                <FooterNavItem to="/">
                  <img src={twitter} alt="twitter" />
                </FooterNavItem>
                <FooterNavItem to="/">
                  <img src={snapchat} alt="snapchat" />
                </FooterNavItem>
              </FooterContentItemWrapper>
            </FooterItemGroupWrapper3>
            <FooterItemGroupWrapper3>
              contact us
              <FooterContentItemWrapper>
                {
                  <p style={FooterTextItem}>
                    contact us and one of our dedicated <Link>support</Link> team will get in touch
                    with you
                  </p>
                }
              </FooterContentItemWrapper>
            </FooterItemGroupWrapper3>
          </FooterItemGrouplv2>

          <FooterItemGrouplv2 information>
            about postpay
            <FooterContentItemWrapper information>
              <FooterNavItem to="/">about us</FooterNavItem>
              <FooterNavItem to="/">careers</FooterNavItem>
              <FooterNavItem to="/">PCI DSS</FooterNavItem>
              <FooterNavItem to="/">investors</FooterNavItem>
            </FooterContentItemWrapper>
          </FooterItemGrouplv2>

          <FooterItemGrouplv2 companies>
            <FooterItemGroupWrapper3>
              postpay for shoppers
              <FooterContentItemWrapper>
                <FooterNavItem to="/">how it works</FooterNavItem>
                <FooterNavItem to="/">responsible spending</FooterNavItem>
              </FooterContentItemWrapper>
            </FooterItemGroupWrapper3>

            <FooterItemGroupWrapper3>
              postpay for business
              <FooterContentItemWrapper>
                <FooterNavItem to="/">benefits</FooterNavItem>
                <FooterNavItem to="/">add postpay to your business</FooterNavItem>
                <FooterNavItem to="/">for developers</FooterNavItem>
              </FooterContentItemWrapper>
            </FooterItemGroupWrapper3>
          </FooterItemGrouplv2>
        </FooterItemGrouplv1>
        {/* email subscribe */}
        <FooterItemGrouplv1 footerSubscribe>
          <FooterContentItemWrapper mt_0>
            keep up to date
            {
              <p style={FooterTextItem}>
                sign up to our newsletter to receive updates on new store additions and special
                rates
              </p>
            }
            <FormSubscription isSmallScreen={isSmallScreen}>
              <FormContentWrapper>
                <FormFieldSet>
                  <FormLegend>email</FormLegend>
                  <FormInputWrapper>
                    <FormContentInput />
                  </FormInputWrapper>
                </FormFieldSet>
              </FormContentWrapper>
              <Button subscribeBtn>subscribe</Button>
            </FormSubscription>
          </FooterContentItemWrapper>
        </FooterItemGrouplv1>
      </FooterContentWrapper>
    </Container>
  );

  return (
    <div>
      <FooterComponent />
    </div>
  );
};

export default LayoutFooter;
