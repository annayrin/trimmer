import {useMemo, useRef, useState} from 'react';
import {getPxFromTime, getSecondsTracker, getTimeFromPx, millisToMinutesAndSeconds} from "../../utlities";
import useEventListener from "./use-event-listener";


function UseResizableDiv(initialData) {

    const {initialTime, minTime} = initialData
    const resizableRef = useRef(null)
    // const startTimeRef = useRef("00:00")
    // const endTimeRef = useRef(millisToMinutesAndSeconds(initialTime))
    // const totalTimeRef = useRef(millisToMinutesAndSeconds(initialTime))

    const [action, setAction] = useState(null)

    const [customTime, setCustomTime] = useState({
        start: "00:00",
        end: millisToMinutesAndSeconds(initialTime),
        time: millisToMinutesAndSeconds(initialTime)
    })

    useEventListener(action, "mousemove", handleMouseMove)

    const secondsTrack = useMemo(() => {
        return getSecondsTracker(initialTime)
    }, [initialTime])

    const handleMouseDown = action => {
        setAction(action)
    }

    function handleMouseMove(event) {
        const resizable = resizableRef.current
        const {style, offsetWidth, offsetLeft} = resizable
        const initialWidth = resizable.parentElement.offsetWidth
        const minWidth = getPxFromTime(minTime, initialWidth, initialTime)
        const deltaX = event.movementX
        const rightWidth = deltaX + offsetWidth
        const leftWidth = offsetWidth - deltaX
        const currentLeft = offsetLeft + deltaX

        if (action === "right" && rightWidth >= minWidth && rightWidth + offsetLeft <= initialWidth) {
            style.width = `${rightWidth}px`
        } else if (action === "left" && leftWidth >= minWidth && currentLeft >= 0) {
            style.width = `${leftWidth}px`
            style.left = `${currentLeft}px`
        } else if (action === "drag" && currentLeft >= 0 && currentLeft + offsetWidth <= initialWidth) {
            style.left = `${currentLeft}px`
        }
        setCustomTime({
            time: millisToMinutesAndSeconds(getTimeFromPx(offsetWidth, initialTime, initialWidth)),
            end: millisToMinutesAndSeconds(getTimeFromPx((offsetWidth + offsetLeft),
                initialTime, initialWidth)),
            start: millisToMinutesAndSeconds(getTimeFromPx(offsetLeft, initialTime, initialWidth))
        })

        // totalTimeRef.current = millisToMinutesAndSeconds(getTimeFromPx(offsetWidth, initialTime, initialWidth))
        // endTimeRef.current = millisToMinutesAndSeconds(getTimeFromPx((offsetWidth + offsetLeft), initialTime, initialWidth))
        // startTimeRef.current = millisToMinutesAndSeconds(getTimeFromPx(offsetLeft, initialTime, initialWidth))

    }

    function handleMouseUp() {
        setAction(null)
    }

    return {
        resizableRef,
        customTime,
        secondsTrack,
        handleMouseDown,
        handleMouseUp
    }
}

export default UseResizableDiv;