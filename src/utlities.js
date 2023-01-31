export const leftArrow =
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
            d="M13.93 5.36a1.21 1.21 0 011.72 0 1.29 1.29 0 010 1.77L10.93 12l4.72 4.87a1.29 1.29 0 010 1.77 1.21 1.21 0 01-1.72 0l-5.57-5.75a1.28 1.28 0 010-1.78z"></path>
    </svg>

export const dragIcon =
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
            d="M8.33 17.18a1.17 1.17 0 01-.25-1.25 1.14 1.14 0 011-.72h5.78a1.14 1.14 0 011 .72 1.17 1.17 0 01-.25 1.25l-2.88 3a1.09 1.09 0 01-1.58 0zm0-10.36l2.88-3a1.09 1.09 0 011.58 0l2.88 3a1.17 1.17 0 01.25 1.25 1.14 1.14 0 01-1 .72H9.11a1.14 1.14 0 01-1-.72 1.17 1.17 0 01.22-1.25z">
        </path>
    </svg>

export const rightArrow =
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
            d="M10.07 5.36a1.21 1.21 0 00-1.72 0 1.29 1.29 0 000 1.77L13.07 12l-4.72 4.87a1.29 1.29 0 000 1.77 1.21 1.21 0 001.72 0l5.57-5.75a1.28 1.28 0 000-1.78z"></path>
    </svg>

export function millisToMinutesAndSeconds(millis) {
    let minutes = Math.floor(millis / 60000);
    let seconds = +((millis % 60000) / 1000).toFixed(0);
    if (seconds > 0 && seconds % 60 === 0) {
        return minutes < 1 ? "1:00" : `${minutes}:00`
    } else {
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
    }
}
export function getSecondsTracker(millis) {
    const arr = []
    for (let i = 0; i < millis; i++) {
        const currentTime = millisToMinutesAndSeconds(i)
        if (arr.indexOf(currentTime) === -1) arr.push(currentTime)
    }
    return arr;
}