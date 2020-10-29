import React, { useState } from 'react';
import styled from "@emotion/styled";
import colors from "styles/colors";
import dimensions from "styles/dimensions";
import MailchimpSubscribe from "react-mailchimp-subscribe"

const url = "https://codingandcommunity.us20.list-manage.com/subscribe/post?u=c3479d45e439f6a6cd82a3cd9&amp;id=5b90f79e76"

const EmailForm = styled('form')`

  display: flex;
  flex-direction: column;
  
  background: #f2f2f2;
  color: #2a2a2a;

  font-family: -apple-system, Helvetica, Arial, sans-serif;
  padding: 2rem;
  

  h2 {
    margin-top: 0;
    margin-bottom: 1rem;
    width:${dimensions.maxwidthTablet}px; 
  }

  .Wrapper {
    display: flex;
    flex-direction: row;
  }

  input {
    color: #2a2a2a;
    width: 100%;
    border: none;
  }

  button,
  input {
    padding: 1rem 1.5rem;
    margin: 1rem;
  }

  button {
    display: inline-block;
    
    border: none;
    background-image: none;
    background-color: ${colors.visorblue};
    color: white;

    letter-spacing: 1px;
    transition: all 0.1s linear;
    
    &:hover {
      cursor: pointer;
      background: darken(#DD0505, 15%);
    }    
  }
`

const CustomForm = ({ status, message, onvalidated }) => {
  let email, fname, lname, fakeinput;
  const submit = (e) => {
    e.preventDefault();
    email &&
    fname &&
    lname &&
    (fakeinput.value === "") &&
    email.value.indexOf('@') > -1 &&
    onvalidated({
      EMAIL: email.value,
      FNAME: fname.value,
      LNAME: lname.value
    });
  }

  return (
    <EmailForm>
      <h2>Join our mailing list</h2>
      <p>Stay in the know on classes, events, and more!</p>

      {status === "sending" && <div style={{ color: "blue" }}>Sending...</div>}
      {status === "error" && <div style={{ color: "blue" }}>Something went wrong :( ({message})</div>}
      {status === "success" && <div style={{ color: "blue" }}>Success!</div>}
      
      <input ref={node => (fname = node)} type='text' placeholder='First Name'/>
      <input ref={node => (lname = node)} type='text' placeholder='Last Name'/>
      <input ref={node => (email = node)} type='email' placeholder='Your Email'/>
      <div aria-hidden="true">
        {/* spam protection; this field should not be filled out */}
        <input ref={node => (fakeinput = node)} type='hidden' placeholder=''/> 
      </div>
      <button onClick={submit}>
        Submit
      </button>
    </EmailForm>
  )
}

const EmailListForm = () => (
  <MailchimpSubscribe
    style={{display: "flex"}}
    url={url}
    render={({ subscribe, status, message }) => (
      <CustomForm 
        status={status} 
        message={message} 
        onvalidated={formData => subscribe(formData)}
      />
    )}
  />
)


export default EmailListForm;