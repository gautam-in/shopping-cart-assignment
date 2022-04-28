import React, { useState, useEffect, } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './ListofItem.css';
import { Button, Grid } from '@material-ui/core';
import listofCategoriesMock from '../../server/products/index.get.json';
import SideMenu from '../../components/sidemenu/SideMenu';
import ProgressIndicator from '../../components/progressIndficator/ProgressIndicator';



function ListofItem() {
  const [ listofCategories, setListofCategories] = useState(listofCategoriesMock);
  const [ selectedItems, setSelectedItems] = useState([]);
  const [ itemSelectedProgress, setItemSelectedProgress] = useState(false);                          
  const [ refreshComp, setRefreshComp ] = useState();



  const receivefilterCategorieds = (cat) => {
    setListofCategories(cat);
    console.log(cat);
  }

  const onSelectItem = (itemGet) => {
    return () => {
      setItemSelectedProgress(true);
      document.querySelector('body').style.overflow = 'hidden';
      selectedItems.push({...itemGet});
      setSelectedItems(selectedItems);
      // function setDataToLS() {      
      //   setSelectedItems(x);
      //   localStorage.setItem('seletedPrd', selectedItems);
      // }
      // function setSelectedItem(dataSet) {
      //   dataSet();
      // }
      // setSelectedItem(setDataToLS);
      setTimeout(() => {
        setItemSelectedProgress(false);
        document.querySelector('body').style.overflow = 'auto';
        localStorage.setItem('seletedPrd', JSON.stringify(selectedItems));
        setRefreshComp(Math.random());
      }, 800);
    }
   
  }

  useEffect(() => {
    setListofCategories(listofCategoriesMock);
  }, [refreshComp]);

    return (
            <div>
              <Header refreshComp={refreshComp} />
              <section className='contentWrapper'>
                <section className="pplwrapper">
                    <Grid container>
                      <Grid item xs={3} data-sact="catMenu" >
                        <SideMenu receivefilterCategorieds={receivefilterCategorieds}/>
                      </Grid>
                      <Grid item xs={9} data-sact="cat" >
                        <div class="pplwrapperCategories">
                        <Grid container>
                          {listofCategories.length > 0 ? listofCategories.map((item, index) => {
                            return (
                              <React.Fragment key={item.id}>
                                  <Grid item xs={3}>
                                    <div class="pplwrapperCategoriesCard">
                                      <div className='catItemCrdTitle'>
                                       <h6>{item.name}</h6>
                                      </div>
                                      <div className='catItemCrdWrapper'>
                                            <div className='catItemCrdLft'>
                                              <img src={item.imageURL} alt='item card' />
                                            </div>
                                            <div className='catItemCrdRgt'>
                                              <div className='catItemCard'>
                                                <p>{item.description}</p>
                                              </div>
                                              <div className='catItembutton'>
                                               <span data-price="price" >MRP Rs&nbsp; {item.price}</span> <Button className='btn-primary' onClick={onSelectItem(item)}> Buy Now <span data-price="price" >@ Rs.{item.price}</span>  </Button>
                                              </div>
                                            </div>
                                      </div>
                                    </div>
                                  </Grid>
                              </React.Fragment>
                            )
                          }) : <React.Fragment>
                            <div className='emptyCat'> <h4> Filtered Categories are no available! </h4> </div>
                            </React.Fragment>}
                            
                        </Grid>
                            
                        </div>
                      </Grid>
                    </Grid>
                </section>
              </section>
              <Footer />
              {itemSelectedProgress && <ProgressIndicator message={'Selecting...'} /> }
            </div>
      )
  }

export default ListofItem;
