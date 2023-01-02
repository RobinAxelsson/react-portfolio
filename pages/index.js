import { getSummary } from "../data-access/resume-repository";
import parse from "html-react-parser";
import Image from "next/image";

export async function getStaticProps() {
  return {
    props: {
      summaryData: getSummary(),
    },
  };
}

export default function Home({ summaryData }) {
  return (
    <div className="card-collection">
      <div className="card-general hero-section">
        <Image
          className="hero-section-image"
          src="/images/profile-sea-1290x1290.jpg"
          alt="picture of author"
          height={250}
          width={250}
        />
        <div className="hero-section-content">
          <h1><span className="accent-word">Robin</span> Salih Axelsson</h1>
          <h2>Full Stack Cloud Developer</h2>
          <h2>Software by Quokka</h2>
          <p>Specialized in Object Oriented Design,</p>
          <p>.NET, C#, Test Driven Development, CAD</p>
        </div>
      </div>
      <div className="card-general">
        <h2 className="card-title">About</h2>
        <p>{format(summaryData.content)}</p>
      </div>
    </div>
  );
}

function format(content) {
  return parse(content.replaceAll("\n", "<br />"));
}
