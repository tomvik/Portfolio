import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import styled from "styled-components";
import { MuiThemeProvider } from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme(
  {
    palette: {
      primary: {
        main: '#311b92',
      },
      secondary: {
        main: '#ede7f6',
      },
    },
  }
);


const StyledWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
`;

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/Portfolio">
      <StyledWrapper>
        <MuiThemeProvider theme={theme}>
          <Header />
          <App />
          <Footer />
        </MuiThemeProvider>
      </StyledWrapper>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
