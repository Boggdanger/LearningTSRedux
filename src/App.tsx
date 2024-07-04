import { useState, useEffect } from "react";
import "./App.css";

import { makeRequest } from "./API/fetchPlaceholderData.js";

function App() {
  interface IData {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  const [data, setData] = useState<IData[]>([]);
  const [error, setError] = useState<string | null>(null);

  console.log(data);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const posts = await makeRequest({ endpoint: "/posts", method: "GET" });
        setData(posts as IData[]);
      } catch (err) {
        setError((err as Error).message);
        console.log(error);
      }
    };
    getPosts();
  }, [error]);

  console.log(data);

  return (
    <>
      <h1>Vite + React</h1>
    </>
  );
}

export default App;
