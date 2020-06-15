
import styled from 'styled-components'

const HeroStyled = styled.div`
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, .4), rgba(0, 0, 0, .3)), url(${props => props.img});
`

export default HeroStyled