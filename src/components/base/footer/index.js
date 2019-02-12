import React from 'react';

import { Container, Social, Paragrafo } from './style';

const Footer = () => (
  <Container>
    <Paragrafo>
      © 2016 - 2018 Portfólio Alex Madeira. Feito pela mão direita de um canhoto :)
    </Paragrafo>
    <Social>
      <li>
        <a
          href="https://www.facebook.com/alex.c.madeira"
          target="_blank"
          className="facebook"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook" />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/alex.c.madeira/"
          target="_blank"
          className="instagram"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram" />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/alexcmadeira/"
          target="_blank"
          className="instagram"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram" />
        </a>
      </li>
    </Social>
  </Container>
);

export default Footer;
