import './portfolio.css' 
import React from 'react'
import IMG1 from '../../assets/proj1.png'
import IMG2 from '../../assets/proj2hospital.png'
import IMG3 from '../../assets/project-sample.png'
import IMG4 from '../../assets/shopit.png'
import IMG5 from '../../assets/todo.png'
import IMG6 from '../../assets/flappy.png'
import IMG7 from '../../assets/50p.png'




const data = [

  {
    id: 1,
    image : IMG1 , 
    title:'SpringBoot API Project', 
    title2:'Blogging App RestFul API',
    github : 'https://github.com/TechnoDiktator/SpringBootBloggingAPIRESTFUL',
    demo: 'http://65.1.105.145/swagger-ui/index.html'

  },

////   http://3.111.83.212:8080/HOSPITAL_DEPLOYMENT_APP/
// https://github.com/TechnoDiktator/Resume_Projects/tree/main/Hospital%20Site
  {
    id: 2,
    image : IMG2 ,
    title:'JSP Servlet Webapp Project', 
    title2:'Hospital Management App',
    github : 'https://github.com/TechnoDiktator/Resume_Projects/tree/main/Hospital%20Site',
    demo: 'http://3.111.83.212:8080/HOSPITAL_DEPLOYMENT_APP/'

  },
  
  {
    id: 3,
    image : IMG3 , 
    title:'SpringBoot React.js Project',
    title2:'Coming Soon',
    github : 'https://github.com/TechnoDiktator/Resume_Projects/tree/main/',
    demo: ''

  },
  
  {
    id: 4,
    image : IMG4 , 
    title:'Python Django Project',
    title2:'DJango Ecommerce Project',
    github : 'https://github.com/TechnoDiktator/Django-Ecommerce-Project',
    demo: ''

  },

  {
    id: 5,
    image : IMG5 , 
    title:'Python Django Project',
    title2:'DJango ToDo List Project',
    github : 'https://github.com/TechnoDiktator/TODO-APP',
    demo: ''

  },



  {
    id: 6,
    image : IMG6 , 
    title:'Game Developement',
    title2:'Flappy Bird Clone',
    github : 'https://github.com/TechnoDiktator/FlappyBird-Game-Clone-Project',
    demo: ''

  },


  {
    id: 7,
    image : IMG7 , 
    title:'Front End Marathon',
    title2:'50 frontend projects in 20 days',
    github : 'https://github.com/TechnoDiktator/50-Days-50-Frontend-Projects',
    demo: ''

  },

  {
    id: 8,
    image : IMG3 , 
    title:'SpringBoot Microservices Project',
    title2:'Moview Theatre Microservices App (coming soon)',
    github : 'https://github.com/TechnoDiktator',
    demo: ''

  },

  {
    id: 9,
    image : IMG3 , 
    title:'SpringBoot FullStack Project',
    title2:'Coming soon',
    github : 'https://github.com/TechnoDiktator',
    demo: ''

  },


]











function Portfolio() {
  return (
    <section id='portfolio'>

      <h5>My Projects and Profiles</h5>
      <h2>Portfolio</h2>


      <div className='container portfolio__container'>

      
        {
          data.map(({id, image , title , title2 , github , demo})=>{

            return(

              <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={IMG4}/>
              </div>
              <h3>{title}</h3>
              <h2>{title2}</h2>
    
              <div className="portfolio__item-cta">
                <a href={demo} target='_blank' className='btn'>See Live</a>
                <a href= {github} target='_blank' className='btn btn-primary'>Source Code</a>
              </div>
    
                
              </article>

            )

          })
        }
          

      </div>


    </section>
  )
}


//   http://3.111.83.212:8080/HOSPITAL_DEPLOYMENT_APP/
// https://github.com/TechnoDiktator/Resume_Projects/tree/main/Hospital%20Site


// http://65.1.105.145/swagger-ui/index.html
// https://github.com/TechnoDiktator/Resume_Projects/tree/main/BlogApi%20Source%20Code





export default Portfolio