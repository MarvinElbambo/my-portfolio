import ModuleWrapper from "@/components/utilities/module-wrapper/module-wrapper";
import styles from "./skill-list.module.scss";
import Container from "@/components/utilities/container/container";
import Typography from "@/components/atoms/typography/typography";
import Row from "@/components/utilities/grid/row/row";
import Column from "@/components/utilities/grid/column/column";
import SkillCard from "@/components/molecules/skill-card/skill-card";

export interface SkillListProps {}

const SkillList = ({}: SkillListProps) => {
  return (
    <ModuleWrapper className={styles["component"]} variant="dark">
      <Container>
        <Typography
          className={styles["component__title"]}
          tag="h1"
          tagStyle="headlineLarge"
          text="Skills"
        />
        <Row>
          <Column width={{ tablet: 4, laptop: 3 }}>
            <SkillCard
              image={{
                alt: "HTML image",
                src: "/images/html5.jpg",
              }}
              link="https://developer.mozilla.org/en-US/docs/Web/HTML"
              experience={2}
              title="HTML"
            />
          </Column>

          <Column width={{ tablet: 4, laptop: 3 }}>
            <SkillCard
              image={{
                alt: "CSS image",
                src: "/images/css3.jpg",
              }}
              link="https://developer.mozilla.org/en-US/docs/Web/css"
              experience={2}
              title="CSS"
            />
          </Column>

          <Column width={{ tablet: 4, laptop: 3 }}>
            <SkillCard
              image={{
                alt: "Javascript image",
                src: "/images/javascript.png",
              }}
              link="https://developer.mozilla.org/en-US/docs/Web/javascript"
              experience={2}
              title="Javascript"
            />
          </Column>

          <Column width={{ tablet: 4, laptop: 3 }}>
            <SkillCard
              image={{
                alt: "PHP image",
                src: "/images/php.jpg",
              }}
              link="https://www.php.net"
              experience={1}
              title="PHP"
            />
          </Column>

          <Column width={{ tablet: 4, laptop: 3 }}>
            <SkillCard
              image={{
                alt: "MySql image",
                src: "/images/mysql.png",
              }}
              link="https://www.mysql.com/"
              experience={1}
              title="MySql"
            />
          </Column>

          <Column width={{ tablet: 4, laptop: 3 }}>
            <SkillCard
              image={{
                alt: "Laravel image",
                src: "/images/laravel.png",
              }}
              link="https://laravel.com/"
              experience={1}
              title="Laravel"
            />
          </Column>

          <Column width={{ tablet: 4, laptop: 3 }}>
            <SkillCard
              image={{
                alt: "Tailwind CSS image",
                src: "/images/tailwindcss.png",
              }}
              link="https://tailwindcss.com/"
              experience={1}
              title="Tailwind CSS"
            />
          </Column>

          <Column width={{ tablet: 4, laptop: 3 }}>
            <SkillCard
              image={{
                alt: "Alpine JS image",
                src: "/images/alpinejs.jpg",
              }}
              link="https://alpinejs.dev/"
              experience={1}
              title="Alpine JS"
            />
          </Column>

          <Column width={{ tablet: 4, laptop: 3 }}>
            <SkillCard
              image={{
                alt: "React JS image",
                src: "/images/reactjs.png",
              }}
              link="https://react.dev/"
              experience={2}
              title="React JS"
            />
          </Column>

          <Column width={{ tablet: 4, laptop: 3 }}>
            <SkillCard
              image={{
                alt: "Next JS image",
                src: "/images/nextjs.jpg",
              }}
              link="https://nextjs.org/"
              experience={2}
              title="Next JS"
            />
          </Column>

          <Column width={{ tablet: 4, laptop: 3 }}>
            <SkillCard
              image={{
                alt: "Typescript image",
                src: "/images/typescript.png",
              }}
              link="https://www.typescriptlang.org/"
              experience={2}
              title="Typescript"
            />
          </Column>

          <Column width={{ tablet: 4, laptop: 3 }}>
            <SkillCard
              image={{
                alt: "Sass image",
                src: "/images/sass.png",
              }}
              link="https://sass-lang.com/"
              experience={2}
              title="Sass"
            />
          </Column>
        </Row>
      </Container>
    </ModuleWrapper>
  );
};

SkillList.displayName = "SkillList";

export default SkillList;
