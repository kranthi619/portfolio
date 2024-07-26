import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    transition: background 0.5s linear, color 0.5s linear;
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: ${({ theme }) => theme.navbarTheme.linkColor};
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: ${({ theme }) => theme.navbarTheme.linkHoverColor};
  }

  a.active {
    color: ${({ theme }) => theme.navbarTheme.linkActiveColor};
  }
`;

export default GlobalStyles;
