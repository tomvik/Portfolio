import React from "react";

import { AppBar, Container, Toolbar, IconButton } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";
import styled from "styled-components";
import { kLinkedInLink, kGithubLink, kEmail } from "../../data/urls";

// TODO: Verify later if it needs to be used or not.
// Link of current answer: https://stackoverflow.com/questions/4575826/how-to-push-a-footer-to-the-bottom-of-page-when-content-is-short-or-missing
// Link of this answer: https://stackoverflow.com/questions/50303821/keeping-footer-down-at-the-bottom-with-material-ui-expansion-drawers
const FooterStyled = styled.div`
  z-index: 0;
`;

const Footer = () => {
  const color = "secondary";

  return (
    <FooterStyled>
      <AppBar position="static" color="primary">
        <Container maxWidth="md">
          <Toolbar>
            <a href={kLinkedInLink} target="_blank" rel="noreferrer">
              <IconButton edge="start" color={color} aria-label="home">
                <LinkedInIcon fontSize="default" />
              </IconButton>
            </a>
            <a href={kGithubLink} target="_blank" rel="noreferrer">
              <IconButton edge="start" color={color} aria-label="home">
                <GitHubIcon fontSize="default" />
              </IconButton>
            </a>
            <a href={`mailto: ${kEmail}?subject = Contact&body = Message`}>
              <IconButton edge="start" color={color} aria-label="home">
                <MailIcon fontSize="default" />
              </IconButton>
            </a>
          </Toolbar>
        </Container>
      </AppBar>
    </FooterStyled>
  );
};

export default Footer;
