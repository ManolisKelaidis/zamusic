import styled from "styled-components";

export const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;
  gap: 35px;
  overflow: hidden;
`;
export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ArtistsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 116px;
  margin-top: 20px;
`;

export const ArtistsSkeletonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const ArtistLoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
`;
