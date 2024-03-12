import { useEffect } from 'react';
import React from 'react'
import './section.css'

export default function Section() {

 
  return (
    <div  >
      
      <section  id="grow" className="grow-with-us">

        <div className='motto'>
            <h3>WHAT WE DO??</h3>
        </div>
        {/* this base is a 2 by 3 grid to contain the blocks of the services that we are going ot offer.  */}
        <div className="base">
        <div className="box box-1">
  <h4 style={{color : 'slategrey'}}>Unlock Your Potential</h4>
  <p>Discover limitless possibilities with our comprehensive solutions tailored to fuel your business growth.</p>

</div>
<div className="box box-1">
  <h4 style={{color : 'lightblue'}}>Ignite Your Success</h4>
  <p>Empower your business with the tools and strategies needed to thrive in today's competitive landscape.</p>
</div>
<div className="box box-1">
  <h4 style={{color : 'orangered'}}>Accelerate Your Growth</h4>
  <p>Experience unparalleled support and expertise as you embark on a journey to expand and conquer new horizons.</p>
</div>
<div className="box box-1" >
  <h4 style={{color : 'green'}}>Transform Your Future</h4>
  <p>Unlock the full potential of your business and pave the way for lasting success with our comprehensive solutions.</p>
</div>

        </div>
      </section>

    </div>
  )
}
