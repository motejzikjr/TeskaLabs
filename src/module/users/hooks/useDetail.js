import { useEffect, useState } from 'react';

export const useDetail = (id) => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        setError(null)

        fetch(`https://devtest.teskalabs.com/detail/${id}`)
            .then((data) => data.json())
            .then((data) => {
                setUser(data);
            })
            .catch((error) => {
                setError(error)
            })
            .finally(() => setLoading(false))
    }, []);

    return {
        user,
        loading,
        error
    };
};
