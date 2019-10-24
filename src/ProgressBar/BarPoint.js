import styled from "styled-components";

export default styled('div')`
    display: inline-block;
    position: absolute;
    top: ${p => - p.height/2}px;
    left: ${p => `calc(${p.part / p.total * 100}% - ${p.height}px)`};
    width: ${p => 2 * p.height}px;
    height: ${p => 2 * p.height}px;
    background-color: ${p => p.color};
    border-radius: 100%;

    transition: left .5s;
`;