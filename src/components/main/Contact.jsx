import { useGetTheme } from "../../utils/useGetTheme";

import styles from "../../styles/Contact.module.css";

const Contact = () => {
  const { theme } = useGetTheme();
  const returnClasses =
    theme === "light" ? `${styles.all_light}` : `${styles.all_dark}`;
  return (
    <div className={`${styles.contact} ${returnClasses}`}>
      <section id="contact">
        <div className={styles.contact__info}>
          <h2 className={styles.contact__title}>Let's Talk</h2>
          <p>
            I’m interested in remote or freelance opportunities. However, if you
            have other requests or questions, please don’t hesitate to reach
            out. I will do well to respond as quickly as possible.
          </p>
        </div>

        <a href="mailto:evanskwofie67@gmail.com" className={styles.contact_cta}>
          Let's Talk
        </a>
      </section>
    </div>
  );
};

export default Contact;
