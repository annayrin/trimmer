import React from "react";
import "./resizable-div.css"
import useResizableDiv from "./use-resizable-div";
import Resizer from "../resizer/resizer";
import {
    CurrentSecond,
    Resizable,
    SecondLines,
    Seconds,
    SecondsCounter,
    TotalTimeTrack,
    TrimHolder,
    TrimWrapper
} from "../styled-components";
import {dragIcon, leftArrow, rightArrow} from "../UI/ui";
import Dragger from "../dragger/dragger";

const initialData = {
    initialTime: 82200, // up to 3 min to not mess up the seconds
    minTime: 10000,
}


function ResizableDiv() {

    const {
        resizableRef,
        customTime,
        secondsTrack,
        handleMouseUp,
        handleMouseMove,
        handleMouseDown,
        getElementAccordingToTimeLapse,
    } = useResizableDiv(initialData)

    return (
        <TrimWrapper onMouseUp={handleMouseUp}>
            <TrimHolder>
                <Resizable
                    ref={resizableRef}
                >
                    <TotalTimeTrack>{customTime.time}</TotalTimeTrack>
                    <Resizer
                        className={"left"}
                        time={customTime.start}
                        icon={leftArrow}
                        handleMouseDown={event => handleMouseDown(event, "left")}
                        handleMouseMove={handleMouseMove}
                    />
                    <Dragger
                        handleMouseDown={event => handleMouseDown(event, "drag")}
                        handleMouseMove={handleMouseMove}
                        icon={dragIcon}
                    />
                    <Resizer
                        className={"right"}
                        time={customTime.end}
                        icon={rightArrow}
                        handleMouseDown={event => handleMouseDown(event, "right")}
                        handleMouseMove={handleMouseMove}
                    />
                </Resizable>
                <SecondsCounter>
                    {secondsTrack.map((item, i) => {
                        return getElementAccordingToTimeLapse(i, 5) ?
                            <Seconds key={`second_${item}_${i}`}>
                                <CurrentSecond> {item} </CurrentSecond>
                            </Seconds> :
                            <SecondLines key={`second_${item}_${i}`}/>
                    })
                    }
                </SecondsCounter>
            </TrimHolder>
        </TrimWrapper>
    );
}

export default ResizableDiv