import { Hero, Genres, Artists } from "components/HomePage";
import { AsideStyled, GreyTitle, TrendsAndArtistsSection } from "./styled";

import "swiper/css";
import "swiper/css/pagination";

import { loadCharts, loadTopTracks } from "services/api";

import TracksTable from "components/TracksTable";

import { useLoadData } from "hooks/useLoadData";
import { SectionTitle } from "components/ui/Typography";
function Home() {
  const [data, loading] = useLoadData(() => Promise.all([loadCharts(), loadTopTracks()]));
  const [chart, radio] = data || [];

  return (
    <main>
      <Hero tracks={radio} />
      <Genres />
      <TrendsAndArtistsSection>
        <div>
          <GreyTitle>Global</GreyTitle>
          <SectionTitle>Top Artists</SectionTitle>
          <TracksTable loading={loading} tracks={chart?.tracks?.data} />
        </div>
        <AsideStyled>
          {" "}
          <GreyTitle>Global</GreyTitle>
          <SectionTitle>Top Artists</SectionTitle>
          <Artists artists={chart?.artists?.data} loading={loading} />
        </AsideStyled>
      </TrendsAndArtistsSection>
    </main>
  );
}

export default Home;
