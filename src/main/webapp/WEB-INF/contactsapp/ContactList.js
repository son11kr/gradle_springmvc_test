import React, { Component, PropTypes } from 'react';
import ContactItem from './ContactItem'

class ContactList extends Component {
    render() {
        let filteredContacts = this.props.contacts.filter(
            (contact) => contact.name.indexOf(this.props.filterText) !== -1
        );

        return (
            <ul>
                { filteredContacts.map(
                    (contact) => <ContactItem key={contact.email} name={contact.name} email={contact.email} />
                )}
            </ul>
        )
    }
}
ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object)
}

export default ContactList;