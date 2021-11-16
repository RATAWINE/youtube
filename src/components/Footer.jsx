import { Facebook, Instagram, MailOutlined, Phone, Pinterest, RoomOutlined, Twitter } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
display: flex;
`
const Left = styled.div`
flex:1;
display: flex;
flex-direction:column;
padding: 20px;
`
const Center = styled.div`
flex:1;
padding: 20px;
`
const Right = styled.div`
flex:1;
padding: 20px;
`
const Logo = styled.div``
const Desc= styled.h1`
margin: 20px 0;
font-size: 20px;

`
const SocialContainer = styled.div`
display: flex;
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`
const ListItem = styled.li`
    width:50%;
    margin-bottom: 10px;
`
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius:50%;
color:white;
background-color:#${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right:20px;
cursor:pointer;
`

const ContactItem= styled.div`
    margin-bottom: 20px;
    display:flex;
    align-items: center;
`
const Payment = styled.img`
width:50%;
margin-bottom: 20px;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Ecommernce Shop</Logo>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Atque officia quo officiis libero ducimus placeat asperiores mollitia! Dolores, voluptas officia, 
                    ratione eos nesciunt quia dolorum nemo ut eum natus consequuntur?</Desc>
                    <SocialContainer>
                        <SocialIcon color="3b5999">
                            <Facebook/>
                         </SocialIcon>   
                          <SocialIcon color="e4405f">
                            <Instagram/>
                             </SocialIcon>
                             <SocialIcon color="55acee"> 
                            <Twitter/>
                            </SocialIcon>
                            <SocialIcon color="e60023">
                                <Pinterest/>
                            </SocialIcon>
                       
                    </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Whistlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>contact</Title>
                <ContactItem><RoomOutlined style={{marginRight:"10px"}}/> Achimota St, Accra-Ghana</ContactItem>
                <ContactItem><Phone style={{marginRight:"10px"}}/> +233547912047</ContactItem>
                <ContactItem><MailOutlined style={{marginRight:"10px"}}/> richatawine@gmail.com</ContactItem>
                <Payment src="./images/payment1.png"/>
            </Right>
        </Container>
    )
}

export default Footer
