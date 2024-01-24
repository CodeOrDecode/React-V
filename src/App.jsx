import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchAndUpdateData();
  }, []);

  async function fetchAndUpdateData() {
    // Clicking on the button Get and Display post should make an API request to https://jsonplaceholder.typicode.com/posts?_limit=5
    // Get the response display as a card with id,title,body
    // use data to save the response in local state

    try {
      let res1 = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=5`
      );
      let finalData = await res1.json();
      setData(finalData);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <>
        {data.map((post) => (
          <div
            key={post.id}
            style={{
              border: "1px solid black",
              margin: "10px",
              padding: "10px",
            }}
          >
            <p>{post.id}</p>
            <p>{post.title}</p>
          </div>
        ))}
      </>
    </>
  );
}

export default App;
