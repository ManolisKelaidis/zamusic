import { useState, useEffect } from "react";
import { Hero, Genres, Artists } from "components/HomePage";
import { AsideStyled, GreyTitle, TrendsAndArtistsSection } from "./styled";

import axios from "axios";
import "swiper/css";
import "swiper/css/pagination";
import { SectionSubtitle, SectionTitle } from "components/ui/Typography";
import { loadCharts, loadTopTracks } from "services/api";
import { toast } from "react-toastify";
import TracksTable from "components/TracksTable";
import { ContentWrapper } from "components/Layout";
function Home() {
  const [chart, setChart] = useState([]);
  const [radio, setRadio] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [chart, radio] = await Promise.all([loadCharts(), loadTopTracks()]);

        setChart(chart);
        setRadio(radio);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);
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
