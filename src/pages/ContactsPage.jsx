const { Container, Title } = require("components/App.styled");
const { Contacts } = require("components/Contacts/Contacts");
const { Filter } = require("components/Filter/Filter");
const { PhonebookForm } = require("components/PhonebookForm/PhonebookForm");
const { ToastContainer, Flip } = require("react-toastify");

const ContactsPage = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <PhonebookForm />
      <Title>Contacts</Title>
      <Filter />
      <Contacts />
      <ToastContainer autoClose={2000} transition={Flip} theme="colored" />
    </Container>
  );
};

export default ContactsPage;