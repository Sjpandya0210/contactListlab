import {useState, useEffect} from 'react'
import ContactRow from './ContactRow';
// import SelectedContact from './SelectedContact';

// const dummyContacts = [
//     { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
//     { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
//     { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
//   ];

function ContactList ({setSelectedContactId}) {
    const [contacts, setContacts] = useState([]);
    console.log( "my contacts:", contacts);

// [] is dependency array to make sure that our component will run the effect only once after the component has mounted
    useEffect(() => {
        async function fetchContacts() {
            try {
              const response = await fetch (
                'https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users'
                );
              console.log("This is response",response)
              const result = await response.json();
              console.log("This is result",result)
              setContacts(result);
            } catch (error) {
              console.error(error);
            }
          }
          fetchContacts();
      }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th colSpan="3">
                        Contact List
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                </tr>
                {contacts.map((contact) => {
                 return <ContactRow key={contact.id} setSelectedContactId={setSelectedContactId} contact={contact} />
                })
                }
            </tbody>
        </table>
    );
}
export default ContactList