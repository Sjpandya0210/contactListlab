function ContactRow ({setSelectedContactId, contact }) {
  const handleContactClick = () => {
    // set the selectedcontactId when a contact row is clicked 
    setSelectedContactId(contact.id)
  }
    return (
      <tr onClick={() => {
        setSelectedContactId(contact.id);
      }}
      >
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>
    );
  }

export default ContactRow