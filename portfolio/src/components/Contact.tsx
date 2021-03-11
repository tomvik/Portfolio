import React from "react";
import { Container, Paper } from "@material-ui/core";
import { ContactForm } from "./ContactForm/ContactForm";

const Contact = () => {
  return (
    <Container>
      <Paper style={{ padding: 16 }}>
        <ContactForm />
      </Paper>
    </Container>
  );
};

export default Contact;
