import React from "react";
import styles from "./index.module.css";

import { Project } from "interfaces";
import Carousel from "@/components/Carousel/index";
import useModalFocus from "@/hooks/useModalFocus";
import Image from "next/image";
export default function ProjectModal({
  onClose,
  isOpen,
  project,
}: {
  onClose: () => void;
  isOpen: boolean;
  project: Project | null;
}) {
  const [isInteracting, setIsInteracting] = React.useState<boolean>(false);

  const handleModalInteraction = () => {
    if (isInteracting) return;
    onClose();
  };
  const { tabIndex } = useModalFocus({
    isOpen,
    onEscape: () => onClose(),
    modalSelector: '[id="project modal"]',
  });
  return (
    <aside
      aria-hidden={isOpen ? "true" : false}
      tabIndex={tabIndex}
      role="complementary"
      id="project modal"
      className={`${styles.modal} ${isOpen ? styles.openModal : ""}`}
      onClick={() => handleModalInteraction()}
    >
      <article
        className={styles.contentWrapper}
        onMouseEnter={() => setIsInteracting(true)}
        onTouchStart={() => setIsInteracting(true)}
        onMouseLeave={() => setIsInteracting(false)}
      >
        <div className={styles.modalBobbleTop}>
          <Image
            layout="fill"
            src="/svg/bobble.svg"
            alt="bobble"
            placeholder="blur"
            blurDataURL="/svg/bobble.svg"
          />
        </div>
        <div className={styles.modalBobbleBottom}>
          <Image layout="fill" src="/svg/bobble.svg" alt="bobble" />
        </div>
        <div className={styles.closeBtn}>
          <button onClick={onClose} aria-label="close" />
          <Image
            layout="fill"
            src="/icons/close.svg"
            alt="close"
            aria-hidden="true"
            placeholder="blur"
            loading="eager"
            blurDataURL="/svg/close.svg"
            objectFit="contain"
          />
        </div>
        {project?.name && <h2>{project?.name}</h2>}
        <div className={styles.carouselWrapper}>
          <Carousel
            captions={project?.captions?.slice(1) || []}
            width={800}
            height={500}
            tabIndex={tabIndex}
          />
          <div className={styles.backdrop}>
            <Image
              src="/icons/screen_rotation.svg"
              layout="fill"
              alt="please rotate screen"
              loading="eager"
            />
          </div>
        </div>
        <section>
          <h3>Summary</h3>
          <p>{project?.summary}</p>
          <h3>Technologies</h3>
          <p className={styles.techList}>
            <b>Language:</b>
            <span>{project?.language}</span>
          </p>
          <p className={styles.techList}>
            <b>Hosting:</b>
            <span>{project?.technologies?.hosting}</span>
          </p>

          <p className={styles.techList}>
            <b>Frontend:</b>
            {project?.technologies?.frontend.map((tech: string) => (
              <span key={tech}>{tech}</span>
            ))}
          </p>
          {project?.technologies?.backend ? (
            <p className={styles.techList}>
              <b>Backend:</b>
              {project?.technologies?.backend?.map((tech: string) => (
                <span key={tech}>{tech}</span>
              ))}
            </p>
          ) : null}
          {project?.technologies?.testing ? (
            <p className={styles.techList}>
              <b>Tests:</b>
              {project?.technologies?.testing?.map((tech: string) => (
                <span key={tech}>{tech}</span>
              ))}
            </p>
          ) : null}
          <h3>Links</h3>
          <div className={styles.linksBlock}>
            <p>
              <a
                href={project?.demo}
                target="_blank"
                rel="noreferrer"
                tabIndex={tabIndex}
                title="Link to live demo"
              >
                <Image
                  width={25}
                  height={25}
                  src="/icons/website.svg"
                  alt="demo"
                  loading="eager"
                  aria-hidden="true"
                />
                Live Demo
              </a>
            </p>
            <p>
              <a
                href={project?.source_code}
                target="_blank"
                rel="noreferrer"
                title="Link to source code"
                tabIndex={tabIndex}
              >
                <Image
                  width={25}
                  height={25}
                  aria-hidden="true"
                  src="/icons/code.svg"
                  alt="source code"
                  loading="eager"
                />
                Source Code
              </a>
            </p>
          </div>
          {project?.testingUser ? (
            <>
              <h3>Testing User</h3>
              <div className={styles.dataBlock}>
                <p>
                  <b>Email:</b>
                  {project?.testingUser?.email}
                </p>
                <p>
                  <b>Password:</b>
                  {project?.testingUser?.password}
                </p>
              </div>
            </>
          ) : null}
          <h3>Some Features</h3>
          <ul className={styles.featuresList}>
            {project?.features?.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>
      </article>
    </aside>
  );
}
