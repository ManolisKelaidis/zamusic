import React, { useEffect, useReducer } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/Theme";
import { MainTitle, SectionTitle } from "components/ui/Typography";

import { GlobalStyles } from "styles/Global";
import { SkeletonTheme } from "react-loading-skeleton";
import Home from "pages/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "components/Header";
import Player from "components/Player";
import "rc-slider/assets/index.css";
import { initialState, playerReducer } from "context/playerReducer";
import { PlayerContext, PlayerDispatchContext } from "context/playerContext";
import { Routes, Route } from "react-router-dom";
import Search from "pages/Search";
import { Layout } from "components/Layout";
import { ErrorBoundary } from "react-error-boundary";
import Error from "pages/Error";
import { setStorageValue } from "services/localStorage";
import Genre from "pages/Genre";
import AppRouter from "AppRouter";
function App() {
  const [state, dispatch] = useReducer(playerReducer, initialState);

  useEffect(() => {
    setStorageValue("savedTracksIds", state.savedTracksIds);
  }, [state.savedTracksIds]);
  return (
    <PlayerContext.Provider value={state}>
      <PlayerDispatchContext.Provider value={dispatch}>
        <ThemeProvider theme={theme}>
          <SkeletonTheme
            baseColor={theme.colors.secondaryBlack}
            highlightColor={theme.colors.lightWhite}
          >
            <GlobalStyles />
            <AppRouter />
          </SkeletonTheme>
          <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </ThemeProvider>
      </PlayerDispatchContext.Provider>
    </PlayerContext.Provider>
  );
}

export default App;
