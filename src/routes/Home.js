import React from 'react';
import Grid from '@mui/material/Grid';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <Grid container className='grid-container' spacing={4} direction='row' justify='flex-start' alignItems='flex-start'>
                    <Grid className='name-wooseongkim'item xs={12} sm={6}>
                    <text> Wooseong Kim </text> <br /> <text className='ux-designer'> UX Designer </text>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <img className="nav_bar" src={process.env.PUBLIC_URL + '/assets/Home/home_gradation.png'} alt="nav_gradation"/>
                    <Grid container className='nav-selection' spacing={1} direction='row' justify='flex-start' alignItems='flex-start'>
                        <Grid className='nav_content' item xs={12} sm={6}> Project </Grid>
                        <Grid className='nav_content' item xs={12} sm={6}> About </Grid>
                    </Grid>   
                </Grid>
        </Grid>
    )
}

export default Home;