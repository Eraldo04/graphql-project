import TopHeader from "./components/TopHeader";
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import Clients from "./components/Clients";
import AddClientModel from "./components/AddClientModel";

const cache = new InMemoryCache({
  typePolicies:{
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming
          }
        }
      }
    },
    projects: {
      merge(existing, incoming) {
        return incoming
      }
    }
  }

})

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache,
});

function App() {
  return (
    <>
    <ApolloProvider client={client}>
    <TopHeader />
    <div className="container">
      <AddClientModel />
      <Clients />
    </div>
    </ApolloProvider>
    </>
  );
}


export default App;
