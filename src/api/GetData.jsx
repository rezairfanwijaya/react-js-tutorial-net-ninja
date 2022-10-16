import { useState, useEffect } from "react";

const GetData = (url) => {
    const [Data, setData] = useState(null);
    const [ErrorMessage, setErrorMessage] = useState(null);
    const [IsLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => (
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw Error('failed to fetch data')
                    }
                    return res.json()
                })
                .then(
                    data => setData(data),
                    setIsLoading(false)
                )
                .catch(e => { setErrorMessage(e.message) })
        ), 3000)
    }, [url]); // url akan menjadi trigger untuk useeffect berjalan, jadi ketika ada url yang berubah
    // maka useeffect akan reload dan fetch url terbaru

    return { Data, ErrorMessage, IsLoading }
}

export default GetData