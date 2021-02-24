import React from "react";

import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";

// TODO: Verify later if it needs to be used or not.
// Link of current answer: https://stackoverflow.com/questions/4575826/how-to-push-a-footer-to-the-bottom-of-page-when-content-is-short-or-missing
// Link of this answer: https://stackoverflow.com/questions/50303821/keeping-footer-down-at-the-bottom-with-material-ui-expansion-drawers
// import styled from "styled-components";
// const FooterStyled = styled.div`
//   margin-top:calc(5% + 60px);
//   bottom: 0;
// `

const Footer = () => {
  return (
    <AppBar position="static" color="primary" >
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="body1" color="inherit">
            © 2019 Gistia
            </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Footer