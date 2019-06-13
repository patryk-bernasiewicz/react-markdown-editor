import React from 'react';
import { Helmet } from 'react-helmet';

const Head = props => {
  return (
    <Helmet>
      <meta charset='utf-8' />
      <link
        rel='stylesheet'
        href='//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css'
        async='async'
      />
    </Helmet>
  );
};

export default Head;
