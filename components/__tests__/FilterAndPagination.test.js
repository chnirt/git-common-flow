import React from "react";
import { render, waitFor } from "@testing-library/react";
import useSWR from "swr";
import '@testing-library/jest-dom'
import FilterAndPagination from "../FilterAndPagination";

// Mock SWR hook
jest.mock("swr");

describe("FilterAndPagination", () => {
  it("renders data correctly", async () => {
    const fakeData = [
      { id: 1, title: "Post 1" },
      { id: 2, title: "Post 2" },
    ];

    // Mock SWR hook to return data
    useSWR.mockReturnValueOnce({ data: fakeData, error: undefined });

    const { getByText } = render(<FilterAndPagination />);

    // Wait for the component to render
    await waitFor(() => {
      // Check if data is rendered correctly
      expect(getByText("Post 1")).toBeInTheDocument();
      expect(getByText("Post 2")).toBeInTheDocument();
    });
  });

  it('handles error state correctly', async () => {
    const errorMessage = 'Error fetching data!';

    // Mock SWR hook to return error
    useSWR.mockReturnValueOnce({ data: undefined, error: new Error(errorMessage) });

    const { getByText } = render(<FilterAndPagination />);

    // Wait for the component to render
    await waitFor(() => {
      // Check if error message is rendered correctly
      expect(getByText(errorMessage)).toBeInTheDocument();
    });
  });

  it('handles loading state correctly', async () => {
    // Mock SWR hook to return loading state
    useSWR.mockReturnValueOnce({ data: undefined, error: undefined });

    const { getByText } = render(<FilterAndPagination />);

    // Wait for the component to render
    await waitFor(() => {
      // Check if loading message is rendered correctly
      expect(getByText('Loading data...')).toBeInTheDocument();
    });
  });
});
