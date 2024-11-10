import { useState, useEffect } from "react";

function Items() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching data..."); // Debug log to see if useEffect is called

    fetch("http://localhost:3000/items")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        console.log("Data fetched:", json); // Debug log to verify data
        setData(json); // Set fetched data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error); // Set error if fetch fails
      });
  }, []);

  return (
    <div>
      {error ? (
        <p>Error loading data: {error.message}</p>
      ) : data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default Items;
