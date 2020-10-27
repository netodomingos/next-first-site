import styled from 'styled-components'

const Container = styled.div`
  margin: 20px 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`
const Texts = styled.div``
const Title = styled.h1`
  font-family: 'Open Sans';
  font-weight: 800;
`
const Sub = styled.h5`
  font-family: 'Open Sans';
  font-weight: 600;
`
const Ilustration = styled.img`
  width: 800px;
  height: 800px;
`

const Navbar = () => {
  return(
    <Container>
      <Texts>
        <Title>
          The Next Site for Neto Domingos Test
        </Title>
        <Sub>
          High quality training and validation data for a Test applications
        </Sub>
      </Texts>

      <Ilustration 
        src='/ilustration.svg'
      />
    </Container>
  )
}

export default Navbar