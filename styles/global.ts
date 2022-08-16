import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  :root {
    /* PRIMARY PALETTE */
    --color-primary: #623CEA;
    --color-primary-50: #311E75;
    --color-secondary: #50CF9A;
    --color-secondary-50: #E5F8F0;
    --color-tertiary: #FF577F;
    --color-quarternary: #506CCF;
    --color-quarternary-50: #E5E9F8;

    /* GREY SCALE */
    --grey-1: #F8F9FA;
    --grey-2: #E9ECEF;
    --grey-3: #868E96;
    --grey-4: #212529;

    /* SOCIAL MEDIAS */
    --facebook: #364FC7;
    --instagram: #CF50AC;
    --linkdin: #0E76A8;
    --grey4: #212529;
    
    /* TYPOGRAPHY */
    --title-1: 700 38px 'IBM Plex Sans', sans-serif;
    --title-2: 700 28px 'IBM Plex Sans', sans-serif;
    --title-3: 700 22px 'IBM Plex Sans', sans-serif;
    --title-4: 700 18px 'IBM Plex Sans', sans-serif;
    --headline: 400 16px 'Inter', sans-serif;
    --body: 400 14px 'Inter', sans-serif;
    --caption: 400 12px 'Inter', sans-serif;
    --caption-bold: 700 12px 'Inter', sans-serif;
    --detail: 400 10px 'Inter', sans-serif;
  }
  body {
    font-size: 16px;
  }
  button {
    cursor: pointer;
  }
`;
