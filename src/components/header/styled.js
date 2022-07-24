import styled from "styled-components";

export const Wrapper = styled.div `
display: flex;
width:  100%;
justify-content: space-between;
margin: 4px 0 16px;
padding: 4px;
border: 2px solid #CCC;
border-radius: 8px;



input {
    width: 100%;
    height: 30px;
    padding: 0px 8px;
    outline: none;
}

button {
    background-color: #CCC;
    color: white;
    height: 30px;
    padding: 0 4px;
    border-radius: 4px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    outline: 5px solid #CCC;
    transition: 0.3s
}

button:hover {
    background-color: #A9A9A9;
    outline: 5px solid #A9A9A9;
    box-shadow: 0 0 0.2em rgba(0, 0, 0, 0.5);]

}
`;
