import React from 'react';
import styles from './style.module.css'
import {Container,Row, Col, Figure} from 'react-bootstrap'
// import CategoryImgs from './CategoryImgs'
import ButtonComp from './common/ButtonComp';
function Categorycard({categories}) {
    console.log(categories)
    return (
        <Container md  >
        {
            
             (categories)?  categories.map((cat,index) =>{
                return (index % 2)? (
                    (cat.imageUrl)? (<Row className={"shadow-sm "}>
                        <Col >
                            <Figure className={styles.valign +  styles.marginlow} >
                                <Figure.Image
                                width={350}
                                height={100}
                                
                                
                                src={cat.imageUrl}
                                />
                            </Figure>
                        </Col>
                        <Col  className="d-flex align-items-center justify-content-center">
                        <div className={styles.flexcol}>
                            <h3 className={`d-flex align-items-center justify-content-center ${styles.catHead}`} >{cat.name}</h3>
                            <div className="d-flex align-items-center justify-content-center">
                                {cat.description}
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                            <ButtonComp type='button' >
                                Explore {cat.name}
                            </ButtonComp>
                            </div>
                        </div>
                        </Col>
                    </Row>) : ''):((cat.imageUrl)?
                        <Row className={"shadow-sm "}>
                        <Col  className="d-flex align-items-center justify-content-center"><div  ><h3 className={`d-flex align-items-center justify-content-center ${styles.catHead}`} >{cat.name}</h3>
                            <div className="d-flex align-items-center justify-content-center">
                                {cat.description}
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                            <ButtonComp type='button' >
                                Explore {cat.name}
                            </ButtonComp>
                            </div>
                        </div>
                        </Col>
                        <Col >
                            <Figure className={styles.valign +  styles.marginlow} >
                                <Figure.Image
                                width={350}
                                height={100}
                                
                                
                                src={cat.imageUrl}
                                />
                            </Figure>
                        </Col>
                    </Row>:''
                    )
            }):''
        }

        </Container>
        
)
}
export default Categorycard;