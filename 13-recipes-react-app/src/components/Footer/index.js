import React from 'react';

import { Container } from './styled';

export default function Footer() {
  return (
    <Container>
      <div className="container-by">
        <span>
          Feito por{' '}
          <a
            href="https://github.com/gabriel-tomas"
            target="_blank"
            rel="noreferrer"
          >
            Gabriel Tomás
          </a>
        </span>
      </div>
    </Container>
  );
}
