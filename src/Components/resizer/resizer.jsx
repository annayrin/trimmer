import React, {memo} from 'react';
import {HiddenTimeTrack, ResizerButton} from "../styled-components";

const Resizer = memo(({time, icon, className, handleMouseDown}) => {
    return (
        <ResizerButton
            className={className}
            onMouseDown={()=>handleMouseDown(className)}
        >
            {icon}
            <HiddenTimeTrack className="timeTracker">
                {time}
            </HiddenTimeTrack>
        </ResizerButton>
    );
})

export default Resizer;