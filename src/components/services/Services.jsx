import './services.css'
import React from 'react'

import {BiCheck} from 'react-icons/bi'

function Services() {
  return (
    <section id='services'>

      <h5>Academics - Experience - Certificates</h5>
      <h2>My Journey</h2>

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


        {/* EXPERIENCE */}
        <article className='service'>
          <div className='service_head'>
            <h3>Experience</h3>
          </div>
        
          <ul className='service_list'>
            <li>

              <p className='service_decription' >Cargill India -  Technical Management Trainee</p>
              <li>Duration  -  September 2020  to June 2021</li>
              <li>Department - Project Management</li>
              <li>Description</li>
                <ol className='service_list-items'>
                  <li>1. Worked on Brown Field Project - Interesterification plant</li>
                  <li>2. Site Management</li>
                  <li>3. Inventory Management</li>
                  <li>4. Preparing Safety and Incidence Reports </li>
                  <li>5. Design Discussion and Progress Reporting</li>
                  <li>6. Induction of contrators inside the plant</li>
                </ol>

              

            </li>
            <li>
             
              <p className='service_decription'>ZS Associates - Decision Analytics Associate</p>
              <li>Duration  -  June 2021  to March 2022</li>
              <li>Department - Forecasting Analytics</li>
              <li>Description</li>
                <ol className='service_list-items'>
                  <li>1. Worked on 4 inline brands -Somatuline , Decapeptyl , Dysport , Cabometyx   </li>
                  <li>2. Built forecasting models using Ms- Excel , Excel VBA , Python  for backend coding and analytics</li>
                  <li>3. Upgraded Existing Models</li>
                  <li>4. Performed Ad-Hoc tasks such as data visualisation and data analysis </li>
                  <li>5. Making Illustrative Presentation for client</li>
                  <li>6. Gave KTs to newly inducted team members on the existing models</li>
                   
                </ol>

            </li>

          </ul>
        </article>
        {/*END OF EXPERIENCE*/}

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
                  <li>2. Solved more than 590 DSA problems on the platform</li>
                  <li>3. Solved more than 200 DSA problems on LeetCode</li>
                  <li>4. Solved more than 250 DSA problems on GeeksForGeeks</li>
                  <li>5. Learned Fundamentals of Spring Framework</li>
                  <li>6. Passed Expert Mock interviews on Adnanced DSA and CS Fundamentals taken by Industry Experts</li>
                </ol>

            </li>

          </ul>
        </article>
        {/*END OF CERTIFICATES*/}



      </div>

    </section>
  )
}

export default Services