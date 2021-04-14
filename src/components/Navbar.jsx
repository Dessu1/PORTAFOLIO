import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

const Navbar = () => {
  return (
    <div id='container-navbar'>
      <nav className='navbar'>
        <a href='#'>Sobre Mi</a>
        <a href='#project-1'>Proyectos</a>
        <a href='#container-skills'>Habilidades</a>
        <a href='#container-contact'>Contactame</a>
      </nav>

      <div className='content-navbar'>
        <div className='content-icon'>
          <img src='https://i.imgur.com/0W4iFfa.jpg' alt='avatar-icon' />
        </div>

        <div id='about-me' className='content-aboutme'>
          <span>!Hola!</span>
          <span>
            Me llamo Dessu y este es mi portafolio personal donde encontraras
            algunas cosas sobre mi
          </span>
          <span>!Espero que lo disfrutes!</span>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Navbar);
