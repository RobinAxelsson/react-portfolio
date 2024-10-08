import { MobileNav } from "../__site_components/mobile-nav";
import { WideNav } from "../__site_components/wide-nav";
import styles from './site-header.module.scss'

export const Header = () => {
  return (
    <header className={styles.site_header}>
      <WideNav navLinks={navLinks} />
      <MobileNav navLinks={navLinks}/>
    </header>
  );
};

const navLinks = [
  "Start;/",
  "Technologies;/tech",
  "School of Thought;/school-of-thought",
  "Q&A;/qa",
  "CV;/CV.html",
  "GitHub;https://github.com/RobinAxelsson"
].map(x => {
  const split = x.split(';');
  if(split.length !== 2) throw new Error("Should be two, got: " + split)
  return {
    title: split[0],
    link: split[1]
}})
