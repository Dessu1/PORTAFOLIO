import React from "react";
import { Link, withRouter } from "react-router-dom";

const Projects = () => {
  return (
    <div id='container-projects'>
      <div className='content-projects'>
        <div className='container-aside'>
          <aside id='aside'>
            <h3 className='tittle'>Proyectos</h3>

            <nav className='indices'>
              <a href='#project-1'>Proyecto 1</a>
              <a href='#project-2'>Proyecto 2</a>
              <a href='#project-3'>Proyecto 3</a>
              <a href='#project-4'>Proyecto 4</a>
            </nav>
          </aside>
        </div>

        <div className='container-chika'>
          <a href='#'>
            <img src='https://i.imgur.com/Wh9cqBq.gif' alt='chika-dance' />
          </a>
        </div>

        <div className='container-project'>
          <div id='project-1' className='content-project'>
            <h2 className='tittle'>Proyecto 1</h2>
            <div className='container-span'>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia commodi officia alias in ut optio, quas enim obcaecati
                tempora? Magnam eligendi quae quaerat provident? Nemo,
                aspernatur libero? Non, eaque consequatur.
              </span>

              <div className='desc'>
                <span>Desarrollador: Dessu1</span>
              </div>
            </div>
            <div className='project-img'>
              <img src='https://i.imgur.com/8jURoR5.jpg' alt='project-img' />
            </div>
          </div>

          <div id='project-2' className='content-project'>
            <h2 className='tittle'>Proyecto 2</h2>
            <div className='container-span'>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia commodi officia alias in ut optio, quas enim obcaecati
                tempora? Magnam eligendi quae quaerat provident? Nemo,
                aspernatur libero? Non, eaque consequatur.
              </span>
              <div className='desc'>
                <span>Desarrollador: Dessu1</span>
              </div>
            </div>
            <div className='project-img'>
              <img src='https://i.imgur.com/8jURoR5.jpg' alt='project-img' />
            </div>
          </div>

          <div id='project-3' className='content-project'>
            <h2 className='tittle'>Proyecto 3</h2>
            <div className='container-span'>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia commodi officia alias in ut optio, quas enim obcaecati
                tempora? Magnam eligendi quae quaerat provident? Nemo,
                aspernatur libero? Non, eaque consequatur.
              </span>
              <div className='desc'>
                <span>Desarrollador: Dessu1</span>
              </div>
            </div>
            <div className='project-img'>
              <img src='https://i.imgur.com/8jURoR5.jpg' alt='project-img' />
            </div>
          </div>

          <div id='project-4' className='content-project'>
            <h2 className='tittle'>Proyecto 4</h2>
            <div className='container-span'>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia commodi officia alias in ut optio, quas enim obcaecati
                tempora? Magnam eligendi quae quaerat provident? Nemo,
                aspernatur libero? Non, eaque consequatur.
              </span>

              <div className='desc'>
                <span>Desarrollador: Dessu1</span>
              </div>
            </div>
            <div className='project-img'>
              <img src='https://i.imgur.com/8jURoR5.jpg' alt='project-img' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Projects);
