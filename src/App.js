import { Switch, Route } from 'react-router-dom';

import ContactsView from './views/ContactsView';
import HomePage from './views/HomePage';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';

const App = () => {
  return (
    <>
      <Container>
        <AppBar />
        <Switch>
          <Route exact path="/">
            {HomePage}
          </Route>
          <Route path="/register">{RegisterView}</Route>
          <Route path="/login">{LoginView}</Route>
          <Route path="/contacts">{ContactsView}</Route>
        </Switch>
      </Container>
    </>
  );
};
export default App;
