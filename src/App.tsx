// App.tsx
import React from 'react';
import { AuthProvider } from './app/context/AuthContext';
import { AppNavigator } from './navigation/AppNavigator';


const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
};

export default App;
