// packages
import { createGlobalStyle } from 'styled-components'
// util
import { fonts, breakpoints, colors } from '../util/css-config'

const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  height: 100%;
  font-size: 16px;
  font-family: ${fonts.main};
  line-height: 1.15; 
  -webkit-text-size-adjust: 100%;
  overflow-x: hidden;
   

  @media(min-width: ${breakpoints.small}) {
    font-size: 18px;
  }

  @media(min-width: ${breakpoints.medium}) {
    font-size: 20px;
  }

  @media(min-width: ${breakpoints.large}) {
    font-size: 22px;
  }

  @media(min-width: ${breakpoints.extra}) {
    font-size: 24px;
  }
}

/* Slick styling */

.slick-slider {
  max-width: 95%;
  margin: 0 auto;
}

.slick-arrow {
 
  &:before {
    color: ${colors.black};
  }
}

/* Active class for navigation menu */
.active {
  border-left: 4px solid ${colors.white};
  position: relative;


  @media(min-width: ${breakpoints.small}) {
    border: none;
    
    &:before {
      content: '';
      position: absolute;
      height: 4px;
      width: 60%;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      background: ${colors.dark};
    }
  }
}

body {
  margin: 0;
  height: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

hr {
  height: 0;
}

abbr[title] {
  text-decoration: underline dotted;
} 

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp,
pre {
  font-family:
    SFMono-Regular,
    Consolas,
    'Liberation Mono',
    Menlo,
    monospace;
  font-size: 1em; 
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; 
  font-size: 100%;
  line-height: 1.15; 
  margin: 0; 
}

button,
select { 
  text-transform: none;
}

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type='button']::-moz-focus-inner,
[type='reset']::-moz-focus-inner,
[type='submit']::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type='button']:-moz-focusring,
[type='reset']:-moz-focusring,
[type='submit']:-moz-focusring {
  outline: 1px dotted ButtonText;
}


[type='number']::-webkit-inner-spin-button,
[type='number']::-webkit-outer-spin-button {
  height: auto;
}

[type='search'] {
  -webkit-appearance: textfield; 
  outline-offset: -2px; 
}

[type='search']::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

summary {
  display: list-item;
}

`
export default GlobalStyle
