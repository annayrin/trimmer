import React, {memo} from 'react';
import {zoomIcon, zoomMinIcon} from "../UI/ui";
import styled from "styled-components";


const ZoomWrapper = styled.div`
  width: 100px;
  height: 30px;
  position: absolute;
  top: 170px;
  right: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  z-index: 2;

`
const ZoomCounter = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: grey;
`

const Zoom = memo(({counter, zoom}) => {

    return (
        <ZoomWrapper>
            <span onClick={() => zoom(-1)}>
                {zoomMinIcon}
            </span>
            <ZoomCounter>
                {counter}x
            </ZoomCounter>
            <span onClick={() => zoom(1)}>
                {zoomIcon}
            </span>
        </ZoomWrapper>
    );
})

export default Zoom;