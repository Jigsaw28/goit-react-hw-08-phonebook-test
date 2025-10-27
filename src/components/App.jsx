import { Flip, ToastContainer } from 'react-toastify';
import { Container, Title } from './App.styled';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import HomePage from 'pages/HomePage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
    // <Container>
    //   <Title>Phonebook</Title>
    //   <PhonebookForm />
    //   <Title>Contacts</Title>
    //   <Filter />
    //   <Contacts />
    //   <ToastContainer autoClose={2000} transition={Flip} theme="colored" />
    // </Container>
  );
};
