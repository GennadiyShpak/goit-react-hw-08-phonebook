import Container from '../components/Container';

import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import Form from '../components/Form/Form';
import Section from '../components/Section/Section';

const ContactsView = () => {
  return (
    <Container>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </Container>
  );
};
export default ContactsView;
