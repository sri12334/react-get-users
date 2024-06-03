const getUsers = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!res.ok) {
            throw new Error(`HTTP error status ${res.status}`);
        }

        return await res.json();
    } catch (err) {
        console.log(err);
    }

};

export default getUsers;