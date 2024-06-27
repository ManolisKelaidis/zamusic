import TracksTable from "components/TracksTable";
import { Music } from "components/ui/Icons";
import { MainTitle } from "components/ui/Typography";
import React from "react";
import { useParams } from "react-router-dom";

import { loadArtist } from "services/api";
import {
  ArtistWrapper,
  BigArtistImage,
  SmallArtistText,
  SongsCountWrapper,
  TextWrapper,
  Wrapper,
} from "./styled";
import Skeleton from "react-loading-skeleton";
import { useLoadData } from "hooks/useLoadData";

function Artist() {
  const { artistId } = useParams();
  const [artist, loading] = useLoadData(() => loadArtist(artistId));

  return (
    <Wrapper>
      <ArtistWrapper>
        <BigArtistImage src={artist?.artist?.picture_big} />
        <TextWrapper>
          <MainTitle>{loading ? <Skeleton width={200} /> : artist?.artist.name}</MainTitle>
          <SongsCountWrapper>
            <Music />
            <SmallArtistText>
              {loading ? <Skeleton width={40} /> : artist?.artist?.nb_fan} Fans
            </SmallArtistText>
          </SongsCountWrapper>
        </TextWrapper>
      </ArtistWrapper>
      <TracksTable tracks={artist?.tracks} loading={loading} />
    </Wrapper>
  );
}

export default Artist;
