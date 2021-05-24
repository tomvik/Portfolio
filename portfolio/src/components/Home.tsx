import React from "react";
import { Container, Paper } from "@material-ui/core";
import { personal_info } from "./../data/Personal_information.json";

const Home = () => {
  return (
    <Container>
      {personal_info.map((info) => {
        return (
          <Paper style={{ padding: 16, margin: 32 }} elevation={3}>
            <h1>{info.title}</h1>
            {info.text.map((text) => {
              return (
                <p>{text}</p>
              )
            })}
          </Paper>
        )
      })}
    </Container>
  );
};

export default Home;
