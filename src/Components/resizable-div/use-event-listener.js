import {useEffect} from "react";

function useEventListener(condition, eventType, fn, ref = document) {

    useEffect(() => {
        if (condition) {
            ref.addEventListener(eventType, fn)
        } else {
            ref.removeEventListener(eventType, fn)
        }
        return () => ref.removeEventListener(eventType, fn)
    }, [condition, eventType, fn, ref])
}

export default useEventListener