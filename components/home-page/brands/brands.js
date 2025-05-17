import classes from "./brands.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Product from "../../ui/product";
export default function Brands() {
  return (
    <section id="brands" className={classes.brands}>
      <Container>
        <div className="text-center">
          <div data-aos="fade-up">
            <h1>Our Brands </h1>
          </div>
          <Row>
            <Col lg={6} data-aos="fade-right">
              <Product
                width={100}
                height={150}
                fixed
                className="the-captin-logo"
                title="The Captin"
                image="/the-captin-logo.png"
                description="The Captain Commercial Coffee A reliable choice for businesses, the Captain is a commercial coffee that delivers a consistent and satisfying cup every time. With a balanced flavour profile and a smooth taste, the Captain is perfect for who’s  looking for a high-quality coffee."
              />
            </Col>
            <Col lg={6} data-aos="fade-left">
              <Product
                title="Speciality Coffee"
                width={500}
                className="ersha-logo"
                height={150}
                image="/ersah-logo.png"
                description="Ersha Speciality Coffee Indulge in the rich Flavors and aromas of Ersha, our premium coffee blend. Sourced from the finest coffee beans and carefully crafted to bring out the perfect balance of acidity and body, Ersha is a true delight for coffee connoisseurs."
              />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
