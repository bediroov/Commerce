import React, { useContext } from 'react'
import Singlecard from './Singlecard'
import ProductContext from '../context/ProductContext'
import { Col, Container, Row } from 'react-bootstrap'


const Sectiontwo = () => {

    const [product] = useContext(ProductContext);


    const mapproduct = product.map((item) => {
        return (<Col sm={6} md={2}>
            <Singlecard
                id={item.id}
                name={item.name}
                url={item.url}
                key={item.id}
            />
        </Col>
        )
    })




   


    return (
        <section className='sectiontwo  '>
            <div className="container">

               <div className='module sb-banner sb-banner--feature_category '>
                <h5 className='block-title'>Featured Categories</h5>
                
               </div>




              <Container>
              < Row className='g-5 cards-row '>

{
    product.length > 0 ? <>{mapproduct.slice(0, 5)}</> : null
}


</Row>
              </Container>






            </div>

        </section>
    )
}

export default Sectiontwo
