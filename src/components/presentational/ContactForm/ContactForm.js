import React from 'react';
import './ContactForm.css';

const ContactForm = (props) => {
    const { name, email, subject, message } = props;
    return (
        <div className='contact-form'>
            <div>
                <label className='input-label'>Name</label>
                <input type="text" onChange={e => props.handleName(e.target.value)} value={name} required/>
            </div>
            <div>
                <label className='input-label'>Email</label>
                <input type="text" onChange={e => props.handleEmail(e.target.value)} value={email} required/>
            </div>
            <div>
                <label className='input-label'>Subject</label>
                <input type="text" onChange={e => props.handleSubject(e.target.value)} value={subject} required/>
            </div>
            <div className='textarea-div'>
                <label className='input-label'>Message</label>
                <textarea type="text"  onChange={e => props.handleMessage(e.target.value)} value={message} required>
                </textarea>
            </div>
            <div>
                <button className='btn' onClick={() => props.sendMessage()}>Send Message</button>
            </div>
        </div>
    );
};

export default ContactForm;