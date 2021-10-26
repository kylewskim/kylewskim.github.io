import React from 'react';
import Grid from '@mui/material/Grid';
import './About.css';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div className='About'>
            <Grid container className='nav-grid-container' spacing={6} direction='row' justify='flex-end' alignItems='flex-end'>
                <Grid className='name-wooseongkim'item xs={12} sm={6}>
                    <text className='text-name-wooseongkim'> Wooseong Kim </text> <br /> <text className='ux-designer'> UX Designer </text>
                </Grid>
                <Grid item xs={12} sm={6} justify='flex-end' alignItems='flex-end'>
                    <Grid container className='nav-selection' spacing={1} direction='row' justify='flex-end' alignItems='flex-end'>
                        <Grid className='nav_content' item xs={6}> <Link to='/' style={{ textDecoration: 'none' , color: 'black' }}> Project </Link> </Grid> 
                        <Grid className='nav_content' item xs={6}> <Link to='/About' style={{ textDecoration: 'line-through' , color: 'black' }}> About / CV </Link> </Grid> 
                    </Grid>
                </Grid>   
            </Grid>

            <Grid container className='about-grid-container' spacing={6} rowSpacing={7.5} direction='row' justify='flex-start' alignItems='flex-start' style={{marginTop: 100, marginBottom: 100}}>
                <Grid className='title-about' item xs={12} sm={6}>
                    <div>
                        <p className='text-about-title'> About </p>
                        <p>
                        <Link to='/bright' className='text-about-link' style={{ textDecoration: 'underline' , color: 'gray' }}>
                        Download pdf version
                        </Link>
                        </p>
                        <p>
                        <Link to='/bright' className='text-about-link' style={{ textDecoration: 'underline' , color: 'gray' }}>
                        Perspectives on Design
                        </Link>
                        </p>
                    </div>
                </Grid>
                <Grid item className="text-about" xs={12} sm={5}>
                    <p>
                    Wooseong Kim is UX Designer based in South Korea. He is a senior Industrial Design student with computer science and entrepreneurs minor from UNIST, South Korea. 
                    Wooseong Kim is UX Designer based in South Korea. He is a senior Industrial Design student with computer science and entrepreneurs minor from UNIST, South Korea. 
                    Wooseong Kim is UX Designer based in South Korea. He is a senior Industrial Design student with computer science and entrepreneurs minor from UNIST, South Korea. 
                    Wooseong Kim is UX Designer based in South Korea. He is a senior Industrial Design student with computer science and entrepreneurs minor from UNIST, South Korea. 
                    Wooseong Kim is UX Designer based in South Korea. He is a senior Industrial Design student with computer science and entrepreneurs minor from UNIST, South Korea. 
                    </p>
                    <p>
                    Wooseong Kim is UX Designer based in South Korea. He is a senior Industrial Design student with computer science and entrepreneurs minor from UNIST, South Korea. 
                    Wooseong Kim is UX Designer based in South Korea. He is a senior Industrial Design student with computer science and entrepreneurs minor from UNIST, South Korea. 
                    Wooseong Kim is UX Designer based in South Korea. He is a senior Industrial Design student with computer science and entrepreneurs minor from UNIST, South Korea. 
                    Wooseong Kim is UX Designer based in South Korea. He is a senior Industrial Design student with computer science and entrepreneurs minor from UNIST, South Korea. 
                    Wooseong Kim is UX Designer based in South Korea. He is a senior Industrial Design student with computer science and entrepreneurs minor from UNIST, South Korea. 
                    </p>
                </Grid>
            </Grid>

            <Grid container className='link-grid-container' spacing={1} direction='row' justify='flex-start' alignItems='flex-start' style={{marginTop: 100, marginBottom: 15}}>
                <Grid item className='link-wooseongkim' xs={3} sm={1} style={{ textDecoration: 'underline' , color: 'black'}}> <a href="https://www.linkedin.com/in/wooseong-kim-53aa23191/"> Linkedin </a> </Grid>
                <Grid item className='link-wooseongkim' xs={3} sm={1} style={{ textDecoration: 'underline' , color: 'black'}}> <a href="https://medium.com/@kylewskim"> Medium </a> </Grid>
                <Grid item className='link-wooseongkim' xs={3} sm={1} style={{ textDecoration: 'underline' , color: 'black'}}> <a href="mailto:kylewskim@gmail.com"> Email </a> </Grid>
            </Grid>

            <Grid container className='footer-grid-container' spacing={6} direction='row' justify='flex-start' alignItems='flex-start' style={{marginTop: 15, marginBottom: 50}}> 
                <Grid item className='copyright-wooseongkim' xs={12} sm={6} justify='flex-start' alignItems='flex-start'>
                    <p className='text-copyright-wooseongkim'>
                    © 2021 WOOSEONG KIM ALL RIGHTS RESERVED
                    </p>
                </Grid>
            </Grid>
        </div>
    )
}

export default About;