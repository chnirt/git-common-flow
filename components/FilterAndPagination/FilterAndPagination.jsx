import React, { useState } from "react";
import useSWR from "swr";
import { apiUrlPosts } from "@/utils/apiConfig";

// Function to fetch data from the API using SWR
const fetcher = (url) => fetch(url).then((res) => res.json());

const PAGE_SIZE = 10;

function FilterAndPagination() {
  // State for filter and pagination
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);

  // API endpoint URL
  const apiUrl = `${apiUrlPosts}?_page=${page}&_limit=${PAGE_SIZE}&q=${filter}`;

  // Use SWR to fetch data
  const { data, error } = useSWR(apiUrl, fetcher);

  if (error) return <div>Error fetching data!</div>;
  if (!data) return <div>Loading data...</div>;

  return (
    <div>
      {/* Filter */}
      <input
        type="text"
        placeholder="Search..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      {/* Data */}
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      {/* Pagination */}
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Previous Page
      </button>
      <button onClick={() => setPage(page + 1)}>Next Page</button>
    </div>
  );
}

export default FilterAndPagination;
