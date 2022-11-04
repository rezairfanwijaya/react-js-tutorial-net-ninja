import { useState, useEffect } from "react";

const GetData = (url) => {
    const [Data, setData] = useState([]);
    const [ErrorMessage, setErrorMessage] = useState('');
    const [IsLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(
                    res => {
                        if (!res.ok) {
                            throw Error("failed fetch data")
                        }
                        return res.json()
                    })
                .then(data => setData(data), setIsLoading(false))
                .catch(e => { setErrorMessage(e.message) })
        }, 3000);
    }, [url]);

    return {Data, ErrorMessage, IsLoading}
}

export default GetData