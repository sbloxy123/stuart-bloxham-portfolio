import Image from "next/image";
import styles from "./Bio.module.css";

const Bio = () => {
  return (
    <section className="container">
      <Image
        src="/images/me.jpeg"
        alt="me"
        width={200}
        height={200}
        className={`${styles.me_img} rounded-circle`}
      />
      <article className={styles.bio_text}>
        <p>
          Hi, I&lsquo;m Stuart, a Junior Fullstack Developer based in
          Hertfordshire with over 7 years of experience in client-facing roles.
          Prior to completing a Coding Bootcamp with Le Wagon, I was self-taught
          in
          <strong> HTML, CSS and Javascript, React & Gatsby</strong>.
        </p>
        <p>
          At Le Wagon, I learned a multitude of
          <strong> Full Stack</strong> disciplines such as
          <strong>
            Git workflows, Ruby & Ruby on Rails, Databases, Design systems,
            Javascript & working with APIs
          </strong>
          . Working on the course with &quot;buddies&quot; and teammates allowed
          me to experience working as a team remotely, communicating through
          <strong> Slack</strong> and Zoom.
        </p>
        <p>
          With a background in sales and dealing with professional clients, I
          look forward to the transition to becoming an effective developer with
          a strong understanding of client needs and expectations. With a
          genuine interest in Web Development, I am excited to continue learning
          in the field and build a successful career.
        </p>
        <p>
          I&lsquo;m currently learning <strong>Next.js and Typescript</strong>
          whilst keeping an eye on <strong> Remix & Svelte</strong> which I feel
          could be valuable frameworks to have under my belt.
        </p>
      </article>
    </section>
  );
};

export default Bio;
