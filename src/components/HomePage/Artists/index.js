import { useEffect, useState, useRef } from "react";
import axios from "axios";
import {
  Wrapper,
  TitleRow,
  ButtonsWrapper,
  Button,
  ArtistsSkeletonWrapper,
  ArtistsWrapper,
  ArtistLoaderWrapper,
} from "./styled";
import { SectionSubtitle } from "components/ui/Typography";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Back, Next } from "components/ui/Icons";
import IconButton from "components/ui/IconButton";
import ArtistCard from "./ArtistCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { GreyTitle } from "pages/Home/styled";
import PropTypes, { bool } from "prop-types";
import { useWindowSize } from "hooks/useWindowSize";
import { breakPoints } from "styles/BreakPoints";
// import required modules

export default function Artists({ artists, loading }) {
  const { width } = useWindowSize();
  const isMobileLayout = width < breakPoints.md;
  return (
    <Wrapper>
      <ArtistsWrapper>
        {loading &&
          [1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <ArtistLoaderWrapper key={num}>
              <Skeleton
                wrapper={ArtistsSkeletonWrapper}
                style={{ maxWidth: "100%" }}
                height={isMobileLayout ? 75 : 95}
                width={isMobileLayout ? 75 : 95}
                circle={true}
              />
              <Skeleton
                wrapper={ArtistsSkeletonWrapper}
                style={{ maxWidth: "100%" }}
                height={isMobileLayout ? 19 : 27}
              />
            </ArtistLoaderWrapper>
          ))}
        {
          <Swiper slidesPerView="auto" spaceBetween={30} modules={[Pagination]}>
            {" "}
            {!loading &&
              artists?.map((artist) => (
                <SwiperSlide key={artist.id} style={{ width: "auto" }}>
                  <ArtistCard id={artist.id} name={artist.name} image={artist.picture_medium} />{" "}
                </SwiperSlide>
              ))}{" "}
          </Swiper>
        }
      </ArtistsWrapper>
    </Wrapper>
  );
}

Artists.propTypes = {
  loading: PropTypes.bool,
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      picture_medium: PropTypes.string,
    }),
  ),
};
