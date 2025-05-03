import Button from "components/ui/button";
import classes from "./hero.module.css";
import { Container } from "react-bootstrap";

export default function Hero(props) {
  return (
    <section id="hero" className={classes.hero}>
      <Container>
        <h1>
          <div className={classes.text} >
            <div data-aos="fade-up">Connecting</div>
            <div data-aos="fade-up" data-aos-delay="400">
              coffee lovers
            </div>
            <div data-aos="fade-right" data-aos-delay="800" className="pulse">
              <span className="span">worldwide,</span> 
            </div>
            <div data-aos="fade-up" data-aos-delay="1200">
              one bean at a time.
            </div>
          </div>
        </h1>{" "}
        <Button link={props.onClick} style={{ marginTop: "100px" }}>
          Contact us
        </Button>
      </Container>
    </section>
  );
}
