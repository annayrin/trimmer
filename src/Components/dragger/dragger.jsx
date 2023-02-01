import React from 'react';
import {Drag} from "../styled-components";

function Dragger({handleDrag, icon}) {
    return (
        <Drag
            onMouseDown={handleDrag}
        >
            {icon}
        </Drag>
    );
}

export default Dragger;