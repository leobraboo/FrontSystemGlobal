import { Accordion } from 'react-bootstrap';
import styled from "styled-components";

export const DiagAccordion = styled(Accordion)`
align-items: center;
align-content: center;
justify-items: center ;
flex-direction: column;
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