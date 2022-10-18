import React from 'react';

export const useFetchData = () => {
    const [data, setData] = React.useState([]);
    const [error, setErrorMessage] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);

    React.useMemo(() => {
        setIsLoading(true);
        async function getData() {
            await fetch('https://work-sample-mk-fs.s3-us-west-2.amazonaws.com/species.json',)
                .then((res) => {
                    let reader = res.body.getReader();
                    let decoder = new TextDecoder('utf-8');
    
                    return reader.read().then(function(result) {
                        let antelopes = decoder.decode(result.value);
                        setData(JSON.parse(antelopes));
                        setIsLoading(false)
                    });
                })
                .catch((error) => {
                    setErrorMessage(error.message)
                })
        };
        getData();
    }, [])


    return [data, error, isLoading];
}