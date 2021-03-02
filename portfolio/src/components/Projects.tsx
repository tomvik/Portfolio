import { Container, Grid } from "@material-ui/core";
import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  outerGridStyle: {
    marginTop: "5px",
    marginBottom: "5px",
    marginLeft: "5px",
  },
});

const Projects = () => {
  const classes = useStyles();
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
            <Grid item>
              <ProjectCard
                heading="What is Git?"
                description="Git git git igt is a distributed version control system. Every dev has a working copy of the code and..."
                date="01.March.2021"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png"
              />
            </Grid>
            <Grid item>
              <ProjectCard
                heading="What is Git?"
                description="Git git git igt is a distributed version control system. Every dev has a working copy of the code and..."
                date="02.March.2021"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png"
              />
            </Grid>
            <Grid item>
              <ProjectCard
                heading="What is Git?"
                description="Git git git igt is a distributed version control system. Every dev has a working copy of the code and..."
                date="022.March.2021"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png"
              />
            </Grid>
            <Grid item>
              <ProjectCard
                heading="What is Git?"
                description="Git git git igt is a distributed version control system. Every dev has a working copy of the code and..."
                date="03.March.2021"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png"
              />
            </Grid>
            <Grid item>
              <ProjectCard
                heading="What is Git?"
                description="Git git git igt is a distributed version control system. Every dev has a working copy of the code and..."
                date="04.March.2021"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Projects;
