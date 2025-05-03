import { Container, Row, Col } from "react-bootstrap";
import classes from "./mission-and-vision.module.css";
import MissionAndVissonContainer from "components/ui/mission-and-vision-container";

const missionsList = [
  <p key="m1">Expand our global network of suppliers and customers.</p>,
  <p key="m2">
    Increase our market share in the international coffee trading industry.
  </p>,
  <p key="m3">Enhance our customer service and support.</p>,
];
const vissionsList = [
  <p key="m1">
    Bridge the gap between suppliers and consumers globally, building a premium
    coffee enthusiast network.
  </p>,
  <p key="m2">
    Develop sustainable coffee business partnerships, upholding integrity and
    social responsibility.
  </p>,
];
const whyUsList = [
  <p key="m1">
    <span>Quality:</span> We are committed to delivering the highest-quality
    green coffee beans.
  </p>,
  <p key="m2">
    <span>Integrity:</span> We operate with transparency, honesty, and fairness
    in all our dealings.
  </p>,
  <p key="m3">
    <span>Sustainability:</span> We promote environmentally friendly and
    socially responsible practices throughout our supply chain.
  </p>,
  <p key="m4">
    <span>Customer satisfaction:</span> We strive to exceed our customers&rsquo;
    expectations through exceptional service and support.
  </p>,
];
const whatWeDoList = [
  <p key="m1">
    <span>Green coffee beans:</span> We deliver the highest-quality green coffee
    beans.
  </p>,
  <p key="m2">
    <span>Coffee sourcing:</span> We promote direct trade with farmers and
    cooperatives.
  </p>,
  <p key="m3">
    <span>Coffee logistics:</span> Warehousing, transportation, and delivery.
  </p>,
];

export default function MissionAndVisson() {
  return (
    <section id="mission-and-vision" className={classes.mission}>
      <Container className="text-center">
        <div data-aos="fade-up">
          <h1>Mission and Vission </h1>
        </div>
        <Row style={{ marginBottom: "20px" }}>
          <Col lg={6} data-aos="fade-down-right">
            <MissionAndVissonContainer title="Mission" list={missionsList} />
          </Col>
          <Col lg={6} data-aos="fade-down-left">
            <MissionAndVissonContainer title="Visson" list={vissionsList} />
          </Col>
        </Row>

        <Row>
          <Col lg={6} data-aos="fade-up-right">
            <MissionAndVissonContainer title="Why Us?" list={whyUsList} />
          </Col>
          <Col lg={6} data-aos="fade-up-left">
            <MissionAndVissonContainer
              title="What we do?"
              list={whatWeDoList}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
