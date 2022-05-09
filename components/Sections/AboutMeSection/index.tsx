import Image from "next/image";
export default function AboutMeSection({ styles }: { styles: any }) {
  return (
    <section className={`container  ${styles["section"]}`} id="/">
      <div className={styles["section__content"]}>
        <div>
          <h1 className={styles["section__title"]}>
            <span> {"Hi!, I'm brisa díaz\n"}</span>
            <br />
            {"Full Stack Developer"}
            <br />& Frontend Specialist
          </h1>

          <p className={styles["section__text"]}>
            I am a self-taught developer with solid experience in the javascript
            ecosystem having developed fully functional websites and web
            applications as side projects, using technologies at the forefront in terms of
            improving the user experience, development process and scalability
            of digital products.
          </p>
        </div>
      </div>
      <div className={styles["section__illustration-container"]}>
        {" "}
        <div className={styles["avatar"]}>
          <Image
            src="/img/avatar.png"
            alt="avatar"
            width={320}
            height={320}
            placeholder="blur"
            blurDataURL="/img/avatar.png"
          />
        </div>
      </div>
    </section>
  );
}
