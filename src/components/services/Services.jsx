import './services.css'
import React from 'react'

import {BiCheck} from 'react-icons/bi'

function Services() {
  return (
    <section id='services'>
      <h5>Experience - Academics - Certificates</h5>
      <h2>My Journey</h2>


      <div className='container services__container'>
        {/* EXPERIENCE */}



        <article className='service'>
          <div className='service_head'>
            <h3>ZS Associates - Decision Analytics Associate</h3>
          </div>

          <ul className='service_list'>
            <li>Duration - June 2021 to March 2022</li>
            <li>Department - Data Analytics</li>
            <li>Description</li>
            <ol className='service_list-items'>
              <li>1. Developed data analytics dashboards using Python, Pandas, and Power BI to forecast pharmaceutical sales trends.</li>
              <li>2. Provided decision-making support for a major biopharmaceutical client (JPSEN).</li>
              <li>3. Built predictive models and visualized insights to enhance business strategy.</li>
              <li>4. Helped streamline reporting and cross-functional collaboration through data-driven insights.</li>
            </ol>
          </ul>
        </article>


        <article className='service'>
          <div className='service_head'>
            <h3>StockFusion Private Limited - Software Engineer (Fullstack)</h3>
          </div>
          
          <ul className='service_list'>
            <li>Duration - July 2023 to Present</li>
            <li>Department - Software Development</li>
            <li>Description</li>
            <ol className='service_list-items'>
              <li>1. Developed and maintained asynchronous proxy servers using Django, Redis, and PostgreSQL for parking systems.</li>
              <li>2. Refactored synchronous code to asynchronous, reducing processing time by 40%.</li>
              <li>3. Scaled transactions by 100%, handling up to 400 sites with microservices.</li>
              <li>4. Automated system health checks using Ansible and OpenTelemetry, reducing downtime by 50%.</li>
              <li>5. Built an IoT-based RFID parking system using Golang, RabbitMQ, and SQL, reducing hardware cost ,  deployment time by 400%.</li>
              <li>6. Developed MQTT-based messaging acknowledgment to enhance device communication across All sensors at a parking site.</li>
              <li>7. Created real-time dashboards and analytics using GraphQL, React, and Hasura for monitoring and reporting.</li>
              <li>8. Provided technical support and wrote SOPs to ensure smooth deployments.</li>
            </ol>
          </ul>
        </article>


        <article className='service'>
          <div className='service_head'>
            <h3>Cargill India - Technical Management Trainee</h3>
          </div>

          <ul className='service_list'>
            <li>Duration - September 2020 to June 2021</li>
            <li>Department - Project Management</li>
            <li>Description</li>
            <ol className='service_list-items'>
              <li>1. Worked on a Brownfield project – Interesterification plant installation and commissioning.</li>
              <li>2. Managed on-site operations and ensured compliance with safety standards.</li>
              <li>3. Handled inventory management to ensure smooth workflow.</li>
              <li>4. Prepared safety and incident reports to maintain compliance.</li>
              <li>5. Participated in design discussions and provided progress reports to stakeholders.</li>
              <li>6. Supervised contractor induction and ensured safe operations inside the plant.</li>
            </ol>
          </ul>
        </article>


        {/*END OF EXPERIENCE*/}


      </div>
      
      <br />
      <br />
      <br />

      <div className='container services__container'>
        
        {/* ACADEMICS */}
        <article className='service'>
          <div className='service_head'>
            <h3>Academics</h3>
          </div>
        
          <ul className='service_list'>
            <li>
          
              <p className='service_decription'>High School -  Delhi public School Meerut (2013)</p>

              <ol className='service_list-items'>
                <li>1. CGPA - 9.2</li>
                <li>2. Board - CBSE</li>
              </ol>

            </li>
            
            <li>
     
              <p className='service_decription'  >Senior Secondry School - Delhi Public School Meerut (2015)</p>
              <ol className='service_list-items'>
                <li>1. Percentage - 90.4</li>
                <li>2. Board - CBSE</li>
              </ol>

            </li>
            
            <li>
            
              <p className='service_decription' >Graduate Degree - Harcourt Butler Technical University</p>
              
              <ol className='service_list-items'>
                <li>1. Branch - Mechanical Engineering</li>
                <li>2. Percentage - 74 %</li>
                <li>3. Soceity/Clubs -  AME ( Association of Mechanical Engg. ) , Debnexus (Debating) </li>
                <li>4. Internships - DLW (Diesel Locomotive Works Varanasi)</li>
              </ol>


            </li>
          </ul>
        </article>
        {/*END OF ACADEMICS*/}


        {/* CERTIFICATES */}
        <article className='service'>
          <div className='service_head'>
            <h3>Cerificates</h3>
          </div>
        
          <ul className='service_list'>
          <li>
            
              <p  className='service_decription' >Scaler Academy - Full Stack Developement Program</p>
              <li>Duration  -  January 2022 - Present</li>
              
              <li>Description</li>
                <ol className='service_list-items'>
                  <li>1. Course Work - OOPS , DSA , Java Core , Python Core , RDBMS , OS , CN </li>
                  <li>2. Certificates of expertise in SpringBoot , Systemdesign , DSA and OOPS from scaler academy</li>
                  <li>3. Solved more than 590 DSA problems on the platform</li>
                  <li>4. Solved more than 200 DSA problems on LeetCode</li>
                  <li>5. Solved more than 250 DSA problems on GeeksForGeeks</li>
                  <li>6. Learned Fundamentals of Spring Framework</li>
                  <li>7. Passed Expert Mock interviews on Adnanced DSA and CS Fundamentals taken by Industry Experts</li>
                </ol>

            </li>

          </ul>
        </article>
        {/*END OF CERTIFICATES*/}


      </div>

      <br />
      <br />



    </section>
  )
}

export default Services