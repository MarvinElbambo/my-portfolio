import ModuleWrapper from "@/components/utilities/module-wrapper/module-wrapper";
import styles from "./project-list.module.scss";
import Container from "@/components/utilities/container/container";
import Typography from "@/components/atoms/typography/typography";
import ProjectCard from "@/components/molecules/project-card/project-card";

export interface ProjectListProps {}

const ProjectList = ({}: ProjectListProps) => {
  return (
    <ModuleWrapper className={styles["component"]} variant="light">
      <Container>
        <Typography
          className={styles["component__title"]}
          tag="h1"
          tagStyle="headlineLarge"
          text="Projects"
        />

        <div className={styles["component__list"]}>
          <ProjectCard
            iframeURL="https://24talent.io/login"
            textPosition="left"
            button={{
              type: "link",
              href: "https://24talent.io",
              target: "_blank",
              text: "Visit",
              variant: "dark",
            }}
            stacks={[
              "HTML",
              "CSS",
              "PHP",
              "JavaScript",
              "MySql",
              "Laravel",
              "Tailwind CSS",
              "Alpine JS",
            ]}
            text="24talent.io is invetory system made in Laravel that manage recruitment and applicant data"
            title="24Talent.io"
            variant="light"
          />

          <ProjectCard
            iframeURL="https://www.kvik.dk/"
            textPosition="right"
            button={{
              type: "link",
              href: "https://www.kvik.dk/",
              target: "_blank",
              text: "Visit",
              variant: "light",
            }}
            stacks={[
              "HTML",
              "CSS",
              "Sass",
              "JavaScript",
              "React JS",
              "Next JS",
              "TypeScript",
            ]}
            text="Kvik is a e-commerce website that made in React and Next JS"
            title="Kvik"
            variant="dark"
          />

          <ProjectCard
            iframeURL="https://www.europeanspermbank.com"
            textPosition="left"
            button={{
              type: "link",
              href: "https://www.europeanspermbank.com",
              target: "_blank",
              text: "Visit",
              variant: "dark",
            }}
            stacks={[
              "HTML",
              "CSS",
              "Sass",
              "JavaScript",
              "React JS",
              "Next JS",
              "TypeScript",
            ]}
            text="European Sperm Bank is a e-commerce website that made in React and Next JS"
            title="European Sperm Bank"
            variant="light"
          />
        </div>
      </Container>
    </ModuleWrapper>
  );
};

ProjectList.displayName = "ProjectList";

export default ProjectList;
