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
              <a href='#project-1'>Tesis de Grado</a>
              <a href='#project-2'>Curso en VR</a>
              <a href='#project-3'>Carrito de Compras</a>
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
            <h2 className='tittle'>tesis de grado</h2>
            <div className='container-span'>
              <span>
                Desarrollo de plataforma web para brindar un contenido 3D
                mediante el uso de ThreeJs y ReactJs.
                <br />
                <br />
                Con el cual poder dar soporte a las actividades de bienestar de
                la universidad Santiago de Cali, en tiempos de pandemia.
              </span>

              <div className='desc'>
                <span>Desarrolladores: Dessu1 - Sirzes02</span>
              </div>
            </div>
            <div className='project-img'>
              <img src='https://i.imgur.com/tfenuqW.png' alt='project-img' />
            </div>
          </div>

          <div id='project-2' className='content-project'>
            <h2 className='tittle'>CURSO EN RV</h2>
            <div className='container-span'>
              <span>
                Desarrollo de plataforma web con soporte de realidad virtual
                mediante el uso de ThreeJs para brindar una ayuda a los
                estudiantes de química de primer semestre.
                <br />
                <br />
                Estuve encargado de la parte lógica junto a un pequeño grupo de
                desarrollo.
              </span>
              <div className='desc'>
                <span>Participante: Dessu1</span>
              </div>
            </div>
            <div className='project-img'>
              <img src='https://i.imgur.com/Igtr9U0.png' alt='project-img' />
            </div>
          </div>

          <div id='project-3' className='content-project'>
            <h2 className='tittle'>Carrito de compras</h2>
            <div className='container-span'>
              <span>
                Plataforma web para brindar un servicio de carrito de compras
                mediante el uso de HTML 5 y Javascript.
                <br />
                <br />
                Cuanta con la facilidad de ser aplicada a tiendas virtuales.
              </span>
              <div className='desc'>
                <span>Desarrollador: Dessu1</span>
              </div>
            </div>
            <div className='project-img'>
              <img src='https://i.imgur.com/NjDtM3Q.png' alt='project-img' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Projects);
