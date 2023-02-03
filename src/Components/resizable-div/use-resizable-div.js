import {useCallback, useMemo, useRef, useState} from 'react';
import {fromPxToPercents, getPxFromTime, getSecondsTracker, getTimeFromPx} from "../../utlities";
import useEventListener from "./use-event-listener";

function UseResizableDiv() {

    const [initialData, setInitialData] = useState({
        initialTime: 135000,
        minTime: 10000,
        chunks: [
            {
                start: 0,
                end: 135000
            }
        ]
    })


    const {initialTime, minTime} = initialData
    const {start, end} = initialData.chunks[0]
    const resizableRef = useRef(null)

    const [action, setAction] = useState(null)
    const [counter, setCounter] = useState(1)

    const [customTime, setCustomTime] = useState({
        start,
        end,
        time: initialTime
    })

    useEventListener(action, "mousemove", handleMouseMove)

    const secondsTrack = useMemo(() => {
        return getSecondsTracker(initialTime)
    }, [initialTime])

    const handleMouseDown = useCallback((option) => {
        setAction(option)
    }, [action])

    function zoom(x) {
        const value = counter + x
        if (value >= 1 && value <= initialTime / 60000)
            setCounter(value)
    }
    function handleMouseMove(event) {
        const resizable = resizableRef.current
        const {style, offsetWidth, offsetLeft} = resizable
        const initialWidth = resizable.parentElement.offsetWidth
        const minWidth = getPxFromTime(minTime, initialWidth, initialTime)
        const deltaX = event.movementX
        const rightWidth = deltaX + offsetWidth
        const leftWidth = offsetWidth  - deltaX
        const currentLeft = offsetLeft + deltaX



        if (action === "right" && rightWidth >= minWidth
            && rightWidth + offsetLeft <= initialWidth) {
            style.width = fromPxToPercents(rightWidth, initialWidth)
        } else if (action === "left" && leftWidth >= minWidth && currentLeft >= 0) {
           style.width =  fromPxToPercents(leftWidth, initialWidth)
           style.left = fromPxToPercents(currentLeft, initialWidth)
        } else if (action === "drag" && currentLeft >= 0
            && currentLeft + offsetWidth <= initialWidth) {
            style.left = fromPxToPercents(currentLeft, initialWidth)
        }

        setCustomTime({
            time: getTimeFromPx(offsetWidth, initialTime, initialWidth).toFixed(2),
            end: getTimeFromPx((offsetWidth + offsetLeft),
                initialTime, initialWidth).toFixed(2),
            start: getTimeFromPx(offsetLeft, initialTime, initialWidth).toFixed(2),
        })

    }

    function handleMouseUp() {
        setAction(null)
        setInitialData({
            ...initialData, chunks: [{
                    start: customTime.start,
                    end: customTime.end
                }
            ]
        })
    }

    return {
        resizableRef,
        customTime,
        secondsTrack,
        handleMouseDown,
        counter,
        handleMouseUp,
        zoom
    }
}

export default UseResizableDiv;


