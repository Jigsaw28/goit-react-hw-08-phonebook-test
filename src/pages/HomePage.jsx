import { Title } from 'components/App.styled';
import { Card, Lead, Wrapper } from './HomePage.styled';

const HomePage = () => {
  return (
    <Wrapper>
      <Card>
        <Title>Welcome to Phonebook</Title>
        <Lead>Store and manage your contacts quickly and conveniently.</Lead>
      </Card>
    </Wrapper>
  );
};
export default HomePage;
