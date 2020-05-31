import React from 'react';
import {
  SectionWrapper,
  Container,
  TitleSection,
  SectionBodyWrapper,
  ItemColumnWrapper,
  ImageItem,
  TitleItem,
  DesTitleItem,
  SectionTwoElements,
  SectionTwoElementsWrapper,
  SectionTwoElementsImgWrapper,
  SectionTwoElementsTextWrapper,
  SectionSubtitle,
  SectionDescription,
} from '../../StyledComponents/pages/GlobalPageStyle';

import plushuman from '../../img/plushuman.svg';
import flight from '../../img/flight.svg';
import handle from '../../img/hand.svg';
import handup from '../../img/handup.svg';
import howItWorks1 from '../../img/how-it-works-1.png';
import howItWorks2 from '../../img/how-it-works-2.png';
import howItWorks3 from '../../img/how-it-works-3.png';

const Home = () => {
  const ItemContent = ({ url, alt, titleItem, desTitleItem, newAttr, centerImg, bigImgMb }) => (
    <ItemColumnWrapper>
      <ImageItem bigImg={newAttr} centerImg={centerImg}>
        <img src={url} alt={alt} />
      </ImageItem>
      <TitleItem bigImgMb={bigImgMb}>{titleItem}</TitleItem>
      <DesTitleItem center="center" padding_bottom="padding_bottom">
        {desTitleItem}
      </DesTitleItem>
    </ItemColumnWrapper>
  );

  const SectionHowItWorks = ({ titleSection, children }) => (
    <SectionWrapper>
      <Container>
        <TitleSection center="center" padding_bottom="padding_bottom">
          {titleSection}
        </TitleSection>
        <SectionBodyWrapper>{children}</SectionBodyWrapper>
      </Container>
    </SectionWrapper>
  );

  // Two Element Section

  const SectionAboutPostPay = ({} = ({
    url,
    titleSection,
    subTitleSection,
    descriptionSection,
  }) => (
    <Container>
      <SectionTwoElementsWrapper>
        <SectionTwoElementsImgWrapper>
          <img src={url} alt="handup" />
        </SectionTwoElementsImgWrapper>
        <SectionTwoElementsTextWrapper>
          <TitleSection>{titleSection}</TitleSection>
          <SectionSubtitle>{subTitleSection}</SectionSubtitle>
          <SectionDescription>{descriptionSection}</SectionDescription>
        </SectionTwoElementsTextWrapper>
      </SectionTwoElementsWrapper>
    </Container>
  ));
  return (
    <div>
      <SectionHowItWorks titleSection="how it works">
        <ItemContent
          url={plushuman}
          alt="human"
          titleItem="sign-up in seconds &#38; get instant approval decision"
          desTitleItem="Select postpay as your payment method on checkout. All you need is your debit/credit card and emirates ID (you must be over 18). no long forms for you to fill and we will give you an instant approval decision."
        />
        <ItemContent
          url={flight}
          alt="human"
          titleItem="receive your order as normal"
          desTitleItem="Your order is shipped as normal  and the purchase amount is split into 4 equal payments - the first is processed immediately and the remaining three payments are automatically collected every two weeks."
        />
        <ItemContent
          url={handle}
          alt="human"
          titleItem="pay nothing extra"
          desTitleItem="postpay is always zero interest and charges absolutely no additional fees when you repay on time. Automatic payment taken every 2 weeks in four equal installments."
        />
      </SectionHowItWorks>

      <SectionTwoElements>
        <SectionAboutPostPay
          url={handup}
          titleSection="about postpay"
          subTitleSection="shop now, pay later"
          descriptionSection={
            <p>
              postpay is fully integrated with all your favourite shops. shop as usual, then choose
              postpay as your payment method at checkout. First-time customers complete a quick
              registration, returning customers simply log in. It’s that easy! <br />
              <br /> You then pay for your items over 4 easy instalments, with Zero-interest and no
              transaction or processing fees when you pay on time. It’s buy now, pay later made
              seamless for you!
            </p>
          }
        />
      </SectionTwoElements>
      <h2>Section Bonus</h2>
      <SectionHowItWorks titleSection="how it works">
        <ItemContent
          bigImgMb="bigImgMb"
          newAttr="bigImg"
          url={howItWorks1}
          alt="human"
          titleItem="Shop at your favorite online stores"
          desTitleItem="Simply complete your order and select postpay at checkout!"
        />
        <ItemContent
          bigImgMb="bigImgMb"
          centerImg="centerImg"
          newAttr="bigImg"
          url={howItWorks2}
          alt="human"
          titleItem="Sign up in seconds"
          desTitleItem="For first-time users only! Enter a couple of details and get instant approval decision"
        />
        <ItemContent
          bigImgMb="bigImgMb"
          newAttr="bigImg"
          url={howItWorks3}
          alt="human"
          titleItem="postpay it!"
          desTitleItem="Confirm your order in one click and pay in four interest-free payments"
        />
      </SectionHowItWorks>
    </div>
  );
};

export default Home;
