export function millisToMinutesAndSeconds(millis) {
    let minutes = Math.floor(millis / 60000);
    let seconds = +((millis % 60000) / 1000).toFixed(0);
    if (seconds > 0 && seconds % 60 === 0) {
        return minutes < 1 ? "1:00" : `${minutes}:00`
    } else {
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
    }
}
export function getSecondsTracker(initialTime) {
    const arr = []
    for (let i = 0; i < initialTime; i++) {
        const currentTime = millisToMinutesAndSeconds(i)
        if (arr.indexOf(currentTime) === -1) arr.push(currentTime)
    }
    return arr;
}
export function fromPxToPercents(currentWidth, initialWidth) {
    return `${currentWidth * 100 / initialWidth}%`
}
export function fromPercentToPx(currentPx, initialWidth) {
    return currentPx * initialWidth / 100
}

export function getTimeFromPx(customWidth, totalTime, totalWidth) {
    return customWidth * totalTime / totalWidth
}

export function getPxFromTime(customTime, totalWidth, totalTime) {
    return customTime * totalWidth / totalTime
}

export const getElementAccordingToTimeLapse = (index, timeLapse) => {
    return index % timeLapse === 0
}