import { getWorkLife, getEducation } from "../data-access/resume-repository";
import { generateUID } from "../framework-utils/generate-uid";
import siteDateLayout from "../framework-utils/site-date-layout";
import CardContainer from "../components/micro-components/card-container"

export async function getStaticProps() {
  return {
    props: {
      worklife: getWorkLife(),
      education: getEducation(),
    },
  };
}

export default function ExperiencePage({ worklife, education }) {
  return (
    <CardContainer>
      <div className="card-general">
        <h2 className="card-title">Work Experience</h2>
        <div className="card-grid grid-column-3">
          {worklife.map(({ company, title, start, end }) => (
            <>
              <div className="card-grid-item" key={generateUID()}>
                {siteDateLayout(start)} - {siteDateLayout(end)}
              </div>
              <div className="card-grid-item" key={generateUID()}>
              {(() => {
                  if (company !== "Software By Quokka") return company;
                  return (<a href="https://quokka.se">Software By Quokka</a>)
                })()}
              </div>
              <div className="card-grid-item" key={generateUID()}>
                {title}
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="card-general">
        <h2 className="card-title">Education</h2>
        <div className="card-grid grid-column-3">
          {education.map(({ title, school, start, end }) => (
            <>
              <div className="card-grid-item" key={generateUID()}>
                {siteDateLayout(start)} - {siteDateLayout(end)}
              </div>
              <div className="card-grid-item" key={generateUID()}>
                {(() => {
                  if (title !== ".NET Developer") return title;
                  return (<a href="https://teknikhogskolan.se/utbildningar/net-utvecklare/">.NET Developer</a>)
                })()}
              </div>
              <div className="card-grid-item" key={generateUID()}>
                {school}
              </div>
            </>
          ))}
        </div>
      </div>
    </CardContainer>
  );
}
