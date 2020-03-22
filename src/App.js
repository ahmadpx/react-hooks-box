import React from 'react';
import { useNetworkStatus } from './hooks/useNetworkStatus';

function App() {
  const { isOnline } = useNetworkStatus();
  
  return (
    <div className="App">
      {JSON.stringify({ isOnline })}
    </div>
  );
}

export default App;
