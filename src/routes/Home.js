import React from 'react';
import Grid from '@mui/material/Grid';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='Home'>
            <Grid container className='grid-container' spacing={4} direction='row-reverse' justify='flex-start' alignItems='flex-start'>
                <Grid item xs={6} sm={6}>
                    <img className="nav_bar" src={process.env.PUBLIC_URL + '/assets/Home/home_gradation.png'} alt="nav_gradation"/>
                </Grid>
                <Grid className='name-wooseongkim'item xs={12} sm={6}>
                    <text> Wooseong Kim </text> <br /> <text className='ux-designer'> UX Designer </text>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Grid container className='nav-selection' spacing={1} direction='row' justify='flex-start' alignItems='flex-start'>
                        <Grid className='nav_content' item xs={6}> <Link to='/' style={{ textDecoration: 'line-through' , color: 'black' }}> Project </Link> </Grid> 
                        <Grid className='nav_content' item xs={6}> <Link to='/About' style={{ textDecoration: 'none' , color: 'black' }}> About </Link> </Grid> 
                    </Grid>
                </Grid>   
            </Grid>

            <Grid container className='grid-container'  spacing={4} rowSpacing={15} direction='row' justify='flex-start' alignItems='flex-start' style={{marginTop: 50, marginBottom: 180}}>
                    <Grid  item  xs={12} sm={6}>
                        <Link to='/bright' className='link-item'>
                        <div>
                            <img className="master-image" src={process.env.PUBLIC_URL + '/'} alt="master of bright" style={{marginTop: 14}}/>
                            <p className='text-item-name'>BRIGHT</p>
                            <p className='text-item-name-sub'>2021, Financial Service</p>
                        </div>
                        </Link>
                    </Grid>
            </Grid>
        </div>
    )
}

export default Home;