import { useEffect, useState, useRef } from "react";
import axios from "axios";
import {
  Wrapper,
  TitleRow,
  ButtonsWrapper,
  Button,
  GenresWrapper,
  GenreSkeletonWrapper,
} from "./styled";
import { SectionSubtitle } from "components/ui/Typography";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Back, Next } from "components/ui/Icons";
import IconButton from "components/ui/IconButton";
import GenreCard from "./GenreCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { loadGenres } from "services/api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useWindowSize } from "hooks/useWindowSize";
import { breakPoints } from "styles/BreakPoints";

export default function Genres() {
  const { width } = useWindowSize();
  console.log(width);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);

  const sliderRef = useRef(null);

  const handlePrev = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  };
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await loadGenres();

        setGenres(data);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <Wrapper>
      <TitleRow>
        <SectionSubtitle>Genres</SectionSubtitle>
        <ButtonsWrapper>
          <Button onClick={handlePrev} withBackground width={36} height={36}>
            <Back />
          </Button>

          <Button onClick={handleNext} withBackground width={36} height={36}>
            <Next />
          </Button>
        </ButtonsWrapper>
      </TitleRow>

      <GenresWrapper>
        {!loading &&
          [1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <Skeleton
              wrapper={GenreSkeletonWrapper}
              style={{ maxWidth: "100%" }}
              key={num}
              height={width < breakPoints.md ? 95 : 116}
              width={width < breakPoints.md ? 137 : 220}
              borderRadius={25}
            />
          ))}
        <Swiper ref={sliderRef} slidesPerView="auto" spaceBetween={30} modules={[Pagination]}>
          {loading &&
            genres?.map((genre) => (
              <SwiperSlide key={genre.id} style={{ width: "auto" }}>
                <Link to={`genres/${genre.id}`}>
                  <GenreCard name={genre.name} backgroundImage={genre.picture_medium} />{" "}
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </GenresWrapper>
    </Wrapper>
  );
}
