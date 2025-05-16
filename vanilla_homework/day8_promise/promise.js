export const fetchPosts = async () => {
  //fetch posts from "https://jsonplaceholder.typicode.com/posts"
  //return the posts
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch posts");
  }
};

export const fetchPostById = async (id) => {
  //fetch a post by id from "https://jsonplaceholder.typicode.com/posts/${id}"
  //return the post
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch post");
  }
};

export const sequentialPromise = async (promises, order) => {
  //execute promises sequentially
  //return the results in the order specified
  //if there is a rejected promise, throw an error, and stop executing the rest of the promises
  //Example:
  //order = [2,1,3]
  //promises = ["data1", "data2", "data3"]
  //results = ["data2", "data1", "data3"]
  const results = [];
  for (const i of order) {
    try {
      const result = await promises[i - 1];
      results.push(result);
    } catch (error) {
      throw error;
    }
  }
  return results;
};
