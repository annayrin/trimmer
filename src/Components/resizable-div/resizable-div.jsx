import React from "react";
import "./resizable-div.css"
import useResizableDiv from "./use-resizable-div";
import Resizer from "../resizer/resizer";
import {Overflowed, Resizable, TrimContainer, TrimHolder, TrimWrapper, Wrapper} from "../styled-components";
import {dragIcon, leftArrow, rightArrow} from "../UI/ui";
import Dragger from "../dragger/dragger";
import TimeTrack from "../time-track/time-track";
import TimeBlock from "../time-block/time-block";
import Zoom from "../zoom/zoom";


function ResizableDiv() {


    const {
        counter,
        resizableRef,
        customTime,
        secondsTrack,
        handleMouseDown,
        handleMouseUp,
        zoom
    } = useResizableDiv()


    return (
        <Wrapper onMouseUp={handleMouseUp}>
            <TrimWrapper counter={counter}>
                <Zoom
                    counter={counter}
                    zoom={zoom}
                />
                <TrimContainer counter={counter}>
                    <Overflowed counter={counter}>
                        <TimeTrack
                            secondsTrack={secondsTrack}
                        />
                        <TrimHolder>

                            <Resizable
                                counter={counter}
                                ref={resizableRef}
                            >
                                <TimeBlock
                                    time={customTime.start}
                                    className={"startTime"}
                                />
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
                                <TimeBlock
                                    time={customTime.end}
                                    className={"endTime"}
                                />

                            </Resizable>

                        </TrimHolder>
                    </Overflowed>
                </TrimContainer>
            </TrimWrapper>
        </Wrapper>

    );
}

export default ResizableDiv