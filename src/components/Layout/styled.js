import styled from "styled-components"

import HeroBg from "../../images/hero-bg.svg"

export const LayoutContainer = styled.div`
  /* display: grid;
  grid-template:
    50px
    680px
    600px
    / auto 980px auto;

  grid-template-areas:
    ". header ."
    ". hero ."
    ". services ."; */

  padding: 1.5rem 0;
  background-image: url(${HeroBg});
`

export const LayoutContent = styled.main`
  max-width: 960px;
  margin: auto;
  font-family: "Livvic", sans-serif;
`