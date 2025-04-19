import NavBar from "../Home/NavBar/NavBar";
import Footer from "../components/Footer";
import Home from "../Home/Home/Home";
import { useEffect, useState } from "react";
import Loading from "../components/Lodanig";
import Portfolio from "../Home/Portfolio/Portfolio";
import About from "../Home/About/About";
import Contact from "../Home/Contact/Contact";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading state
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div>
      <div className="w-11/12 mx-auto min-h-[calc(100vh-100px)]">
        <NavBar></NavBar>
        <div className="mx-5">
          <Home></Home>
          <About></About>
          <Portfolio></Portfolio>
          <Contact></Contact>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;