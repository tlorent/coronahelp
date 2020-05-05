import { useEffect, useRef, useState } from "react"

export const useObserver = () => {
    const targetRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.intersectionRatio >= 0.1) {
                    setIsVisible(true)
                    observer.unobserve(targetRef.current)
                }
            },
            {
                root: null,
                threshold: 0.1,
            }
        )

        if (targetRef?.current) {
            observer.observe(targetRef.current)
        }
    }, [targetRef, isVisible])

    return [isVisible, targetRef]
}
