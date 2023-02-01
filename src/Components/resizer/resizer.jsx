import React from 'react';
import {HiddenTimeTrack, ResizerButton} from "../styled-components";

function Resizer({time, icon, className, handleMouseDown}) {

    return (
        <ResizerButton
            className={className}
            onMouseDown={handleMouseDown}
        >
            {icon}
            <HiddenTimeTrack className="timeTracker">{time}</HiddenTimeTrack>
        </ResizerButton>
    );
}

export default Resizer;