import Container from "../shared/Container";

import styles from "../../styles/Contact.module.css";

const Contact = () => {
  return (
    <Container className={styles.contact}>
      <section id="contact">
        <div className={styles.contact__info}>
          <h2 className={styles.contact__title}>Let's Talk</h2>
          <p>
            I’m interested in remote or freelance opportunities. However, if you
            have other requests or questions, please don’t hesitate to rech out.
          </p>
        </div>

        <a href="mailto:evanskwofie67@gmail.com" className={styles.contact_cta}>
          Let's Talk
        </a>
      </section>
    </Container>
  );
};

export default Contact;
