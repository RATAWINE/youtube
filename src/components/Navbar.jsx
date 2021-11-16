import { Search,ShoppingCartOutlined } from '@material-ui/icons';
import { Badge} from '@material-ui/core';
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
height: 60px;
`;

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items:center;
justify-content:space-between;
`
const Left = styled.div`
flex:1;
display:flex;
align-items:center;

`
const SearchContainer=styled.div`
border:0.5px solid lightgray;
margin-left: 25px;
padding: 5px;
`
const Input = styled.input`
border: none;
`
const Logo = styled.h1`
font-weight:bold;
`

const Language = styled.span`
font-size: 14px;
cursor:pointer;
`
const Center = styled.div`
flex:1;
align-items:center;
`
const Right = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
`
const MenuItems = styled.div`
font-size:14px;
cursor: pointer;
margin-left: 25px;
`

const Navbar = () => {
    return (
       <Container>
           <Wrapper>
               <Left>
                   <Language>Eng</Language>
                   <SearchContainer>
                       <Input/>
                       <Search style={{color:"gray",fontSize:16}}/>
                   </SearchContainer>
               </Left>
               <Center>
                   <Logo>Ecommerce UI</Logo>
               </Center>
               <Right>
                   <MenuItems>REGISTER</MenuItems>
                   <MenuItems>SIGN IN</MenuItems>
                   <MenuItems>
                   <Badge badgeContent={4} color="primary">
                       <ShoppingCartOutlined/>
                   </Badge>
                   </MenuItems>
               </Right>
           </Wrapper>
       </Container>
    )
}

export default Navbar
