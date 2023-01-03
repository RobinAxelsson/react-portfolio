import { getWorkLife, getEducation } from "../data-access/resume-repository";
import { generateUID } from "../framework-utils/generate-uid";
import { parseDate } from "../framework-utils/parse-date";

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
    <div className="card-collection">
      <div className="card-general">
        <h2 className="card-title">Work Experience</h2>
        <div className="card-grid grid-column-3">
          {worklife.map(({ company, title, start, end }) => (
            <>
              <div className="card-grid-item" key={generateUID()}>
                {parseDate(start)} - {parseDate(end)}
              </div>
              <div className="card-grid-item" key={generateUID()}>
                {company}
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
                {parseDate(start)} - {parseDate(end)}
              </div>
              <div className="card-grid-item" key={generateUID()}>
                {title}
              </div>
              <div className="card-grid-item" key={generateUID()}>
                {school}
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}


