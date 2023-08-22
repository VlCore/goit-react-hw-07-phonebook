
import { useSelector } from 'react-redux';
import { Section } from "./Section/Section"
import { SimpleForm } from "./Form/SimpleForm";
import { ContactsList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";
import { Container, GeneralTitle } from "./App.styled";
  
  const App = () => {
    const contacts = useSelector(state => state.contacts.items);
    const filtered = useSelector(state => state.filter);
    const filterContact = e => {
      const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filtered.toLowerCase())
      );
      return filteredContacts;
    };
  
    return (
      <Container>
        <GeneralTitle>Phonebook</GeneralTitle>
        <Section>
          <SimpleForm />
        </Section>
        <Section>
          <Filter />
        </Section>
        <Section title="Contacts">
          <ContactsList listContact={filterContact()} />
        </Section>
      </Container>
    );
  };
  
  export default App;

  