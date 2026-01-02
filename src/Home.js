import styles from "./css/home.module.css";
import AreaSection from "./Section_typeA";

const researchAreaDataSample = [
  {
    id: 1,
    title: "Automated reasoning",
    media_source: "https://assets.amazon.science/b3/e6/339a287646308dd0cf27be64860a/automatedreasoning.svg",
    link: "area/1",
  },
  {
    id: 2,
    title: "Cloud and systems",
    media_source: "https://assets.amazon.science/94/b0/94affd2444f7a0d80227106f9211/cloud.svg",
    link: "area/2",
  },
  {
    id: 3,
    title: "Computer vision",
    media_source: "https://assets.amazon.science/9c/02/b5c9fb95439ebf5d4bcaef6fc4cd/computervision.svg",
    link: "area/3",
  },
  {
    id: 4,
    title: "Conversational AI",
    media_source: "https://assets.amazon.science/fe/aa/910fd701416dabb6d3316fe2ec19/conversationalai.svg",
    link: "area/4",
  },
  {
    id: 5,
    title: "Economics",
    media_source: "https://assets.amazon.science/a9/bc/ab88878c4faebca412cbef3b022b/economics.svg",
    link: "area/5",
  },
  {
    id: 6,
    title: "Information and knowledge management",
    media_source: "https://assets.amazon.science/4d/25/9ac984a8444e80d8071730edb6a0/infomanagement.svg",
    link: "area/6",
  },
  {
    id: 7,
    title: "Machine learning",
    media_source: "https://assets.amazon.science/93/06/f6c7a0ae49ec9d9427ce8dde796f/machinelearning.svg",
    link: "area/7",
  },
  {
    id: 8,
    title: "Operations research and optimization",
    media_source: "https://assets.amazon.science/65/a0/8603864b451fbce8ce61f0ca85e7/operations.svg",
    link: "area/8",
  },
  {
    id: 9,
    title: "Quantum technologies",
    media_source: "https://assets.amazon.science/18/56/44f7716948d58dc87d0d1c8ed3bc/quantum-technologies.svg",
    link: "area/9",
  },
  {
    id: 10,
    title: "Robotics",
    media_source: "https://assets.amazon.science/9f/d6/2a081f10407db7bc1a99f17be15d/robotics.svg",
    link: "area/10",
  },
  {
    id: 11,
    title: "Search and information retrieval",
    media_source: "https://assets.amazon.science/0f/8a/4bf8055f47499b18da29af6b95c4/search.svg",
    link: "area/11",
  },
  {
    id: 12,
    title: "Security, privacy, and abuse prevention",
    media_source: "https://assets.amazon.science/35/42/bdaf2a4c4e8d887ffcfdaf03ddee/security.svg",
    link: "area/12",
  },
  {
    id: 13,
    title: "Sustainability",
    media_source: "https://assets.amazon.science/09/1d/d2ef27534875b71e1919bac64520/sustainability.svg",
    link: "area/13",
  },
];

function Home() {
  return (
    <div className={styles.top_container}>
      <div className={styles.header_area}></div>
      <div className={styles.hero_area}></div>
      <AreaSection data={researchAreaDataSample}/>
      <div className={styles.section1_area}></div>
      <div className={styles.section2_area}></div>
      <div className={styles.section1_area}></div>
      <div className={styles.section2_area}></div>
      <div className={styles.footer_area}></div>
    </div>
  );
}

export default Home;