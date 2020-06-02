import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { Container } from '../../StyledComponents/molecules/GlobalMoleculeStyle';
import insta from '../../img/insta.svg';
import linkedin from '../../img/linkedin.svg';
import snapchat from '../../img/snapchat.svg';
import twitter from '../../img/twitter.svg';

// item li
// item group: ul
const LayoutFooter = () => {
  const FooterNavItem = styled(Link)`
    color: #575756;
    font-family: 'GreycliffCF-Light';
    font-size: 15px;
  `;

  const FooterTextItem = {
    fontFamily: 'GreycliffCF-Light',
    marginTop: '20px',
  };
  const FooterItemControl = styled.li`
    margin-right: 10px;
  `;

  const FooterItemWrapperlv1 = styled.li`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  `;
  const FooterItemGrouplv3 = styled.ul`
    display: flex;
    font-family: 'GreycliffCF-Bold';
    flex-direction: column;
    &:first-child {
      margin-top: 0;
    }
  `;
  const FooterItemGrouplv4 = styled.ul`
    margin-top: 10px;
    display: flex;
    font-family: 'GreycliffCF-Bold';
  `;

  const FooterItemGrouplv2 = styled.ul`
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
  const FooterItemGrouplv1 = styled.ul`
    display: flex;
    font-family: 'GreycliffCF-Bold';
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
      `}
  `;

  const FooterContentWrapper = styled.div`
    display: flex;
    padding: 60px 0;
  `;

  const FooterComponent = () => (
    <Container>
      <FooterContentWrapper>
        {/* footer footerNav */}
        <FooterItemGrouplv1>
          <FooterItemGrouplv2 contactUs>
            <FooterItemWrapperlv1 socialLink>
              connect with us
              <FooterItemGrouplv4>
                <FooterItemControl>
                  <FooterNavItem to="/">
                    <img src={linkedin} alt="linkedin" />
                  </FooterNavItem>
                </FooterItemControl>
                <FooterItemControl>
                  <FooterNavItem to="/">
                    <img src={insta} alt="instagram" />
                  </FooterNavItem>
                </FooterItemControl>
                <FooterItemControl>
                  <FooterNavItem to="/">
                    <img src={twitter} alt="twitter" />
                  </FooterNavItem>
                </FooterItemControl>
                <FooterItemControl>
                  <FooterNavItem to="/">
                    <img src={snapchat} alt="snapchat" />
                  </FooterNavItem>
                </FooterItemControl>
              </FooterItemGrouplv4>
            </FooterItemWrapperlv1>

            <FooterItemWrapperlv1>
              contact us
              {
                <p style={FooterTextItem}>
                  contact us and one of our dedicated <Link to="/">support</Link> team will get in
                  touch with you
                </p>
              }
            </FooterItemWrapperlv1>
          </FooterItemGrouplv2>

          <FooterItemGrouplv2 information>
            about postpay
            <FooterNavItem to="/">about us</FooterNavItem>
            <FooterNavItem to="/">careers</FooterNavItem>
            <FooterNavItem to="/">PCI DSS</FooterNavItem>
            <FooterNavItem to="/">investors</FooterNavItem>
          </FooterItemGrouplv2>

          <FooterItemGrouplv2 companies>
            <FooterItemGrouplv3>
              postpay for shoppers
              <FooterNavItem to="/">how it works</FooterNavItem>
              <FooterNavItem to="/">responsible spending</FooterNavItem>
            </FooterItemGrouplv3>

            <FooterItemGrouplv3>
              postpay for business
              <FooterNavItem to="/">benefits</FooterNavItem>
              <FooterNavItem to="/">add postpay to your business</FooterNavItem>
              <FooterNavItem to="/">for developers</FooterNavItem>
            </FooterItemGrouplv3>
          </FooterItemGrouplv2>
        </FooterItemGrouplv1>
        {/* email subscribe */}
        <FooterItemGrouplv1 footerSubscribe>
          keep up to date
          <FooterTextItem>
            sign up to our newsletter to receive updates on new store additions and special rates
          </FooterTextItem>
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
