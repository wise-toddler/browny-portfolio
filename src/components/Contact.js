import React, { Component } from 'react';
import '../styles.css';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
        };
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // Here you would typically send the form data to a server or API
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <h1>Contact</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" onChange={this.handleInputChange} />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" onChange={this.handleInputChange} />
                    </label>
                    <label>
                        Message:
                        <textarea name="message" onChange={this.handleInputChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Contact;