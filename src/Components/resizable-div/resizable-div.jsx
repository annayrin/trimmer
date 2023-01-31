import React from "react";
import "./resizable-div.css"
import useResizableDiv from "./use-resizable-div";
import {dragIcon, leftArrow, rightArrow} from "../../utlities";

const initialData = {
    initialTime: 135420, // up to 3 min to not mess up the seconds
    minTime: 10000,
}
function ResizableDiv() {

    const {
        divRef,
        time,
        customStyle,
        start,
        end,
        secondsTrack,
        handleMouseUp,
        handleMouseMove,
        handleMouseDown,
        handleDrag,
        getElementAccordingToTimeLapse,
    } = useResizableDiv(initialData)

    return (
        <section className="trim-content-wrapper"
                 onMouseUp={handleMouseUp}
        >
            <div className="trim-container"
                 onMouseMove={handleMouseMove}
            >
                <div
                    ref={divRef}
                    className={"resizable"}
                    data-time={time}
                    style={customStyle}
                >
                    <div className='resizer left '
                         data-start-second={start}
                         onMouseDown={(event) => handleMouseDown(event, "left")}
                    >
                        {leftArrow}
                    </div>
                    <div className="drag"
                         onMouseDown={handleDrag}
                    >
                        {dragIcon}
                    </div>
                    <div className='resizer right'
                         data-end-second={end}
                         onMouseDown={(event) => handleMouseDown(event, "right")}
                    >
                        {rightArrow}
                    </div>
                </div>
                <div className="seconds-counter">
                    {secondsTrack.map((item, i) => {
                        return getElementAccordingToTimeLapse(i, 5,
                            (<span
                                key={`second_${item}_${i}`}
                                data-second={item}
                                className="seconds note">
                            </span>),
                            (<span
                                key={`second_${item}_${i}`}
                                className="seconds">
                        </span>)
                        )
                    })
                    }
                </div>
            </div>
        </section>

    );
}

export default ResizableDiv