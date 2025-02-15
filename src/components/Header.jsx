import styled from "styled-components";

const Header = () => {
    return(

        <HeaderContainer>
            <HeaderTitle>500 DAYS TEST</HeaderTitle>
        </HeaderContainer>
    )
}

export default Header;

const HeaderContainer = styled.header`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const HeaderTitle = styled.h1`
    font-size: 1.7rem;
    color: black;
    padding: 10px;
    text-align: center;
    font-family: "Font2";
    text-shadow: 
        3px 3px 0 #F35A91, 
        -3px -3px 0 #F35A91,  
        3px -3px 0 #F35A91,  
        -3px 3px 0 #F35A91; 
`;