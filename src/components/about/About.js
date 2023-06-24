import React from 'react';
import './about.css';
import image from '../../assets/images/p.jpg'



import { BsInstagram ,BsLinkedin,BsGithub} from "react-icons/bs";

const About = () => {

  return (
    <section className="about">
      <div className="container">
        <h2 className="section-title"></h2>
        <div className="about-content">

        <div className="about-image">
            <img
              src={image}
              alt="Profile"
              className="profile-image" />
          </div>
          <div className="about-text">
            <h3 className="sub-heading">Hi, I'm Pankaj</h3>

          
            <p> I'm a Full Stack Developer.
            <span class="wave">👋</span>


            </p>

<ul>
  <li> ☕  Fueled by coffee</li>
  <li>🌎  based in the India</li>
  <li>💼  Front-End developer at Kams e Services</li>
  <li>📧  pankajsingh0592@gmail.com</li>

</ul>

            <div className='social-icon'>
              <a href='#' alt="" class="hover-fx">  <BsInstagram /></a>
                <a href='' alt=""><BsLinkedin/></a>
               <a href='' alt=""> <BsGithub/></a>

              </div>

          </div>

         
        </div>
      </div>
    </section>





  );
}




export default About;
