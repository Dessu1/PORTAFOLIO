import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <div id='container-contact'>
      <a href='https://github.com/dessu1' target='_blank'>
        <FaGithub />
      </a>
      <a href='https://www.instagram.com/dessu_1/' target='_blank'>
        <FaInstagram />
      </a>
      <a
        href='https://mail.google.com/mail/?view=cm&fs=1&to=brian.stiven.alvarado21@gmail.com'
        target='_blank'
      >
        <SiGmail />
      </a>
    </div>
  );
};

export default Contact;
