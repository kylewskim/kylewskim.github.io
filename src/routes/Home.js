import React from 'react';
import Grid from '@mui/material/Grid';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='Home'>
            <Grid container className='nav-grid-container' spacing={6} direction='row' justify='flex-end' alignItems='flex-end'>
                <Grid className='name-wooseongkim'item xs={12} sm={6}>
                    <text className='text-name-wooseongkim'> Wooseong Kim </text> <br /> <text className='ux-designer'> UX Designer </text>
                </Grid>
                <Grid item xs={12} sm={6} justify='flex-end' alignItems='flex-end'>
                    <Grid container className='nav-selection' spacing={1} direction='row' justify='flex-end' alignItems='flex-end'>
                        <Grid className='nav_content' item xs={6}> <Link to='/' style={{ textDecoration: 'line-through' , color: 'black' }}> Project </Link> </Grid> 
                        <Grid className='nav_content' item xs={6}> <Link to='/About' style={{ textDecoration: 'none' , color: 'black' }}> About / CV </Link> </Grid> 
                    </Grid>
                </Grid>   
            </Grid>

            <Grid container className='item-grid-container' spacing={6} rowSpacing={7.5} direction='row' justify='flex-start' alignItems='flex-start' style={{marginTop: 100, marginBottom: 100}}>
                    <Grid  item className='frame-item' xs={12} sm={6}>
                        <Link to='/bright' className='link-item' style={{ textDecoration: 'none' , color: 'black' }}>
                        <div>
                            <img className="master-image" src={process.env.PUBLIC_URL + '/assets/Home/img1.png'} alt="master of bright" style={{marginTop: 10}}/>
                            <p className='text-project-name'> BRIGHT </p>
                            <p className='text-project-info'> 2021, Financial Service </p>
                        </div>
                        </Link>
                    </Grid>
                    <Grid  item className='frame-item' xs={12} sm={6}>
                        <Link to='/bright' className='link-item' style={{ textDecoration: 'none' , color: 'black' }}>
                        <div>
                            <img className="master-image" src={process.env.PUBLIC_URL + '/assets/Home/img2.png'} alt="master of bright" style={{marginTop: 10}}/>
                            <p className='text-project-name'> BRIGHT </p>
                            <p className='text-project-info'> 2021, Financial Service </p>
                        </div>
                        </Link>
                    </Grid>
                    <Grid  item className='frame-item' xs={12} sm={6}>
                        <Link to='/bright' className='link-item' style={{ textDecoration: 'none' , color: 'black' }}>
                        <div>
                            <img className="master-image" src={process.env.PUBLIC_URL + '/assets/Home/img1.png'} alt="master of bright" style={{marginTop: 10}}/>
                            <p className='text-project-name'> BRIGHT </p>
                            <p className='text-project-info'> 2021, Financial Service </p>
                        </div>
                        </Link>
                    </Grid>
            </Grid>

            <Grid container className='info-grid-container' spacing={6} direction='row' justify='flex-start' alignItems='flex-start' style={{marginTop: 350, marginBottom: 250}}>
                <Grid item className='info-wooseongkim' xs={9} sm={5}>
                    <p className='text-info-wooseongkim'>
                    Wooseong Kim is UX Designer based in South Korea. He is a senior Industrial Design student with computer science and entrepreneurs minor from UNIST, South Korea. 
                    </p>
                    <p className='text-info-wooseongkim'>
                    Wooseong Kim sincerely enjoys going through design process to solve the problem, especially helping people in needs with disorder or social structure by technical implementation. &nbsp;
                    <Link to='/bright' className='text-info-wooseongkim' style={{ textDecoration: 'underline' , color: 'black' }}>
                        To know more &#x2192;
                    </Link>
                    </p>
                </Grid>
            </Grid>

            <Grid container className='link-grid-container' spacing={1} direction='row' justify='flex-start' alignItems='flex-start' style={{marginTop: 100, marginBottom: 15}}>
                <Grid item className='link-wooseongkim' xs={3} sm={1}>Linkedin</Grid>
                <Grid item className='link-wooseongkim' xs={3} sm={1}>Medium</Grid>
                <Grid item className='link-wooseongkim' xs={3} sm={1}>Email</Grid>
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

export default Home;