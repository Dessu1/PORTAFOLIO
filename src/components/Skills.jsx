import React from "react";

const Skills = () => {
  return (
    <div id='container-skills'>
      <h2 className='tittle'>Habilidades</h2>

      <div className='container-left'>
        <li>
          <p>
            HTML 5{" "}
            <span className='percent'>
              90 <span>%</span>
            </span>
          </p>
          <span className='bar'>
            <span className='html'></span>
          </span>
        </li>
        <li>
          <p>
            CSS{" "}
            <span className='percent'>
              75 <span>%</span>
            </span>
          </p>
          <span className='bar'>
            <span className='css'></span>
          </span>
        </li>
        <li>
          <p>
            SASS{" "}
            <span className='percent'>
              65 <span>%</span>
            </span>
          </p>
          <span className='bar'>
            <span className='sass'></span>
          </span>
        </li>
        <li>
          <p>
            Git{" "}
            <span className='percent'>
              65 <span>%</span>
            </span>
          </p>
          <span className='bar'>
            <span className='git'></span>
          </span>
        </li>
      </div>

      <div className='container-right'>
        <li>
          <p>
            React Js{" "}
            <span className='percent'>
              70 <span>%</span>
            </span>
          </p>
          <span className='bar'>
            <span className='reactjs'></span>
          </span>
        </li>
        <li>
          <p>
            Node Js{" "}
            <span className='percent'>
              40 <span>%</span>
            </span>
          </p>
          <span className='bar'>
            <span className='nodejs'></span>
          </span>
        </li>
        <li>
          <p>
            Javascript{" "}
            <span className='percent'>
              75 <span>%</span>
            </span>
          </p>
          <span className='bar'>
            <span className='javascript'></span>
          </span>
        </li>
        <li>
          <p>
            Firebase{" "}
            <span className='percent'>
              65 <span>%</span>
            </span>
          </p>
          <span className='bar'>
            <span className='firebase'></span>
          </span>
        </li>
      </div>
    </div>
  );
};

export default Skills;
