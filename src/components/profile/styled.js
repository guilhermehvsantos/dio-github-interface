import styled from "styled-components";

export const Wrapper = styled.div `
display: flex;
align-items: flex-start;

`;

export const WrapperUserInfo = styled.div `
display: flex;
flex-direction: column;
align-items: flex-start;
height: 200px;
margin-left: 10px;

h1{
    font-size: 24px;
    font-weight: bold;
}
h3{
    font-size: 18px;
    font-weight: bold;
}
h4{
    font-size: 14px;
    font-weight: bold;
}
`;

export const WrapperUsername = styled.div `
display: flex;
align-items: center;
margin: 20px 10px 0;

h3 {
    margin-right: 10px;
};
a {
    color: blue;
    font-weight: bold;
    
}
a:hover {
    text-decoration: underline;
  }
`;

export const WrapperLocation = styled.div `
display: flex;
align-items: center;
margin: 30px 10px 0;
a {
    margin: 0 8px;
}
a:hover {
    text-decoration: underline;
  }
`;

export const WrapperStatusCount = styled.div `
display: flex;
align-items: center;

margin-top: 40px;
div {
    margin: 10px;
    text-align: center;
}
`;

export const WrapperImage = styled.img `
width: 170px;
margin: 10px;
border: 2px solid white;
border-radius: 50%;
box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.5);
`;

