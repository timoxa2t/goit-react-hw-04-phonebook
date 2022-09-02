import PropTypes from 'prop-types'
import React, {useState} from "react";


export default function ContactForm({addContact}){

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const nameChange = ({target}) => {
        setName(target.value)
    }

    const phoneChange = ({target}) => {
        setNumber(target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(addContact({name, number})){ 
            clearForm()
        }
    }

    const clearForm = () => {
        setName('')
        setNumber('')
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                id="name"
                value={name}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={nameChange}
            />
            <p/>
            <label htmlFor="phone">Number</label>
            <input
                id="phone" 
                value={number}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={phoneChange}  
            />
            <button type="submit">Add contact</button>
        </form>
    )
}

ContactForm.propTypes = {
    addContact: PropTypes.func,
    nameChange: PropTypes.func,
    phone: PropTypes.func
}