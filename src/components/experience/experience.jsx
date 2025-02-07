import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'



const experience = () => {
  return (
    <section id='experience'>

      <h5>What Skills I have</h5>
      <h2>My Expertise</h2>

      <div className='container experience__container'>

        <div className='experience__frontend'>
            <h3>Frontend Developement</h3>
            <div className='experience__content'>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>

                <div>                
                <h4>HTML</h4>
                <small className='text-light'>Intermediate</small></div>

              </article>
              
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                
                <div>                
                <h4>CSS</h4>
                <small className='text-light'>Basic</small></div>

              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                
                <div>                
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small></div>

              </article>


              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                
                <div>                
                <h4>TypeScript</h4>
                <small className='text-light'>Intermediate</small></div>

              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                
                <div>                
                <h4>React</h4>
                <small className='text-light'>Basic</small></div>

              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                
                <div><h4>BootStrap</h4>
                <small className='text-light'>Intermediate</small></div>
                

              </article>

            </div>
        </div>

        <div className='experience__backend'>
        <h3>Backend Developement</h3>

            <div className='experience__content'>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                
                <div><h4>Golang</h4>
                <small className='text-light'>Advanced</small></div>
                

              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                
                <div><h4>Gin</h4>
                <small className='text-light'>Advanced</small></div>
                

              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                
                <div><h4>Java Core</h4>
                <small className='text-light'>Advanced</small></div>
                

              </article>
              
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                
                <div>                
                <h4>Python</h4>
                <small className='text-light'>Advanced</small></div>

              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                
                <div>                
                <h4>Django Framework</h4>
                <small className='text-light'>Advanced</small></div>

              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                
                <div>                
                <h4>jsp servlet</h4>
                <small className='text-light'>Intermediate</small></div>

              </article>



              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                
                <div>                
                <h4>SpringBoot</h4>
                <small className='text-light'>Intermediate</small></div>

              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div><h4>MySQL (JDBC , Hibernate)</h4>
                <small className='text-light'>Intermediate</small></div>           
              </article>


              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>CS Fundamentals (DSA , OOPS , CN , OS)</h4>
                <small className='text-light'>Advanced</small>
                </div>
                </article>


                <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div><h4>Tools and Dependencies (Redis , Celery , RabbitMQ ,MQTT , Graphql , Postgres , Hasura , Signoz , Prometheus)</h4>
                <small className='text-light'>Intermediate</small></div>           
                </article>


            </div>

        </div>


      </div>

    </section>
  )
}

export default experience