import React, {memo} from 'react';
import {Drag, TotalTimeTrack} from "../styled-components";

const Dragger = memo(({className, icon, time, handleMouseDown}) => {
    return (
        <Drag
            onMouseDown={()=>handleMouseDown(className)}
        >
            {icon}
            <TotalTimeTrack>
                {time}
            </TotalTimeTrack>
        </Drag>
    );
})

export default Dragger;