import styled from "styled-components";

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const HeaderText = styled.h1`
    margin: 1rem auto;
    padding: 1rem;
    border-radius: 20px;
    color: white;
    background-color: #333;
`;

const Header = (props) => {
    return (
        <HeaderContainer>
            <HeaderText>DogBlog: The Blog for Dogs</HeaderText>
        </HeaderContainer>
    )
}

export default Header;