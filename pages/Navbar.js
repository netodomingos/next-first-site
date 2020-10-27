import styled from 'styled-components'
// import LogoImage from './Assets/logo.png'

const Container = styled.nav`
  margin: 10px 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const Logo = styled.img`
  width: 80px;
  height: 50px;
`
const Menu = styled.div`
  display: flex;
  width: 30%;
  flex-direction: row;
  justify-content: space-evenly;
`
const MenuContent = styled.p`
  font-family: 'Open Sans';
  font-weight: 600;
`

const Navbar = () => {
  return(
    <Container>
      <Logo 
        src='/logo.png'
      />

      <Menu>
        <MenuContent>
          Our Products
        </MenuContent>

        <MenuContent>
          Our Clients
        </MenuContent>

        <MenuContent>
          Our Services
        </MenuContent>
      </Menu>
    </Container>
  )
}

export default Navbar