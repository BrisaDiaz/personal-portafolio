import React from "react";

import { PROJECTS } from "data";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Project } from "interfaces";
import Carousel from "@/components/Carousel/index";
import Link from "next/link";
import styles from "@/styles/Project.module.css";
const ProjectPage: NextPage<{ project: Project }> = ({ project }) => {
  return (
    <div>
      <Head>
        <title>Brisa Díaz | Project {project.name}</title>
      </Head>

      <main className={styles.main}>
        <section className={styles.container}>
          <nav
            role="navigation"
            aria-label="breadcrumbs"
            className={styles.breadcrumbBar}
          >
            <Link href="/" passHref>
              <span>
                <a href="">Home</a>
              </span>
            </Link>

            <Link href="/#projects" passHref>
              <span>
                <a href="">Projects</a>
              </span>
            </Link>
            <span>{project.name}</span>
          </nav>
          <div className={styles.modalBobbleTop}>
            <Image
              layout="fill"
              src="/svg/bobble.svg"
              alt="bobble"
              placeholder="blur"
              blurDataURL="/svg/bobble.svg"
            />
          </div>

          {project?.name && <h2>{project?.name}</h2>}
          <div className={styles.carouselWrapper}>
            <Carousel
              captions={project?.captions?.slice(1) || []}
              width={1200}
              height={500}
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
            {project?.testingUser ? (
              <>
                <div className={styles.userBlock}>
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
            <div className={styles.linksBlock}>
              <p>
                <a
                  href={project?.demo}
                  target="_blank"
                  rel="noreferrer"
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
            <h3>Some Features</h3>
            <ul className={styles.featuresList}>
              {project?.features?.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>
        </section>
      </main>
    </div>
  );
};

export default ProjectPage;

export async function getStaticPaths() {
  return {
    paths: PROJECTS.map((project) => ({
      params: { id: project.id.toString() },
    })),
    fallback: false,
  };
}

export function getStaticProps({ params }: { params: { id: string } }) {
  const projectId = parseInt(params.id);
  return {
    props: {
      project: PROJECTS.find((project) => project.id === projectId),
    },
  };
}
