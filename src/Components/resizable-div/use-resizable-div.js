import {useMemo, useRef, useState} from 'react';
import {getPxFromTime, getSecondsTracker, getTimeFromPx, millisToMinutesAndSeconds} from "../../utlities";


function UseResizableDiv(initialData) {

    const {initialTime, minTime} = initialData
    const resizableRef = useRef(null)

    const [action, setAction] = useState(null)

    const [customLeft, setCustomLeft] = useState(0)
    const [customRight, setCustomRight] = useState(0)

    const [mouseMoveStart, setMouseMoveStart] = useState(null)

    const [customTime, setCustomTime] = useState({
        start: "00:00",
        end: millisToMinutesAndSeconds(initialTime),
        time: millisToMinutesAndSeconds(initialTime)
    })

    const secondsTrack = useMemo(() => getSecondsTracker(initialTime), [initialTime])
    const handleMouseDown = (event, action) => {
        setAction(action)
        setMouseMoveStart(event.clientX)
    }
    const handleMouseMove = event => {
        const initialWidth = resizableRef.current.parentElement.offsetWidth
        const minWidth = getPxFromTime(minTime, initialWidth, initialTime)
        const deltaX = event.clientX - mouseMoveStart

        if (action === "right") {
            if (deltaX <= customRight && initialWidth + deltaX - customLeft >= minWidth) {
                resizableRef.current.style.width = `${initialWidth - customRight - customLeft + deltaX}px`
            }
        } else if (action === "left") {
            if (initialWidth - deltaX >= minWidth && deltaX + customLeft >= 0) {
                resizableRef.current.style.width = `${initialWidth - deltaX - customLeft - customRight}px`
                resizableRef.current.style.left = `${deltaX + customLeft}px`
            }
        } else if (action === "drag") {
            if (deltaX + customLeft >= 0 && deltaX <= customRight) {
                resizableRef.current.style.left = `${deltaX + customLeft}px`
            }
        }
        setCustomTime({
            ...customTime,
            time: millisToMinutesAndSeconds(getTimeFromPx(resizableRef.current.offsetWidth, initialTime, initialWidth)),
            end: millisToMinutesAndSeconds(getTimeFromPx((resizableRef.current.offsetWidth + resizableRef.current.offsetLeft), initialTime, initialWidth)),
            start: millisToMinutesAndSeconds(getTimeFromPx(resizableRef.current.offsetLeft, initialTime, initialWidth))
        })
    }

    const handleMouseUp = () => {
        if (action) setAction(null)
        setCustomLeft(resizableRef.current.offsetLeft)
        setCustomRight(resizableRef.current.parentElement.offsetWidth
            - (resizableRef.current.offsetWidth + resizableRef.current.offsetLeft))
    }

    const getElementAccordingToTimeLapse = (index, timeLapse) => {
        return index % timeLapse === 0
    }

    return {
        resizableRef,
        customTime,
        secondsTrack,
        handleMouseUp,
        handleMouseMove,
        handleMouseDown,
        getElementAccordingToTimeLapse
    }
}

export default UseResizableDiv;