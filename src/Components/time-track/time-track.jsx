import React, {memo} from 'react';
import {CurrentSecond, SecondLines, Seconds, SecondsCounter} from "../styled-components";
import {getElementAccordingToTimeLapse} from "../../utlities";

const TimeTrack = memo(({secondsTrack}) => {
    return (
        <SecondsCounter>
            {secondsTrack?.map((item, i) => {
                return getElementAccordingToTimeLapse(i, 5) ?
                    <Seconds key={`second_${item}_${i}`}>
                        <CurrentSecond> {item} </CurrentSecond>
                    </Seconds> :
                    <SecondLines key={`second_${item}_${i}`}/>
            })
            }
        </SecondsCounter>);
})

export default TimeTrack;