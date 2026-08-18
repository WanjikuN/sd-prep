const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        //   to fetch users
        const handleFetchUsers = async () => {
            try {
                setLoading(true);
                setError(null);

                const res = await fetch("/api/users", {
                    signal: controller.signal,
                });
                if (!res.ok) {
                    throw new Error(`Request failed with status ${res.status}`);
                }
                const data = await res.json();
                setUsers(data);
            } catch (error) {
                if (error.name !== "AbortError") {
                    setError(error.message);
                }
            } finally {
                setLoading(false);
            }
        };
        handleFetchUsers();
        return () => controller.abort();
    }, []);

    return (
        <div>
           
            {loading ? (
                <div>Loading...</div>
            ) : (
                <>
                    {users.length === 0 ? (
                        <p>No users found</p>
                    ) : (
                        users.map((user) => (
                            <div key={user.id}>{user.name}</div>
                        ))
                    )}
                </>
            )}
        </div>
    );
};
