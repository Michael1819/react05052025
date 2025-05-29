import React, { useEffect, useState } from "react";

export default function Post() {
    const [resourceType, setResourceType] = useState("posts");
    const [items, setItems] = useState([]); 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`);
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [resourceType]);

    return (
        <>
            <div>
                <button onClick={() => setResourceType("posts")}>Posts</button>
                <button onClick={() => setResourceType("users")}>Users</button>
                <button onClick={() => setResourceType("comments")}>Comments</button>
            </div>
            <h1>{resourceType}</h1>
            {items.map((item: any) => {
                return <pre key={item.id}>{JSON.stringify(item)}</pre>
            })}
        </>
    );
}
