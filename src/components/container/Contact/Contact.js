import React, { Component } from 'react';
import ContactForm from '../../presentational/ContactForm/ContactForm';
import axios from 'axios';

export default class Contact extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    }
    handleName = (val) => {
        this.setState({name: val});
    }
    handleEmail = (val) => {
        this.setState({email: val});
    }
    handleSubject = (val) => {
        this.setState({subject: val});
    }
    handleMessage = (val) => {
        this.setState({message: val});
    }
    sendMessage = () => {
        const { name, message, email, subject } = this.state;
        if(message && email && subject && name) {
            axios.post("/api/contact", { ...this.state })
            .then(res => {
                this.setState({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                })
                alert(res.data.message)
            }).catch(err => console.log('Axios Contact Post Error----------', err));
        }
    }
    render() {
        return (
            <div>
                <ContactForm {...this.state} sendMessage={this.sendMessage} handleEmail={this.handleEmail} 
                handleSubject={this.handleSubject} handleMessage={this.handleMessage} handleName={this.handleName}/>
            </div>
        );
    }
}