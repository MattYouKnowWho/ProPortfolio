import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '../Card';

const Work = () => {
    let projects = [{
        title: 'example',
        github: 'https://github.com/',
        heroku: 'https://dashbaord.heroku.com/',
        image: 'https://images.unsplash.com/photo-1524168948265-8f79ad8d4e33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    },
    {
        title: 'example',
        github: 'https://github.com/',
        heroku: 'https://dashbaord.heroku.com/',
        image: 'https://images.unsplash.com/photo-1524168948265-8f79ad8d4e33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    },
    {
        title: 'example',
        github: 'https://github.com/',
        heroku: 'https://dashbaord.heroku.com/',
        image: 'https://images.unsplash.com/photo-1524168948265-8f79ad8d4e33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    },
    {
        title: 'example',
        github: 'https://github.com/',
        heroku: 'https://dashbaord.heroku.com/',
        image: 'https://images.unsplash.com/photo-1524168948265-8f79ad8d4e33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    },
    {
        title: 'example',
        github: 'https://github.com/',
        heroku: 'https://dashbaord.heroku.com/',
        image: 'https://images.unsplash.com/photo-1524168948265-8f79ad8d4e33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    },
    {
        title: 'example',
        github: 'https://github.com/',
        heroku: 'https://dashbaord.heroku.com/',
        image: 'https://images.unsplash.com/photo-1524168948265-8f79ad8d4e33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    },
]



    return (
        <>
           <Grid container justifyContent="center">
        <h1>My projects</h1>
      </Grid>
      <Grid container spacing={4} padding={2} justifyContent="center">
        
        {projects.map(project => 
          <Grid item>
            <Card title={project.title} github={project.github} heroku={project.heroku} image={project.image} ></Card>
            </Grid>
          )}
        </Grid>
        </>
    );
};

export default Work;