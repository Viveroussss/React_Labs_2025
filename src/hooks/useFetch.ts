import { useState, useEffect } from 'react';

interface FetchOptions extends RequestInit {
  body?: string;
}

interface FetchLog {
  url: string;
  method: string;
  body: any;
  status: number;
  duration: string;
  timestamp: string;
}

const useFetch = <T>(url: string, options: FetchOptions = {}) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { body } = options;
                const startTime = Date.now();
                const response = await fetch(url, options);
                const status = response.status;
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const responseData = await response.json();
                await new Promise(res => setTimeout(res, 500));
                const duration = Date.now() - startTime;
                
                if (Array.isArray(responseData)) {
                    setData(responseData as T);
                } else {
                    console.error('Expected array response but got:', responseData);
                    throw new Error('Invalid response format');
                }

                const logEntry: FetchLog = {
                    url,
                    method: options.method || 'GET',
                    body: body ? JSON.parse(body) : null,
                    status,
                    duration: `${duration}ms`,
                    timestamp: new Date().toISOString(),
                };
                
                const logs = JSON.parse(localStorage.getItem('fetchLogs') || '[]') as FetchLog[];
                logs.push(logEntry);
                localStorage.setItem('fetchLogs', JSON.stringify(logs));
                window.dispatchEvent(new Event('fetchLogsUpdated'));
            } catch (err) {
                console.error('Fetch error:', err);
                setError(err instanceof Error ? err : new Error('An error occurred'));
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, JSON.stringify(options)]);

    return { data, loading, error };
};

export default useFetch; 