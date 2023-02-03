import React from "react";
import "./resizable-div.css"
import useResizableDiv from "./use-resizable-div";
import Resizer from "../resizer/resizer";
import {Resizable, TrimHolder, TrimWrapper} from "../styled-components";
import {dragIcon, leftArrow, rightArrow} from "../UI/ui";
import Dragger from "../dragger/dragger";
import TimeTrack from "../time-track/time-track";

const initialData = {
    initialTime: 62000, // up to 3 min to not mess up the seconds
    minTime: 10000,
}

function ResizableDiv() {

    const {
        resizableRef,
        customTime,
        secondsTrack,
        handleMouseDown,
        handleMouseUp
    } = useResizableDiv(initialData)

    return (
        <TrimWrapper onMouseUp={handleMouseUp}>
            <TrimHolder>
                <Resizable
                    ref={resizableRef}
                >
                    <Resizer
                        className={"left"}
                        time={customTime.start}
                        icon={leftArrow}
                        handleMouseDown={handleMouseDown}
                    />
                    <Dragger
                        className={"drag"}
                        icon={dragIcon}
                        time={customTime.time}
                        handleMouseDown={handleMouseDown}
                    />
                    <Resizer
                        className={"right"}
                        time={customTime.end}
                        icon={rightArrow}
                        handleMouseDown={handleMouseDown}
                    />
                </Resizable>
                <TimeTrack secondsTrack={secondsTrack}/>
            </TrimHolder>
        </TrimWrapper>
    );
}

export default ResizableDiv