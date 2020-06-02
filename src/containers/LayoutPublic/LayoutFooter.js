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
    marginTop: '15px',
  };
  const FooterItemControl = styled.li`
    margin-top: 10px;
    ${(props) =>
      props.socialLink &&
      css`
        margin-right: 10px;
        margin-top: 0px;
      `}
  `;

  const FooterItemWrapperlv1 = styled.li`
    margin-top: 20px;

    display: flex;
    flex-direction: column;
    &:first-child {
      margin-top: 0px;
    }
  `;
  const FooterItemGrouplv3 = styled.ul`
    display: flex;
    font-family: 'GreycliffCF-Bold';
    flex-direction: column;
    ${(props) =>
      props.newAttr &&
      css`
        padding-top: 15px;
      `}
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
      `}
  `;

  const FooterContentWrapper = styled.div`
    display: flex;
    padding: 60px 0;
  `;

  const SignUpEmailWrapper = styled.div`
    display: flex;
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
                <FooterItemControl socialLink>
                  <FooterNavItem to="/">
                    <img src={linkedin} alt="linkedin" />
                  </FooterNavItem>
                </FooterItemControl>
                <FooterItemControl socialLink>
                  <FooterNavItem to="/">
                    <img src={insta} alt="instagram" />
                  </FooterNavItem>
                </FooterItemControl>
                <FooterItemControl socialLink>
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
                  contact us and one of our dedicated <Link>support</Link> team will get in touch
                  with you
                </p>
              }
            </FooterItemWrapperlv1>
          </FooterItemGrouplv2>

          <FooterItemGrouplv2 information>
            about postpay
            <FooterItemControl>
              <FooterNavItem to="/">about us</FooterNavItem>
            </FooterItemControl>
            <FooterItemControl>
              <FooterNavItem to="/">careers</FooterNavItem>
            </FooterItemControl>
            <FooterItemControl>
              <FooterNavItem to="/">PCI DSS</FooterNavItem>
            </FooterItemControl>
            <FooterItemControl>
              <FooterNavItem to="/">investors</FooterNavItem>
            </FooterItemControl>
          </FooterItemGrouplv2>

          <FooterItemGrouplv2 companies>
            <FooterItemGrouplv3>
              postpay for shoppers
              <FooterItemControl>
                <FooterNavItem to="/">how it works</FooterNavItem>
              </FooterItemControl>
              <FooterItemControl>
                <FooterNavItem to="/">responsible spending</FooterNavItem>
              </FooterItemControl>
            </FooterItemGrouplv3>

            <FooterItemGrouplv3 newAttr>
              postpay for business
              <FooterItemControl>
                <FooterNavItem to="/">benefits</FooterNavItem>
              </FooterItemControl>
              <FooterItemControl>
                <FooterNavItem to="/">add postpay to your business</FooterNavItem>
              </FooterItemControl>
              <FooterItemControl>
                <FooterNavItem to="/">for developers</FooterNavItem>
              </FooterItemControl>
            </FooterItemGrouplv3>
          </FooterItemGrouplv2>
        </FooterItemGrouplv1>
        {/* email subscribe */}
        <FooterItemGrouplv1 footerSubscribe>
          keep up to date
          {
            <p style={FooterTextItem}>
              sign up to our newsletter to receive updates on new store additions and special rates
            </p>
          }
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
