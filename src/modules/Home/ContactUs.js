import React from 'react'
import { LegendForm, SectionComponent, FormAllContent } from '../../StyledComponents/pages/GlobalPageStyle'
import styled, { css } from 'styled-components/macro';
import { Button } from '../../StyledComponents/molecules/GlobalMoleculeStyle'

const ContactUs = () => {

  const SubTitle = styled.p`
    margin-bottom: 30px;
    text-align: center;
    width : 100%;
  `
  const FormWrapper = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
    max-width: 800px;
  `
  const FormWrapperlv2 = styled.div`
    width: 100%;
  `
  const FormWrapperlv3 = styled.div`
  display: flex;
  justify-content: space-between;
  `



  return (
    // halfwidth
    <div>
      <SectionComponent
        titleSection="write to us"
        nameComponent="contactUs"
      >
        <SubTitle>Please contact us with any specific query that you could not find above and one of our dedicated team members will be in touch with you shortly.</SubTitle>
        <FormWrapper>
          <FormAllContent
            desForm="all fields are mandatory unless mentioned."
          >
            <FormWrapperlv2>
              <FormWrapperlv3>
                <LegendForm
                  attrName="halfwidth"
                  legendTitle="full name"
                ></LegendForm>
                <LegendForm
                  attrName="halfwidth"

                  legendTitle="email"
                ></LegendForm>
              </FormWrapperlv3>
              <LegendForm
                legendTitle="subject"
              ></LegendForm>

              <LegendForm
                legendTitle="message"
              ></LegendForm>

            </FormWrapperlv2>
            <FormWrapperlv2>
              <Button>
                send
              </Button>
            </FormWrapperlv2>
          </FormAllContent>
        </FormWrapper>

      </SectionComponent>
    </div>
  )
}
export default ContactUs;