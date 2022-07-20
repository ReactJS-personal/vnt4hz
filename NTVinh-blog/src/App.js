import { Container, Grid } from "@material-ui/core";
import { useState } from "react";
// import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
//chat mess
import MessengerCustomerChat from "react-messenger-customer-chat";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//dark theme and light theme
import { ThemeProvider } from "styled-components";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
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

function App() {
  const [theme, toggleTheme] = Usedarkmode();
  const [isExcute, setIsExcute] = useState(true);
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  const handleExcute = (isExcute) => {
    setIsExcute(isExcute);
  };
  console.log(isExcute);
  return (
    <>
      {/* <FmotionScroll /> */}

      {isExcute ? (
        <RunExcute handleExcute={handleExcute} />
      ) : (
        <ThemeProvider theme={themeMode}>
          <Router>
            <Container className={"ctn_top"}>
              <Grid container spacing={7}>
                <ScrollToTop showBelow={280} />
                <Grid item lg={3} md={4} xs={12} sm={12}>
                  <Profile theme={theme} />
                  <GlobalStyles />
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
                        <Blog />
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
      )}
    </>
  );
}

export default App;
