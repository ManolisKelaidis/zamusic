import TracksTable from "components/TracksTable";
import { Music } from "components/ui/Icons";
import { MainTitle, SmallText } from "components/ui/Typography";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { loadGenre } from "services/api";
import { SongsCountWrapper, TextWrapper, Wrapper } from "./styled";
import Skeleton from "react-loading-skeleton";
function Genre() {
  const { genreId } = useParams();

  const [genre, setGenre] = useState();
  const [loading, setLoading] = useState(false);
  console.log(genre);
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await loadGenre(genreId);
        console.log(data);
        setGenre(data);
      } catch (err) {
        toast.error(err.message);
      } finally {
        console.log(genre);
        setLoading(false);
      }
    };

    loadData();
  }, []);
  return (
    <Wrapper>
      <TextWrapper>
        <MainTitle>{loading ? <Skeleton width={200} /> : genre?.genre.name}</MainTitle>
        <SongsCountWrapper>
          <Music />
          <SmallText>
            {loading ? <Skeleton width={40} /> : genre?.tracks?.data.length} Songs
          </SmallText>
        </SongsCountWrapper>
      </TextWrapper>

      <TracksTable tracks={genre?.tracks.data} loading={loading} />
    </Wrapper>
  );
}

export default Genre;
