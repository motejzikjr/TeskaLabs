export const useTable = () => {
    const getData = (params) => {
        const queryString = new URLSearchParams(params).toString();

        return fetch(`https://devtest.teskalabs.com/data?${queryString}`)
            .then((data) => data.json())
            .then((data) => {
                return { count: data.count, rows: data.data };
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return { getData };
};
