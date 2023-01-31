import {useEffect, useMemo, useRef, useState} from 'react';
import {getSecondsTracker, millisToMinutesAndSeconds} from "../../utlities";

function UseResizableDiv(initialData) {

    const {initialTime, minTime} = initialData
    const divRef = useRef(null)
    const [initialWidth, setInitialWidth] = useState(null)
    const [initialLeft, setInitialLeft] = useState(0) // left from viewport
    const [customWidth, setCustomWidth] = useState(null)
    const [widthCopy, setWidthCopy] = useState(null) // for the left resizer
    const [customLeft, setCustomLeft] = useState(0)
    const [resizing, setResizing] = useState(false)
    const [side, setSide] = useState("")
    const [dragging, setDragging] = useState(false)

    const customStyle = {
        width: `${customWidth * 100 / initialWidth}%`, //px to %
        left: `${customLeft * 100 / initialWidth}%` //px to %
    }
    const secondsTrack = useMemo(() => getSecondsTracker(initialTime), [initialTime])
    const time = millisToMinutesAndSeconds(initialTime * customWidth / initialWidth)
    const start = millisToMinutesAndSeconds(customLeft * initialTime / initialWidth)
    const end = millisToMinutesAndSeconds((customWidth + customLeft) * initialTime / initialWidth)
    const minWidth = minTime * initialWidth / initialTime
    const handleMouseDown = (event, side) => {
        event.preventDefault()
        setSide(side)
        setResizing(true)
        if (dragging) setDragging(false)
    }
    const handleMouseMove = event => {
        const leftMargin = event.clientX - initialLeft
        if (resizing) {
            if (side === "right") {
                const width = customWidth - (customWidth - (leftMargin - customLeft))
                if (width <= initialWidth - customLeft && width >= minWidth) {
                    setCustomWidth(width)
                    setWidthCopy(width)
                }
            } else if (side === "left") {
                const currentLeftMargin = leftMargin - 10 // reducing for 10px to let the event.target on the resizer
                const width = (widthCopy ? widthCopy : initialWidth) - currentLeftMargin
                if (width >= minWidth && currentLeftMargin >= 0) {
                    setCustomLeft(currentLeftMargin)
                    setCustomWidth(width)
                }
            }
        } else if (dragging) {
            const currentLeftMargin = leftMargin - (customWidth / 2)  // to keep the mouse in the middle
            if (currentLeftMargin >= 0 && currentLeftMargin + customWidth <= initialWidth) {
                setCustomLeft(currentLeftMargin)
            }
        }
    }
    const handleDrag = () => {
        setDragging(true)
        if (resizing) setResizing(false)
    }
    const handleMouseUp = () => {
        if (resizing) setResizing(false)
        if (side?.length) setSide("")
        if (dragging) setDragging(false)
    }

    const getElementAccordingToTimeLapse = (index, timeLapse, elem1, elem2) => {
        return index % timeLapse === 0 ? elem1 : elem2
    }

    useEffect(() => {
        setInitialWidth(divRef.current.offsetWidth) // to receive the initial width of the trimmer in px to calc the %
        setCustomWidth(divRef.current.offsetWidth)
        setInitialLeft(divRef.current.offsetParent.offsetLeft)  // distance from the left viewport of the div(trim holder not trimmer)
    }, [])

    return {
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
        getElementAccordingToTimeLapse
    }
}

export default UseResizableDiv;