import { useEffect, useState } from "react"

export const useFetchData = (url) => {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async() => {
            try {
                const res = await fetch(url)
                
                if(!res.ok) {
                    setIsError(true)
                    setIsLoading(false)
                }

                const data = await res.json()
                setData(data)
                setIsLoading(false)
            } catch (error) {
                setIsError(true)
            }
        }

        fetchData()
    }, [])

    return { isLoading, isError, data }
}