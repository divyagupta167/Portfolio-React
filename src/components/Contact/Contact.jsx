import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <div id="contact">
      <footer  className={styles.container}>
      <div className={styles.text}>
        <h2>Contact Me </h2>
        <p>Feel free to reach out &#8594;</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img className={styles.image} src={getImageUrl("contact/emailIcon.png")} alt="email" />
          <a href="mailto:dg306255@gmail.com">dg306255@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img  className={styles.image} src={getImageUrl("contact/githubIcon.png")} alt="github" />
          <a href="https://github.com/divyagupta167">
            github.com/divyagupta167
          </a>
        </li>
        <li className={styles.link}>
          <img className={styles.image} src={getImageUrl("contact/linkedinIcon.png")} alt="linkedIn" />
          <a href="https://www.linkedin.com/in/divya-guptaa/">
            linkedin.com/in/divya-guptaa/
          </a>
        </li>
      </ul>
    </footer>
    </div>
  );
};
