import React from 'react';
import {HiddenTimeTrack, ResizerButton} from "../styled-components";

function Resizer({time, icon, className, reff, handleMouseMove, handleMouseDown}) {

    return (
        <ResizerButton
            ref={reff}
            className={className}
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
        >
            {icon}
            <HiddenTimeTrack className="timeTracker">{time}</HiddenTimeTrack>
        </ResizerButton>
    );
}

export default Resizer;