import { Col, Container } from "react-bootstrap";
import classes from "./about-us.module.css";
export default function AboutUs() {
  return (
    <section id="about-us" className={classes.aboutUs}>
      <Col
        sm={10}
        className="offset-sm-1 text-center py-5 text-center"
        data-aos="zoom-in-down"
      >
        <h1>About Us</h1>
        <p>
          Coffee Port is a leading international coffee trading company,
          specializing in the import and export of high-quality green coffee
          beans. Established in 2008, we have built a reputation for
          reliability, expertise, and a passion for coffee. Over the years, we
          have established a strong network of suppliers, partners, and
          customers across the globe, with a vision to bridge the gap between
          coffee producers and consumers worldwide.
        </p>
      </Col>
    </section>
  );
}
