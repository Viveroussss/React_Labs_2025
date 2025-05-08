import { useState, useEffect } from 'react';

const useFetch = (url, options = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { body } = options;
                const startTime = Date.now();
                const response = await fetch(url, options);
                const status = response.status;
                const responseData = await response.json();
                const duration = Date.now() - startTime;
                
                setData(responseData);

                const logEntry = {
                    url,
                    method: options.method || 'GET',
                    body: body ? JSON.parse(body) : null,
                    status,
                    duration: `${duration}ms`,
                    timestamp: new Date().toISOString(),
                };
                
                // Store in local storage
                const logs = JSON.parse(localStorage.getItem('fetchLogs')) || [];
                logs.push(logEntry);
                localStorage.setItem('fetchLogs', JSON.stringify(logs));
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, JSON.stringify(options)]);

    return { data, loading, error };
};

export default useFetch;
