import React from 'react'
import data from '../data/Product'
import Singlecard from './Singlecard'


const Sectiontwo = () => {



    return (
        <section className='sectiontwo '>
            <div className="container">

                <div className="blog-title">
                    <h2 className='tag'>Featured Categories</h2>
                </div>

              
         {
            data.map((item)=>{
                return <Singlecard/>
            })
         }
            


            </div>

        </section>
    )
}

export default Sectiontwo
