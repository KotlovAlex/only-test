import React from 'react';
import { AppContainer } from './App.styled'
import { ThemeProvider } from 'styled-components';
import { GlobalStyle }  from './globalStyle'
import HistoryBlock from './HistoryBlock/HistoryBlock';
import theme from './theme'
import './fonts.css'
import { testDataLength2, testDataLength5, testDataLength6 } from './utils/testdata';

function App() {
  return (
    <AppContainer>
      <ThemeProvider theme={theme}>
        <HistoryBlock data={testDataLength6}></HistoryBlock>
        {/* Тестовые данные для проверки независимости блока и работы с разным количеством временных отрезков */}
        {/* <HistoryBlock data={testDataLength5}></HistoryBlock>
        <HistoryBlock data={testDataLength2}></HistoryBlock> */}
        <GlobalStyle />
      </ThemeProvider>
    </AppContainer>
  );
}

export default App;
