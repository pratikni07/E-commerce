// hooks/useSearch.js

import { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import { useDebounce } from "./useDebounce";

export function useSearch() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const abortControllerRef = useRef(null);

  const debouncedQuery = useDebounce(query, 300);

  const fetchSuggestions = useCallback(async () => {
    if (debouncedQuery.length < 2) {
      setSuggestions(null);
      setError(null);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      // Cancel previous request if any
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      // Create new abort controller for this request
      abortControllerRef.current = new AbortController();

      const response = await axios.get("/api/search/suggestions", {
        params: { query: debouncedQuery },
        signal: abortControllerRef.current.signal,
      });

      if (response.data.success) {
        setSuggestions(response.data.data);
      }
    } catch (err) {
      if (err.name === "AbortError") return;

      setError("Failed to fetch suggestions. Please try again.");
      console.error("Search error:", err);
    } finally {
      setLoading(false);
    }
  }, [debouncedQuery]);

  useEffect(() => {
    fetchSuggestions();

    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [fetchSuggestions]);

  return {
    query,
    setQuery,
    suggestions,
    loading,
    error,
    clearSuggestions: () => setSuggestions(null),
  };
}
