import React, {memo} from 'react';
import {ResizerButton} from "../styled-components";

const Resizer = memo(({icon, className, handleMouseDown}) => {
    return (
        <ResizerButton
            className={className}
            onMouseDown={() => handleMouseDown(className)}
        >
            {icon}
        </ResizerButton>
    );
})

export default Resizer;