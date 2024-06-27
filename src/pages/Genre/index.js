import TracksTable from "components/TracksTable";
import { Music } from "components/ui/Icons";
import { MainTitle, SmallText } from "components/ui/Typography";
import React from "react";
import { useParams } from "react-router-dom";

import { loadGenre } from "services/api";
import { SongsCountWrapper, TextWrapper, Wrapper } from "./styled";
import Skeleton from "react-loading-skeleton";
import { SmallArtistText } from "pages/Artist/styled";
import { useLoadData } from "hooks/useLoadData";
function Genre() {
  const { genreId } = useParams();

  const [genre, loading] = useLoadData(() => loadGenre(genreId));
  return (
    <Wrapper>
      <TextWrapper>
        <MainTitle>{loading ? <Skeleton width={200} /> : genre?.genre.name}</MainTitle>
        <SongsCountWrapper>
          <Music />
          <SmallArtistText>
            {loading ? <Skeleton width={40} /> : genre?.tracks?.data?.length} Songs
          </SmallArtistText>
        </SongsCountWrapper>
      </TextWrapper>

      <TracksTable tracks={genre?.tracks.data} loading={loading} />
    </Wrapper>
  );
}

export default Genre;
