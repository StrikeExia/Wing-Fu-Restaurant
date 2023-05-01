import styled from 'styled-components';

export const MenuContainer = styled.div`
background-color: #0d0909;
border-bottom: 1px solid white;
    p {
        font-size: 2rem;
        display: flex;
        justify-content: center;
        font-weight: bold;
        color: #fff;
    }
`;

export const MenuBox = styled.div`
background-color: #0d0909;
display: flex;
width: 100%;
max-width: 1000px;
flex-direction: column;
z-index: 2;
padding: 2rem;
cursor: pointer;
margin: 0 auto;

img {
    overflow-clip-margin: content-box;
    overflow: clip;
}

@media screen and (max-width: 650px) {
    width: 100%;

}
`;