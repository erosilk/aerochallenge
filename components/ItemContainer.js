import styled from 'styled-components'
import constants from '../constants'

const BREAKPOINT = constants.STYLE_VARS.breakpoints

export default styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(230px,1fr));
    grid-gap: 1em;
    margin: 1em 5vw;
`