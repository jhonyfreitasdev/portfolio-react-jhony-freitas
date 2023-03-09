import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    margin: 70px 0 30px 0;


    li{ margin: 15px; }

    i{ 
        font-size: 43px; 
        transition: 0.3s ease-in-out;
    }

    i:hover{
        transform: translateY(-3px) translateX(-2px);
    }
`