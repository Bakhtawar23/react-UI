import React from 'react';
import { Carousel } from 'react-bootstrap'

export default function Bootstrapcarousel() {
  return (
    <div>
       <Carousel>
      <Carousel.Item>
       <div className="eden1">
         <img className="page1" src="./images/page1.jpg" alt="First slide"/>
         <Carousel.Caption>
           <h3 className='firsttext'>Welcome! First things first...</h3>
           <p className='firstpara'>You can always change them later.</p>
          <form>
           <label className='inputname1' align='left'>Full Name</label><br></br>
           <input type="text" className="Name1" placeholder='Steve Jobs' size='40'></input>
           </form>
           <form>
           <label className='inputname2' align='left'>Display Name</label><br></br>
           <input type="text" className="Name2" placeholder='Steve' size='40'></input>
           </form>
           <button className="btn">Create Workspace</button>
         </Carousel.Caption>
       </div>
      </Carousel.Item>

      <Carousel.Item>
      <div className='eden2'>
        <img className="page2" src="./images/page2.jpg" alt="Second slide"/>
        <Carousel.Caption>
          <h3 className='secondtext'>Let's set up a home for all your work</h3>
          <p className='secondpara'>You can always change them later.</p>
          <form>
           <label className='inputname3' align='left'>Workspace Name</label><br></br>
           <input type="text" className="Name3" placeholder='Eden' size='40'></input>
           </form>
           <form>
           <label className='inputname4' align='left'>Workspace URL <font color='grey'>(optional)</font></label><br></br>
           <input type="url" className="Name4" placeholder='www.eden.com/' size='40'></input>
           </form>
           <button className="btn">Create Workspace</button>
        </Carousel.Caption>
        </div>
      </Carousel.Item>

      <Carousel.Item>
      <div className='eden3'>
        <img className="page3" src="./images/page3.jpg" alt="Third slide"/>
        <Carousel.Caption>
          <h3 className='thirdtext'>How are you planning to use Eden?</h3>
          <p className='thirdpara'>We'll streamline your setup experience accordingly.</p>

          <div className='row'>
           <div className='info-column col-lg-6 col-md-6 col-sm-6 col-xs-6'>
              <div className='card1'>
                <div className='card-header'>
                 <h3>For myself</h3>
                </div>
      
               <div className='card-body'>
                 <p>Write better.</p>
                 <p>Think more clearly.</p>
                 <p>Stay Organized.</p>
               </div>
              </div>
            </div>
            <div className='info-column col-lg-6 col-md-6 col-sm-6 col-xs-6'>
             <div className='card2'>
               <div className='card-header'>
                 <h3>With my team</h3> 
               </div>
      
               <div className='card-body'>
                 <p>Wikis,docs,</p>
                 <p>tasks & projects,</p>
                 <p>all in one place.</p>
               </div>
             </div>
           </div>
          </div>
          <button className="btn">Create Workspace</button>
          
        </Carousel.Caption>
        </div>
      </Carousel.Item>

      <Carousel.Item>
      <div className='eden4'>
        <img className="page4" src="./images/page4.jpg" alt="Fourth slide"/>
        <Carousel.Caption>
          <h3 className='fourthtext'>Congratulations, Eden!</h3>
          <p className='fourthtext'>You have completed onboarding, you can start using the Eden!</p>
          <button className="btn">Launch Eden</button>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
