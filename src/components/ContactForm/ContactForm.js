import React, { Component } from "react";

class ContactForm extends Component {
    state = {
    name: '',
    number: '',
    }

    HandleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({[name]: value})
    }

    HandleSubmit = event => {
        event.preventDefault();
        // console.log(this.state);
        this.props.onSubmit(this.state);
        this.formReset();
    }
    formReset = () => {
        this.setState({name: '', number: ''})
    }
    
    render() {
        return(
        <form onSubmit={this.HandleSubmit}
        style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
        >
            <label
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            >
                Name
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={this.state.name}
                    onChange={this.HandleInputChange}
                />
            </label>

            <label
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            >
                Number
                <input
                  type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={this.state.number}
                    onChange={this.HandleInputChange}
                />
            </label>

            <button type="submit"
                style={{
                fontSize: 20,
                color: '#010101',
                margin: 15,
            }}
            >Add contact</button>
        </form>
        
    )
    }
};

export default ContactForm;