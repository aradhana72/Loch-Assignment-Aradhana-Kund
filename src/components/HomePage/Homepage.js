import Banner from "../Banner/Banner";
import SignUp from "../SignUp/SignUp";
import "./Homepage.css";

const HomePage = () => {
  return (
    <>
      <div className="app-container">
        <Banner />
        <SignUp />
      </div>
    </>
  );
};

export default HomePage;
