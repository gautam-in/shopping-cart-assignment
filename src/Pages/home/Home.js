import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './Home.css';
import { Button, Grid } from '@material-ui/core';
import cardSectionImage1 from '../../images/category/fruits.png';
import listofCategoriesMock from '../../server/categories/index.get.json';
import HomeCarousel from '../../components/homecarousel/HomeCarousel';



function Home() {
    return (
            <div>
              <Header />
              <section className='contentWrapper'>
              <section className="homewrapper">
                   <div className="subwrapper">
                      <section className="homeslider">
                        <HomeCarousel />
                      </section>
                      <div className='homeCatList'>
                      {listofCategoriesMock.map((item, inde) => {
                        return (
                          <React.Fragment>  
                            <div className="homepagecardsection">
                                <Grid container spacing={2}>
                                  <Grid item xs={4}>
                                  <div class="carsdescriptionimage">
                                    <img src={item.imageUrl} alt="Cat - images" />
                                  </div>
                                  </Grid>
                                  <Grid item xs={8}>
                                    <div class="carsdescriptiontitle">
                                        <h4>{item.name}</h4>
                                        <p>{item.description}</p>
                                        <Button className='btn-primary'>
                                            Explore {item.name}
                                        </Button>
                                    </div>
                                  </Grid>
                                </Grid>
                              </div>
                          </React.Fragment>
                        )
                      })}
                      </div>
                   </div>
                 </section>
              </section>
              <Footer />

            </div>
      )
  }

export default Home;
