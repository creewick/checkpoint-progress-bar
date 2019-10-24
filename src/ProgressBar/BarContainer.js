import styled from "styled-components";
import {GRAY} from "./DEFAULTS";

export default styled('div')`
    height: ${p => p.height}px;
    position: relative;
    
    background-color: ${GRAY};
    border-radius: ${p => p.height}px;
    z-index: -1;
`;