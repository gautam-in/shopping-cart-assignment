import React, { useEffect, useState } from "react";
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Grid } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';
const useStyles = makeStyles((theme)=>({
    root: {
        minWidth: 275,
        textAlign:'center'
    },
    imageWidth:{
        [theme.breakpoints.down('xs')]: {
            width: '130px',
            height:'150px'
          }
    },
    btnWidth:{
        [theme.breakpoints.down('xs')]: {
        width:'130px'
          }
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}));

const Home = () => {
    const [bannerData, setBannerData] = useState([]);
    const [categoryData, setCategoryData] = useState([]);
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        axios.get(`http://localhost:3000/banners`)
            .then(res => {
                const banners = res.data;
                setBannerData(banners)
            })
        axios.get(`http://localhost:3000/categories`)
            .then(res => {
                const categories = res.data;
                setCategoryData(categories)
            })
    }, []);
    /* click on exploring category */
    const handleExplore = (ev,items)=>{
        dispatch({ type: 'EXPLORE_CATEGORY', payload: items.id });
        history.push('/productListPage')
    }
    return (
        <React.Fragment>
            <Header/>
            <div>
                <Carousel>
                    {bannerData && bannerData.map((items,index) => {
                        return (
                            <div key={index}>
                                <img src={items.bannerImageUrl} />
                            </div>
                        )
                    })}
                </Carousel>
            </div>

            <div>
                {categoryData && categoryData.map((datas,index) => {
                    if(index%2==0){
                        return (
                            <React.Fragment key={index}>
                                <Card className={classes.root}>
                                    <CardContent>
                                        <Grid container>
                                            <Grid item xs={6} sm={6} md={6}>
                                                <img className={classes.imageWidth} src={datas.imageUrl} width="300" />
                                            </Grid>
                                            <Grid item xs={6} sm={6} md={6}>
                                                <p>{datas.name}</p>
                                                <p>{datas.description}</p>
                                                <Button className={classes.btnWidth} size="small" variant="contained" color="secondary" onClick={(ev)=>handleExplore(ev,datas)}>
                                                   Explore {datas.key}
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
    
                                </Card>
    
    
                            </React.Fragment>
                        )
                    }
                    else{
                        return (
                            <React.Fragment key={index}>
                                <Card className={classes.root}>
                                    <CardContent>
                                        <Grid container>
                                        <Grid item xs={6} sm={6} md={6}>
                                                <p>{datas.name}</p>
                                                <p>{datas.description}</p>
                                                <Button className={classes.btnWidth} size="small" variant="contained" color="secondary" onClick={(ev)=>handleExplore(ev,datas)}>
                                                   Explore {datas.key}
                                                </Button>
                                            </Grid>
                                            <Grid item xs={6} sm={6} md={6}>
                                                <img className={classes.imageWidth} src={datas.imageUrl} width="300" />
                                            </Grid>
                                        
                                        </Grid>
                                    </CardContent>
    
                                </Card>
    
    
                            </React.Fragment>
                        )
                    }
                })}
            </div>
        </React.Fragment>
    )
}
export default Home;
