import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <div>
        <nav>
          <ul>
            <li>
              <Link href="/" passHref>
                Start
              </Link>
            </li>
            <li>
              <Link href="/projects" passHref>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/stats" passHref>
                Coding Stats
              </Link>
            </li>
            <li>
              <Link href="/experience" passHref>
                Work Experience & Education
              </Link>
            </li>
            <li>
              <Link href="/tech" passHref>
                Technologies
              </Link>
            </li>
            <li>
              <Link href="/school-of-thought" passHref>
                School of Thought
              </Link>
            </li>
            <li>
              <Link href="/about" passHref>
                About
              </Link>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1T6D66JRzcRjqYrN8KlE58GevxIs82P4g/view?usp=share_link">
                CV
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label class="menu__btn" for="menu__toggle">
          <span></span>
        </label>

        <ul class="menu__box">
          <li>
            <a class="menu__item" href="#">
              Home
            </a>
          </li>
          <li>
            <a class="menu__item" href="#">
              About
            </a>
          </li>
          <li>
            <a class="menu__item" href="#">
              Team
            </a>
          </li>
          <li>
            <a class="menu__item" href="#">
              Contact
            </a>
          </li>
          <li>
            <a class="menu__item" href="#">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
