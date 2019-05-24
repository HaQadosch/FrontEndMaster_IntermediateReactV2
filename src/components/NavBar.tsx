import React from 'react';
import { Link } from '@reach/router';
import { css, jsx, keyframes } from '@emotion/core';
import { colors } from '../utils/colors';

const spin = keyframes`
  to {
    transform: rotate(360deg)
  }
`;

/** @jsx jsx */
export const NavBar: React.FC = () => {
  return (
    <header
      css={css`
        background-color: ${colors.secondary};
        padding: 15px;
      `}
    >
      <Link to='/'>Adopt me !</Link>
      <span
        css={css`
          font-size: 4rem;
          &:hover {
            text-decoration: underline;
            animation: 1s ${spin} linear infinite reverse;
          }
          display: inline-block;
          animation: 5s ${spin} linear infinite;
        `}
        role='img'
        aria-label='logo'
      >
        🐩
      </span>
    </header>
  );
};
