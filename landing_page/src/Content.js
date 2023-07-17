import React from 'react'
import cup from './images/images/img1.png'
import thumb1 from './images/images/facebook.png'
import thumb2 from './images/images/instagram.png'
import thumb3 from './images/images/twitter.png'
const Content = () => {
  return (
    <main>
        <div className='textbox'>
            <h1>It's not just a coffee <br/> It's <span>Starbucks</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam hic dolorum consequatur iure ipsum explicabo molestias possimus eligendi recusandae, eius, ratione, soluta voluptas? Distinctio excepturi optio cupiditate commodi. Sint, enim?</p>        
            <a href="/">Learn More</a>
        </div>
        <div className='imgbox'>
            <img src={cup} alt="" />
        </div>

        <div className='thumb'>
            <img src={thumb1} alt="" />
            <img src={thumb2} alt="" />
            <img src={thumb3} alt="" />
        </div>
    </main>
  )
}

export default Content