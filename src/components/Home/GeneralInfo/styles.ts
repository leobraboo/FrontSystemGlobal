import { Accordion } from 'react-bootstrap';
import styled from "styled-components";

export const StyledAccordion = styled(Accordion)`
align-items: center;
align-content: center;
justify-items: center ;
flex-direction: column;
margin-left: 270px;
margin-top: 50px;
.accordion-button:focus{
    box-shadow: none;
}

.accordion-button:not(.collapsed){
    background-color: #1b022e;
    color: var(--bs-accordion-bg);  
}

.accordion-button::after {
}
`