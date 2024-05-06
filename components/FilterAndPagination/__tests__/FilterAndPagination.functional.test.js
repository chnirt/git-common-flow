import React from "react";
import { render, waitFor, fireEvent } from "@testing-library/react";
import useSWR from "swr";
import "@testing-library/jest-dom";
import FilterAndPagination from "../FilterAndPagination";

// Mock SWR hook
jest.mock("swr");

describe("FilterAndPagination", () => {
  it('increases data size when "Next Page" button is clicked', async () => {
    const fakeDataPage1 = [
      { id: 1, title: "Post 1" },
      { id: 2, title: "Post 2" },
    ];

    const fakeDataPage2 = [
      { id: 3, title: "Post 3" },
      { id: 4, title: "Post 4" },
    ];

    // Mock SWR hook to return data for page 1
    useSWR.mockReturnValueOnce({ data: fakeDataPage1, error: undefined });

    const { getByText } = render(<FilterAndPagination />);

    // Wait for the component to render
    await waitFor(() => {
      // Check if data is rendered correctly for page 1
      expect(getByText("Post 1")).toBeInTheDocument();
      expect(getByText("Post 2")).toBeInTheDocument();
    });

    // Mock SWR hook to return data for page 2
    useSWR.mockReturnValueOnce({ data: fakeDataPage2, error: undefined });

    // Click on "Next Page"
    fireEvent.click(getByText("Next Page"));

    // Wait for the component to render with data for page 2
    await waitFor(() => {
      expect(getByText("Post 3")).toBeInTheDocument();
      expect(getByText("Post 4")).toBeInTheDocument();
    });

    // Mock SWR hook to return data for page 1
    useSWR.mockReturnValueOnce({ data: fakeDataPage1, error: undefined });

    // Click on "Previous Page"
    fireEvent.click(getByText("Previous Page"));

    // Wait for the component to render with data for page 1 again
    await waitFor(() => {
      expect(getByText("Post 1")).toBeInTheDocument();
      expect(getByText("Post 2")).toBeInTheDocument();
    });
  });
});
