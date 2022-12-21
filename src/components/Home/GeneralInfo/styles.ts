import { Accordion } from 'react-bootstrap';
import styled from "styled-components";

export const StyledAccordion = styled(Accordion)`
align-items: center;
align-content: center;
justify-items: center ;
flex-direction: column;
margin-left: 250px;
.accordion-button:focus{
    box-shadow: none;
}

.accordion-button:not(.collapsed){
    background-color: white;
    color: black;  
}

.accordion-button::after {
}
`