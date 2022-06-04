import { ApolloClient } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import './App.css';
import Launches from './components/Launches';
import logo from './logo.PNG';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className='container'>
        <img
          src={logo}
          alt='spaceX logo'
          style={{ width: 300, display: 'block', margin: 'auto' }}
        />
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
