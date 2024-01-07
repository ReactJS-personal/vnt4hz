import { Container, Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import useMobileDetect from "./components/hooks/useMobile";
import screenOrientation from "./utils/sreenOrientation";
// import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
//chat mess
import MessengerCustomerChat from "react-messenger-customer-chat";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
//dark theme and light theme
import { ThemeProvider } from "styled-components";
import "./App.css";
import GridAnimated from "./components/AnimationPoint/GridAnimated";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import useKey from "./components/hooks/useKey";
import Profile from "./components/Profile/Profile";
import RunExcute from "./components/RunExcute";
import ScrollToTop from "./components/ScrollTop/ScrollToTop";
import RouterScrollToTop from "./help/RouterScrollToTop";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Notfound from "./pages/Notfound/Notfound";
import PortFLO from "./pages/Portfolio/PortFLO";
import Resume from "./pages/Rsm/Resume";
import { darkTheme, GlobalStyles, lightTheme } from "./styles/globalStyles";
import { Usedarkmode } from "./styles/Usedarkmode";
// import StarEffect from "./themes/Effect/StartEffect";

function App() {
  const [theme, toggleTheme] = Usedarkmode();
  const [isExcute, setIsExcute] = useState(true);
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  const handleExcute = (isExcute) => {
    setIsExcute(isExcute);
  };

  useKey("ctrlv", () => setIsExcute(false));

  // check mobile
  const { isMobile } = useMobileDetect();
  const [mobile, setMobile] = useState(isMobile);
  useEffect(() => {
    const landscape = screenOrientation(window);
    if (landscape) {
      setMobile(false);
    }
  }, []);
  useEffect(() => {
    const landscape = screenOrientation(window);
    window.addEventListener(
      "orientationchange",
      () => {
        if (landscape) {
          setMobile(true);
        } else {
          setMobile(false);
        }
      },
      false
    );
  }, [mobile]);
  return (
    <>
      {/* <FmotionScroll /> */}
      {/* <StarEffect /> */}
      {isExcute ? (
        <>
          <RunExcute handleExcute={handleExcute} isMobile={mobile} />
        </>
      ) : (
        <>
          <ThemeProvider theme={themeMode} isMobile={mobile}>
            <Router>
              <Container
                className={"ctn_top"}
                style={{ position: "relative", zIndex: 999 }}
              >
                <GridAnimated w={"280px 280px"} emoji={""} />
                <GlobalStyles />
                <Grid container spacing={7}>
                  <ScrollToTop showBelow={280} />
                  <Grid item lg={3} md={4} xs={12} sm={12}>
                    <Profile theme={theme} />
                  </Grid>
                  <Grid item xs>
                    <RouterScrollToTop />
                    <Header theme={theme} toggleTheme={toggleTheme} />
                    <div className="main-content container_shadow">
                      <Switch>
                        <Route exact path="/">
                          <Resume theme={theme} />{" "}
                        </Route>
                        <Route path="/pflio">
                          <PortFLO />
                        </Route>
                        <Route path="/blog">
                          <Blog theme={theme} />
                        </Route>
                        <Route path="/contact">
                          <Contact />
                        </Route>
                        <Route>
                          <Notfound />
                        </Route>
                      </Switch>
                    </div>
                    <Footer />
                  </Grid>
                </Grid>
                <MessengerCustomerChat
                  pageId="108949620688467"
                  appId="1121879694996668"
                />
              </Container>
            </Router>
          </ThemeProvider>
        </>
      )}
    </>
  );
}

export default App;
