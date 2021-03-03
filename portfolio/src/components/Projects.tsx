import { Container, Grid } from "@material-ui/core";
import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import { makeStyles } from "@material-ui/core";
import { projects } from "./../data/Projects.json";

const useStyles = makeStyles({
  outerGridStyle: {
    marginTop: "5px",
    marginBottom: "5px",
    marginLeft: "5px",
  },
});

const Projects = () => {
  const classes = useStyles();

  const project_cards = projects.map(({ heading, description, date, image }) => {
    return (
      <Grid item>
        <ProjectCard
          heading={heading}
          description={description}
          date={date}
          image={image}
        />
      </Grid>
    )
  })

  return (
    <Container>
      <Grid
        container
        direction="column"
        spacing={8}
        justify="space-around"
        xs={12}
        alignItems="center"
        className={classes.outerGridStyle}
      >
        <Grid item>
          <Grid
            container
            direction="row"
            spacing={8}
            justify="space-around"
            alignItems="center"
          >
            {project_cards}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Projects;