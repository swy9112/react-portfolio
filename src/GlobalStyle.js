import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 700;
    src: local('Spoqa Han Sans Neo Bold'),
    url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Bold.woff2') format('woff2'),
    url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Bold.woff') format('woff'),
    url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Bold.ttf') format('truetype');
}


@font-face {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 500;
    src: local('Spoqa Han Sans Neo Medium'),
    url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Medium.woff2') format('woff2'),
    url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Medium.woff') format('woff'),
    url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Medium.ttf') format('truetype');
}

@font-face {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 400;
    src: local('Spoqa Han Sans Neo Regular'),
    url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Regular.woff2') format('woff2'),
    url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Regular.woff') format('woff'),
    url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Regular.ttf') format('truetype');
}

@font-face {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 300;
    src: local('Spoqa Han Sans Neo Light'),
    url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Light.woff2') format('woff2'),
    url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Light.woff') format('woff'),
    url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Light.ttf') format('truetype');
}

@font-face {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 100;
    src: local('Spoqa Han Sans Neo Thin'),
    url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Thin.woff2') format('woff2'),
    url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Thin.woff') format('woff'),
    url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@latest/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Thin.ttf') format('truetype');
}

  html {
    font-size: 10px;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Spoqa Han Sans Neo', sans-serif;
    color: #292929;

    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background: #C9C9C9;
      border-radius: 4px;
    }
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  h3,h4 {
    font-weight: bold;
  }
`;

export default GlobalStyle;
