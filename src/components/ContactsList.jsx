import PropTypes from 'prop-types'

export default function ContactsList({contacts, removeContact}){
    return (
        <ul>
            {contacts.map(({name, id, number}) => 
                <li key={id}>
                    <span>{name}: {number}</span>
                    <button onClick={() => removeContact(id)}>Delete</button>
                </li>    
            )}
        </ul>
    )
}

ContactsList.propTypes = {
    contacts: PropTypes.array
}