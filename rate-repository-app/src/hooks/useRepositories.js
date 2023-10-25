import {useState, useEffect} from "react";

const useRepositories = () => {
    const [repositories, setRepositories] = useState({});
    const [loading, setLoading] = useState(false);

    const fetchRepositories = async () => {
        setLoading(true);
        const query = `
        {
            repositories {
                edges {
                    node {
                        description
                        fullName
                    }
                }
            }
        }`;
        try {
            const response = await fetch('https://f716-98-128-229-35.ngrok.io/api/repositories', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: query,
                }),
            });
            const json = await response.json();

            if (response.ok) {
                setLoading(false);
                setRepositories(json.data.repositories);
            } else {
                console.error('Error fetching repositories:', json.errors);
            }
        } catch (error) {
            console.error("There was a problem with the fetch operation:", error);
        }
    };

    useEffect(() => {
        fetchRepositories();
    }, []);

    return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;
