import React from 'react';
import Grid from '@mui/material/Grid';
import './About.css';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div className='About'>
            <Grid container className='nav-grid-container' spacing={8} direction='row-reverse' justify='flex-start' alignItems='flex-start'>
                <Grid item xs={12} sm={6}>
                    <img className="nav_bar" src={process.env.PUBLIC_URL + '/assets/Home/home_gradation.png'} alt="nav_gradation"/>
                </Grid>
                <Grid className='name-wooseongkim'item xs={12} sm={6}>
                    <text className='text-name-wooseongkim'> Wooseong Kim </text> <br /> <text className='ux-designer'> UX Designer </text>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Grid container className='nav-selection' id='nav-selection' spacing={1} direction='row' justify='flex-start' alignItems='flex-start'>
                        <Grid className='nav_content' item xs={6}> <Link to='/' style={{ textDecoration: 'none' , color: 'black' }}> Project </Link> </Grid> 
                        <Grid className='nav_content' item xs={6}> <Link to='/About' style={{ textDecoration: 'line-through' , color: 'black' }}> About / CV </Link> </Grid> 
                    </Grid>
                </Grid>   
            </Grid>
        </div>
    )
}

export default About;