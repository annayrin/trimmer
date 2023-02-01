import React from 'react';
import {Drag} from "../styled-components";

function Dragger({handleMouseDown, handleMouseMove, icon}) {
    return (
        <Drag
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
        >
            {icon}
        </Drag>
    );
}

export default Dragger;