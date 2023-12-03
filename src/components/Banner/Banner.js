import "./Banner.css";
import sliderImg1 from "../../assets/sliderImg1.png";
import sliderImg2 from "../../assets/sliderImg2.png";
import sliderImg3 from "../../assets/sliderImg3.png";
import bellIcon from "../../assets/bellIcon.png";
import heroImage2 from "../../assets/heroImage2.png";
import eyeIcon from "../../assets/eyeIcon.png";
import lochIcon from "../../assets/lochIcon.png";
import testimonialImg1 from "../../assets/testimonialImg1.png";
import testimonialImg2 from "../../assets/testimonialImg2.png";
import testimonialImg3 from "../../assets/testimonialImg3.png";

const Banner = () => {
  return (
    <>
      <div className="banner">
        {/* Part 1 */}
        <div className="flex-row">
          <div className="div1">
            <img src={bellIcon} alt="bellIcon" />
            <div className="showWeb">
              <h2 style={{ marginTop: "8px" }}>Get notified when a</h2>
              <h2 className="negativeMarginTop1">highly correlated </h2>
              <h2 className="negativeMarginTop1"> whale makes a move</h2>
            </div>
            <div className="showMobile">
              <h2 style={{ marginTop: "8px" }}>
                Get notified when a highly correlated whale makes a move{" "}
              </h2>
            </div>
            <div className="showWeb">
              <p style={{ marginTop: "-8px" }}>
                Find out when a certain whale moves
              </p>
              <p className="negativeMarginTop2">
                more than any preset amount on-chain or
              </p>
              <p className="negativeMarginTop2">
                when a dormant whale you care about
              </p>
              <p className="negativeMarginTop2"> becomes active.</p>
            </div>
            <div className="showMobile">
              <p style={{ marginTop: "-8px" }}>
                Find out when a certain whale moves more than any preset amount
                on-chain or when a dormant whale you care about becomes active.
              </p>
            </div>
          </div>
          <div
            style={{
              padding: "16px 16px 0px 16px",
            }}
          >
            <div class="slider">
              <div class="slide-track">
                <div class="slide">
                  <img src={sliderImg1} alt="" />
                </div>
                <div class="slide">
                  <img className="sliderImg" src={sliderImg2} alt="" />
                </div>
                <div class="slide">
                  <img className="sliderImg" src={sliderImg3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* part 2 */}
        <div className="flex-row">
          <div className="showWeb">
            <img
              className="heroImage2Style"
              src={heroImage2}
              alt="heroImage2"
            />
          </div>
          <div className="div1" style={{ marginRight: "48px" }}>
            <div className="eyeiconStyle">
              <img src={eyeIcon} alt="eyeIcon" />
            </div>
            <div className="showWeb">
              <h2 style={{ marginTop: "8px", textAlign: "right" }}>
                Watch what the
              </h2>
              <h2 style={{ textAlign: "right" }} className="negativeMarginTop1">
                whales are doing
              </h2>
            </div>
            <div className="showMobile">
              <h2 style={{ marginTop: "8px" }}>
                Watch what the whales are doing
              </h2>
            </div>
            <div className="showWeb">
              <p style={{ marginTop: "-8px", textAlign: "right" }}>
                All whales are not equal. Know exactly
              </p>
              <p style={{ textAlign: "right" }} className="negativeMarginTop2">
                what the whales impacting YOUR
              </p>
              <p style={{ textAlign: "right" }} className="negativeMarginTop2">
                portfolio are doing.
              </p>
            </div>
            <div className="showMobile">
              <p style={{ marginTop: "-8px" }}>
                All whales are not equal. Know exactly what the whales impacting
                YOUR portfolio are doing.
              </p>
            </div>

            <div className="showMobile">
              <img
                className="heroImage2Style"
                src={heroImage2}
                alt="heroImage2"
              />
            </div>
          </div>
        </div>

        {/* part 3 */}
        <div className="part3Style">
          <div className="testimonialHeaderDiv">
            <h3 className="testimonialHeader">Testimonials</h3>
          </div>
          <hr className="hrStyle"></hr>
          <div className="flex-row">
            <div className="showWeb">
              <img src={lochIcon} className="lochIconStyle" alt="lochIcon" />
            </div>
            <div style={{ display: "flex" }}>
              <img
                src={lochIcon}
                className="lochIconStyle showMobile"
                alt="lochIcon"
              />
              <img
                className="testimonialImg"
                src={testimonialImg1}
                alt="testimonialImg1"
              />
              <img
                className="testimonialImg"
                src={testimonialImg2}
                alt="testimonialImg2"
              />
              <img
                className="testimonialImg"
                src={testimonialImg3}
                alt="testimonialImg3"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
