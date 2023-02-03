import React, {memo} from 'react';
import {HiddenTimeTrack} from "../styled-components";
import {millisToMinutesAndSeconds} from "../../utlities";

const TimeBlock = memo(({time, className}) => {
    return (
        <HiddenTimeTrack className={className}>
            {millisToMinutesAndSeconds(time)}
        </HiddenTimeTrack>
    );
})

export default TimeBlock;

