import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { InputWrapper, SearchInput, TableTitle, Wrapper } from "./styled";
import { toast } from "react-toastify";
import { searchQuery } from "services/api";
import TracksTable from "components/TracksTable";
import SearchIcon from "assets/lens.svg";
import { SectionSubtitle } from "components/ui/Typography";
function Search(props) {
  const [search, setSearch] = useState("");
  const { tracks, loading } = useDebounceLoadData(search);
  return (
    <Wrapper>
      <InputWrapper>
        <SearchInput
          placeholder="Search.."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          SearchIcon={SearchIcon}
        />
      </InputWrapper>
      {search && tracks?.length > 0 && (
        <div>
          <TableTitle>Results by:{search}</TableTitle>
          <TracksTable loading={loading} tracks={tracks} />
        </div>
      )}

      {search && !loading && tracks?.length <= 0 && <SectionSubtitle>No results</SectionSubtitle>}
    </Wrapper>
  );
}

function useDebounceLoadData(search) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const fetchTimeout = useRef();
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await searchQuery(search);

        setData(data);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };
    if (!search.length == 0) {
      clearTimeout(fetchTimeout.current);
      fetchTimeout.current = setTimeout(() => loadData(), 500);
    } else {
      setData(null);
    }
  }, [search]);

  return {
    loading,
    tracks: data,
  };
}
Search.propTypes = {};

export default Search;
