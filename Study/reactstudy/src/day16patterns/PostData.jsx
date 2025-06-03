import React, { useEffect, useState } from "react";

export default function PostData() {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const tagOptions = ["history", "american", "crime", "fiction", "magica"];

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts);
      })
      .catch((err) => console.error(err));
  }, []);
  const filteredPosts = posts.filter((post) => {
    const matchTitle = post.title.toLowerCase().includes(query.toLowerCase());
    const matchTag = !selectedTag || post.tags.includes(selectedTag);
    return matchTitle && matchTag;
  });

  return (
    <div>
      <h2>Posts Table</h2>
      <input
        type="text"
        placeholder="Search by title"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <label style={{ marginLeft: "10px" }}>Search by tag:</label>
      <select
        value={selectedTag}
        onChange={(e) => setSelectedTag(e.target.value)}
        style={{ marginLeft: "5px" }}
      >
        <option value="">All</option>
        {tagOptions.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
      <table border="1" cellPadding="5" style={{ marginTop: "10px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Tags</th>
          </tr>
        </thead>
        <tbody>
          {filteredPosts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.tags.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
