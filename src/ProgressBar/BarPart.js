import styled from "styled-components";

export default styled('div')`
    display: inline-block;
    vertical-align: top;
    
    width: ${p => (p.part / p.total * 100) + '%'};
    height: 100%;
    background-color: ${p => p.color};
    
    ${p => p.left && `border-radius: ${p.height}px 0 0 ${p.height}px;`}
    ${p => p.right && `border-radius: 0 ${p.height}px ${p.height}px 0;`}
    ${p => p.left && p.right && `border-radius: ${p.height}px;`}
    
    transition: width .5s;
`;
