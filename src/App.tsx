/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';

import SalaryDeductionScreen from './app/SalaryDeductionScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;



function App(): React.JSX.Element {


  return (
    // <SafeAreaView style={backgroundStyle}>
      // <StatusBar
      //   barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      //   backgroundColor={backgroundStyle.backgroundColor}
      // />
      <>
       <SalaryDeductionScreen />
      </>
  );
}



export default App;
