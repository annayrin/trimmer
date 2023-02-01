import {useEffect, useMemo, useRef, useState} from 'react';
import {
    fromPxToPercents,
    getPxFromTime,
    getSecondsTracker,
    getTimeFromPx,
    millisToMinutesAndSeconds
} from "../../utlities";


function UseResizableDiv(initialData) {


    useEffect(() => {
        setInitialWidth(resizableRef.current.offsetWidth) // to receive the initial width of the trimmer in px to calc the %
        //setCustomWidth(resizableRef.current.offsetWidth)
        setInitialLeft(resizableRef.current.offsetParent.offsetLeft)  // distance from the left viewport of the div(trim holder not trimmer)
    }, [])

    /* *** */

    const {initialTime, minTime} = initialData
    const resizableRef = useRef(null)
    const [initialWidth, setInitialWidth] = useState(null)
    const [initialLeft, setInitialLeft] = useState(0) // left from viewport
    const [resizing, setResizing] = useState(false)
    const [side, setSide] = useState(null)
    const [dragging, setDragging] = useState(false)

    const [leftMargin, setLeftMargin] = useState(0)
    const [rightMargin, setRightMargin] = useState(0)
    const [customWidth, setCustomWidth] = useState(null)

    const [customStyle, setCustomStyle] = useState({
        width: "100%",
        left: "0%"
    })
    const [customTime, setCustomTime] = useState({
        start: "00:00",
        end: millisToMinutesAndSeconds(initialTime),
        time: millisToMinutesAndSeconds(initialTime)
    })
    const secondsTrack = useMemo(() => getSecondsTracker(initialTime), [initialTime])
    const minWidth = getPxFromTime(minTime, initialWidth, initialTime)
    const handleMouseDown = (event, side) => {
        setSide(side)
        setResizing(true)
        if (dragging) setDragging(false)
    }
    const handleMouseMove = (event) => {
        const target = event.clientX - initialLeft // exact px on resizable div
        if (resizing) {
            if (side === "right") {
                const width = target - leftMargin
                if (width > minWidth && target < initialWidth) {
                    resizableRef.current.style.width = fromPxToPercents(width, initialWidth)
                    setRightMargin(initialWidth - target)
                    setCustomWidth(width)
                }
            } else if (side === "left") {
                const width = initialWidth - target - rightMargin
                if (target > 0 && width > minWidth) {
                    resizableRef.current.style.width = fromPxToPercents(width, initialWidth)
                    resizableRef.current.style.left = fromPxToPercents(target, initialWidth)
                    setCustomWidth(width)
                    setLeftMargin(target)
                }
            }
        } else if (dragging) {
            const mouseTarget = target - customWidth / 2
            if (mouseTarget > 0 && mouseTarget + customWidth < initialWidth) {
                resizableRef.current.style.left = fromPxToPercents(mouseTarget, initialWidth)
                setLeftMargin(mouseTarget)
            }
        }
        setCustomTime({
            time: millisToMinutesAndSeconds(getTimeFromPx(customWidth ? customWidth : initialWidth, initialTime, initialWidth)),
            end: millisToMinutesAndSeconds(getTimeFromPx(customWidth + leftMargin, initialTime, initialWidth)),
            start: millisToMinutesAndSeconds(getTimeFromPx(leftMargin, initialTime, initialWidth))
        })
    }
    const handleDrag = () => {
        setDragging(true)
        if (resizing) setResizing(false)
    }
    const handleMouseUp = () => {
        setCustomStyle({
            left: fromPxToPercents(leftMargin, initialWidth),
            width: fromPxToPercents(customWidth, initialWidth)
        })
        if (resizing) setResizing(false)
        if (side?.length) setSide(null)
        if (dragging) setDragging(false)
    }

    const getElementAccordingToTimeLapse = (index, timeLapse) => { //need to change this to return a boolean and show the elem according to bool
        return index % timeLapse === 0
    }


    return {
        resizableRef,
        customStyle,
        customTime,
        secondsTrack,
        handleMouseUp,
        handleMouseMove,
        handleMouseDown,
        handleDrag,
        getElementAccordingToTimeLapse
    }
}

export default UseResizableDiv;