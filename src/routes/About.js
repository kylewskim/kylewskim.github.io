import React from 'react';
import Grid from '@mui/material/Grid';
import './About.css';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div className='About'>
            <Grid container className='nav-grid-container' spacing={8} direction='row-reverse' justifyContent='flex-end' alignItems='flex-end'>
                <Grid className='name-wooseongkim' item xs={12} sm={6}>
                    <text className='text-name-wooseongkim'> Wooseong Kim </text> <br /> <text className='ux-designer'> UX Designer </text>
                </Grid>
                <Grid item xs={12} sm={6} justifyContent='flex-end' alignItems='flex-end'>
                    <Grid container className='nav-selection' spacing={1} direction='row' justifyContent='flex-end' alignItems='flex-end'>
                        <Grid className='nav_content' item xs={6}> <Link to='/' style={{ textDecoration: 'none' , color: 'black'}}> Project </Link> </Grid> 
                        <Grid className='nav_content' item xs={6}> <Link to='/About' style={{ textDecoration: 'line-through' , color: 'black' }}> About / CV </Link> </Grid> 
                    </Grid>
                </Grid>   
            </Grid>

            <Grid container className='item-grid-container' spacing={8} rowSpacing={7.5} direction='row' justify='flex-start' alignItems='flex-start' style={{marginTop: 100, marginBottom: 100}}>
                <Grid className='about' item xs={12} sm={6}>
                    About
                </Grid>
                <Grid item xs={12} sm={6}>
                    About
                </Grid>
            </Grid>
        </div>
    )
}

export default About;