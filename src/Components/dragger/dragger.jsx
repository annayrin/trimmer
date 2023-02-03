import React, {memo} from 'react';
import {Drag, TotalTimeTrack} from "../styled-components";
import {millisToMinutesAndSeconds} from "../../utlities";

const Dragger = memo(({className, icon, time, handleMouseDown}) => {
    return (
        <Drag
            onMouseDown={()=>handleMouseDown(className)}
        >
            {icon}
            <TotalTimeTrack>
                {millisToMinutesAndSeconds(time)}
            </TotalTimeTrack>
        </Drag>
    );
})

export default Dragger;