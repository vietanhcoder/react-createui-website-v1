import React, { useState } from 'react'
import { LegendForm, SectionComponent } from '../../StyledComponents/pages/GlobalPageStyle'
import styled, { css } from 'styled-components/macro';
import { Button, Form } from '../../StyledComponents/molecules/GlobalMoleculeStyle'
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
    text-align: left;
    ${(props) =>
    props.buttonWrapper &&
    css`
      margin-top: 25px;
      width: 200px;
      `}
  `
const FormWrapperlv3 = styled.div`
  display: flex;
  justify-content: space-between;
  `
const DesForm = styled.p`
  display: flex;
  font-size: 0.8rem;
  font-style: italic;
  color: #aaaaaa;
  margin-bottom: 5px;
`
const ErrorMess = styled.p`
      color:red;
`

const ContactUs = () => {
  const [formValue, setFormValue] = useState([
    {
      email: "",
      fullname: "",
      subject: "",
      textarea: ""
    }
  ])
  const [errors, setErrors] = useState({
    email: "",
    fullname: "",
    subject: "",
    textarea: ""
  })

  const patternEmail = /^[a-z][a-z0-9_\.]{1,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;

  const _handleSubmitContact = (e) => {
    e.preventDefault()
    const errors = handleErrors(formValue)
    if (Object.keys(errors).length === 0) {
      console.log('submit successfully')
    }
  }


  const _onChangeInput = (e) => {
    const { name, value } = e.target
    setFormValue({
      ...formValue,
      [name]: value
    })
  }

  const handleErrors = formValue => {
    let errors = {}

    if (!formValue.email) {
      errors.email = "This field is required"
    } else if (!patternEmail.test(formValue.email)) {
      errors.email = "email address is invalid"
    }
    if (!formValue.fullname) {
      errors.fullname = "This field is required"
    }
    if (!formValue.subject) {
      errors.subject = "This field is required"
    }

    if (!formValue.textarea) {
      errors.textarea = "This field is required"
    }

    setErrors({ ...errors, errors })
    return errors;
  }

  return (
    <div>
      <SectionComponent
        titleSection="write to us"
        nameComponent="contactUs"
      >
        <SubTitle>Please contact us with any specific query that you could not find above and one of our dedicated team members will be in touch with you shortly.</SubTitle>
        <FormWrapper>
          <DesForm>all fields are mandatory unless mentioned.</DesForm>
          <Form
            action=""
            onSubmit={_handleSubmitContact}
            noValidate
          >
            <FormWrapperlv2>
              <FormWrapperlv3>
                <LegendForm
                  attrName="halfwidth"
                  legendTitle="full name"
                  nameInput="fullname"
                  typeInput="text"
                  onChangeInput={(e) => _onChangeInput(e)}
                ></LegendForm>
                {errors.fullname && <ErrorMess>{errors.fullname}</ErrorMess>}

                <LegendForm
                  attrName="halfwidth"
                  legendTitle="email"
                  nameInput="email"
                  typeInput="email"
                  onChangeInput={(e) => _onChangeInput(e)}
                ></LegendForm>
                {errors.email && <ErrorMess>{errors.email}</ErrorMess>}

              </FormWrapperlv3>
              <LegendForm
                legendTitle="subject"
                nameInput="subject"
                typeInput="text"
                onChangeInput={(e) => _onChangeInput(e)}
              ></LegendForm>
              {errors.subject && <ErrorMess>{errors.subject}</ErrorMess>}

              <LegendForm
                textarea
                legendTitle="message"
                nameInput="textarea"
                typeInput="text"
                onChangeInput={(e) => _onChangeInput(e)}
              ></LegendForm>
              {errors.textarea && <ErrorMess>{errors.subject}</ErrorMess>}
            </FormWrapperlv2>
            <FormWrapperlv2 buttonWrapper>
              <Button primaryBtn big>
                send
              </Button>
            </FormWrapperlv2>
          </Form>
        </FormWrapper>

      </SectionComponent>
    </div>
  )
}
export default ContactUs;