import React, { useState, useEffect, useCallback } from "react";
import {
  Shirt,
  SquareGanttChart,
  Layers2,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { searchProduct } from "@/services/operations/searchAPI";
import { Link } from "react-router-dom";
export function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState({
    categories: [],
    subcategories: [],
    products: [],
    relatedSearches: [],
    suggestions: [],
  });
  const [isLoading, setIsLoading] = useState(false);

  const fetchResults = useCallback(async (searchQuery) => {
    if (searchQuery.length > 2) {
      setIsLoading(true);
      try {
        const response = await searchProduct(searchQuery);
        console.log("API Response:", response); // Debug log
        setResults(response);
      } catch (error) {
        console.error("Error fetching search results:", error);
        setResults({
          categories: [],
          subcategories: [],
          products: [],
          relatedSearches: [],
          suggestions: [],
        });
      } finally {
        setIsLoading(false);
      }
    } else {
      setResults({
        categories: [],
        subcategories: [],
        products: [],
        relatedSearches: [],
        suggestions: [],
      });
    }
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchResults(query);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query, fetchResults]);

  const handleInputChange = (value) => {
    setQuery(value);
  };

  return (
    <Command
      className="rounded-lg border shadow-md w-full max-w-2xl"
      placement="center"
    >
      <CommandInput
        placeholder="Type a command or search..."
        value={query}
        onValueChange={handleInputChange}
        className="p-4 text-[15px] "
      />
      <CommandList className="max-h-96 overflow-y-auto">
        {isLoading ? (
          <CommandItem className="p-4 text-gray-500">Loading...</CommandItem>
        ) : (
          <>
            {results.length == 0 && (
              <CommandEmpty className="p-4 text-gray-500">
                No results found.
              </CommandEmpty>
            )}

            {results?.suggestions.length > 0 && (
              <div className="p-2">
                <h3 className="text-sm font-semibold text-gray-500 mb-2">
                  Suggestions
                </h3>
                {results.suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    onSelect={() => setQuery(suggestion)}
                    className="flex items-center p-2 hover:bg-gray-100 rounded"
                  >
                    <Lightbulb className="mr-2 h-4 w-4 text-yellow-500" />
                    <span>{suggestion}</span>
                  </div>
                ))}
              </div>
            )}

            {results?.categories?.length > 0 && (
              <div className="p-2">
                <h3 className="text-sm font-semibold text-gray-500 mb-2">
                  Categories
                </h3>
                {results.categories.map((category) => (
                  <Link to={`/products?category=${category._id}`}>
                    <div
                      key={category._id}
                      className="flex items-center p-2 hover:bg-gray-100 rounded"
                    >
                      <SquareGanttChart className="mr-2 h-4 w-4 text-blue-500" />
                      <span>{category.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {results?.subcategories?.length > 0 && (
              <div className="p-2">
                <h3 className="text-sm font-semibold text-gray-500 mb-2">
                  Subcategories
                </h3>
                {results.subcategories.map((subcategory) => (
                  <Link to={`/products/${subcategory._id}`}>
                    <div
                      key={subcategory._id}
                      className="flex items-center p-2 hover:bg-gray-100 rounded"
                    >
                      <Layers2 className="mr-2 h-4 w-4 text-green-500" />
                      <span>{subcategory.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {results?.products?.length > 0 && (
              <div className="p-2">
                <h3 className="text-sm font-semibold text-gray-500 mb-2">
                  Products
                </h3>
                {results.products.map((product) => (
                  <Link to={`/product/${product._id}`}>
                    <div
                      key={product._id}
                      className="flex items-center p-2 hover:bg-gray-100 rounded"
                    >
                      <Shirt className="mr-2 h-4 w-4 text-purple-500" />
                      <span>{product.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {results?.relatedSearches?.length > 0 && (
              <div className="p-2">
                <h3 className="text-sm font-semibold text-gray-500 mb-2">
                  Related Searches
                </h3>
                {results.relatedSearches.map((relatedSearch, index) => (
                  <div
                    key={index}
                    onSelect={() => setQuery(relatedSearch)}
                    className="flex items-center p-2 hover:bg-gray-100 rounded"
                  >
                    <ArrowRight className="mr-2 h-4 w-4 text-red-500" />
                    <span>{relatedSearch}</span>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </CommandList>
    </Command>
  );
}
