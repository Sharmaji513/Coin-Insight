import { fetchSearch } from '../services/fetchSearch';
import { useQuery } from "react-query";
import { useState } from 'react';

const useFetchSearch = () => {
    const [searchText, setSearchText] = useState("");

    const { data, isError, isLoading, error } = useQuery(["searchData", searchText],() => fetchSearch(searchText),
        {
            cacheTime: 1000 * 60 * 2,
            staleTime: 1000 * 60 * 2,
            enabled: !!searchText, // Only run query if there's a searchText
        }
    );

    return {
        searchText,
        setSearchText,
        data,
        isError,
        isLoading,
        error
    };
};

export default useFetchSearch;
