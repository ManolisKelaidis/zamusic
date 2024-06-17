import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { InputWrapper, SearchInput, TableTitle, Wrapper } from "./styled";
import { toast } from "react-toastify";
import { searchQuery } from "services/api";
import TracksTable from "components/TracksTable";
import SearchIcon from "assets/lens.svg";
import { SectionSubtitle } from "components/ui/Typography";
function Search(props) {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await searchQuery(search);

        setTracks(data);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };
    if (!search.length == 0) loadData();
  }, [search]);
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

Search.propTypes = {};

export default Search;
