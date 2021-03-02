import { Container, Grid } from "@material-ui/core";
import React from "react";
import BlogCardDemo from "./ProjectCard/ProjectCard";
import { makeStyles } from "@material-ui/core";


const Projects = () => {
  return (
    <Grid
      container
      direction="column"
      spacing={6}
      justify="space-around"
      md={12}
      alignItems="center"
    >
      <Grid item>
        <Grid
          container
          direction="row"
          spacing={6}
          justify="space-around"
          alignItems="center"
        >
          <Grid item>
            <BlogCardDemo
              heading='What is Git?'
              description='Git git git igt is a distributed version control system. Every dev has a working copy of the code and...'
              date='01.March.2021'
              image='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png'
            />
          </Grid>
          <Grid item>
            <BlogCardDemo
              heading='What is Git?'
              description='Git git git igt is a distributed version control system. Every dev has a working copy of the code and...'
              date='02.March.2021'
              image='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png'
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="row"
          spacing={6}
          justify="space-around"
          alignItems="center"
        >
          <Grid item>
            <BlogCardDemo
              heading='What is Git?'
              description='Git git git igt is a distributed version control system. Every dev has a working copy of the code and...'
              date='03.March.2021'
              image='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png'
            />
          </Grid>
          <Grid item>
            <BlogCardDemo
              heading='What is Git?'
              description='Git git git igt is a distributed version control system. Every dev has a working copy of the code and...'
              date='04.March.2021'
              image='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png'
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    /*     <Grid
          container
          spacing={8}
          justify="center"
          md={12}
          alignItems="center"
          direction="column"
        >
          <Grid item>
            <Grid item>
              <BlogCardDemo
                heading='What is Git?'
                description='Git git git igt is a distributed version control system. Every dev has a working copy of the code and...'
                date='01.March.2021'
                image='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png'
              />
            </Grid>
            <br></br>
            <Grid item>
              <BlogCardDemo
                heading='What is Git?'
                description='Git git git igt is a distributed version control system. Every dev has a working copy of the code and...'
                date='02.March.2021'
                image='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png'
              />
            </Grid>
          </Grid>
    
          <Grid item>
            <Grid item>
              <BlogCardDemo
                heading='What is Git?'
                description='Git git git igt is a distributed version control system. Every dev has a working copy of the code and...'
                date='04.March.2021'
                image='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png'
              />
            </Grid>
            <br></br>
            <Grid item>
              <BlogCardDemo
                heading='What is Git?'
                description='Git git git igt is a distributed version control system. Every dev has a working copy of the code and...'
                date='05.March.2021'
                image='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png'
              />
            </Grid>
          </Grid>
    
        </Grid> */
  );
};

export default Projects;
