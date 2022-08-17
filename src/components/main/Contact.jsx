import Container from "../shared/Container";

import styles from "../../styles/Contact.module.css";

const Contact = () => {
  return (
    <Container className={styles.contact}>
      <section id="contact">
        <div className={styles.contact__info}>
          <h2 className={styles.contact__title}>Let's Talk</h2>
          <p>
            I’m interested in remote and freelance opportunities. However, if
            you have other requests or questions, please don’t hesitate to use
            the form.
          </p>
        </div>
        <form
          className={styles.contact__form}
          name="contact v1"
          data-netlify="true"
          onSubmit="submit"
          method="post"
        >
          <div className={styles.form__inputs}>
            <input type="hidden" name="form-name" value="contact v1" />
            <div className={styles.contact__form__item}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </div>
            <div className={styles.contact__form__item}>
              <label htmlFor="email">E-mail</label>
              <input type="email" name="email" />
            </div>
          </div>
          <div className={styles.contact__form__item}>
            <label htmlFor="message">Message</label>
            <input type="message" name="message" />
          </div>
          <button type="submit" className={styles.contact__btn}>
            Send Message
          </button>
        </form>
      </section>
    </Container>
  );
};

export default Contact;
