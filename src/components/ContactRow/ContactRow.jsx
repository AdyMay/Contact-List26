import React from 'react'

function ContactRow({ name, email, phone, setSelectedContactId }) {
  return (
    <tr onClick={() => setSelectedContactId(contact.id)}>
        <td>{contact?.name}</td>
        <td>{contact?.email}</td>
        <td>{conact?.phone}</td>
    </tr>
  );
}

export default ContactRow;
