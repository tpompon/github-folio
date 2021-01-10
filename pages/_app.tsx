import 'public/css/github-markdown.css';
import 'tailwindcss/tailwind.css';

import { AppProps } from 'next/app';
import { useApollo } from 'graphql/_client';
import { ApolloProvider} from '@apollo/client';

import Layout from 'components/Layout';
import MetadataHelmet from 'components/MetadataHelmet';

/**
* Add tabs path in the array in the
* order of the navigation you want for
* the users. Leave it empty to delete
* the navigation.
*/
 
const NavigationPages = [
  '/projects',
  '/curriculum'
]

const App = ({ Component, pageProps }: AppProps) => {

  const client = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={client}>
      <MetadataHelmet />
      <Layout pages={NavigationPages}>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default App;