import { Contact } from "./Contact/Contact"
import PropTypes from 'prop-types';
import { List } from "./ContactsList.styled";

export const ContactsList = ({ contacts, filterValue, removeContact }) => {
    
    const filteredContacts = contacts.filter(contact =>
        contact.name && contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );

    return (
        <List>
            {filteredContacts.length === 0 ? (
                <li><h3>Sorry, but the list is empty!</h3></li>
            ) : (
                filteredContacts.map(contact => (
                    <Contact contact={contact} removeContact={removeContact} key={contact.id} />
                ))
            )}
        </List>
    );
}

ContactsList.propTypes = {
    filterValue: PropTypes.string,
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            number: PropTypes.string,
            name: PropTypes.string,
            id: PropTypes.string,
        })
    ),
    removeContact: PropTypes.func.isRequired,
};