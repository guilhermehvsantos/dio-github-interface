import React from 'react';
import Layout from './components/layout';
import Loading from './components/loading';
import NoSearch from './components/no_search';
import Profile from './components/profile';
import Repositories from './components/repositories';
import useGithub from './hooks/github-hooks';

const App = () => {

  const { githubState } = useGithub();

  return (
      <Layout>
        {githubState.hasUser ?   <>
          {githubState.loading ? (<Loading/>
          ) : (
            <>
              <Profile />
              <Repositories/>
            </>
          )}  </> : <NoSearch/>
        }
      </Layout>
  );
}

export default App;
