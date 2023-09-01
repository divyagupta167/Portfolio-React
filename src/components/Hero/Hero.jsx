import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
 
export const Hero = () => {
  return (
    <section  id="about"  className={styles.container}>
     <div className={styles.about}>
     <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&apos;m Divya</h1>
        <p  className={styles.description}>
          I am an aspiring Frontend Web Developer. I love to learn new
          technologies and build cool stuffs.Reach out if you&apos;d like to learn
          more!
        </p>
        <a href="mailto:dg306255@gmail.com" className={styles.contactBtn}>
          Contact Me &#8594;
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Divya Gupta Image"
        className={styles.heroImg}
      />
     </div>
      
    </section>
  );
};
