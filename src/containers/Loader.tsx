import React from 'react';

import Spinner from '@/components/Spinner';

const Loader: React.FC = () => (
  <div style={{ flexGrow: 1, display: 'grid', placeItems: 'center', height: 500 }}>
    <Spinner size='large' />
  </div>
);

export default Loader;
