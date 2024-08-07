import "./Introduction.css";
import { Subheading } from "../../components/TextElements/Subheading";
import { NormalText } from "../../components/TextElements/NormalText";
import { ImageComponent } from "../../components/ImageComponents/ImageComponent";
import PropTypes from "prop-types";

export const Introduction = ({ avatarUrl }) => {
  const introText =
    "As a Web Developer with a background in project management, I blend technical expertise with leadership skills to create exceptional digital solutions. I specialize in crafting intuitive user interfaces and driving projects forward. Let's collaborate to bring your vision to life!";

  return (
    <section className="introduction-container">
      <ImageComponent
        divClassName={"profile-image"}
        elementClassName={"circle-image"}
        imagePath={avatarUrl}
        imageAltText={"Profile-picture of Erica"}
      />
      <div className="headings">
        <Subheading text={"Hi, I'm Erica Mechler"} />
        <h1 className="introduction-heading">Web Developer</h1>
      </div>
      <div className="intro-text">
        <NormalText text={introText} />
      </div>
    </section>
  );
};

// PropTypes validation for Introduction component
Introduction.propTypes = {
  avatarUrl: PropTypes.string.isRequired, // Required string prop
};
