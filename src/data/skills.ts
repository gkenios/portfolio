import type { SkillCategory } from '../types';

const i = '/icons';

export const SKILLS_CATEGORIES: SkillCategory[] = [
  {
    label: 'Programming Languages',
    items: [
      { name: 'Python', icon: `${i}/python.svg` },
      { name: 'TypeScript', icon: `${i}/typescript.svg` },
      { name: 'SQL', icon: `${i}/postgresql.svg` },
      { name: 'Terraform', icon: `${i}/terraform.svg` },
    ],
  },
  {
    label: 'Cloud & DevOps',
    items: [
      { name: 'Azure', icon: `${i}/azure.svg` },
      { name: 'GCP', icon: `${i}/googlecloud.svg` },
      { name: 'Docker', icon: `${i}/docker.svg` },
      { name: 'Kubernetes', icon: `${i}/kubernetes.svg` },
      { name: 'GitHub Actions', icon: `${i}/github.svg` },
    ],
  },
  {
    label: 'Data Engineering',
    items: [
      { name: 'PySpark', icon: `${i}/apachespark.svg` },
      { name: 'Airflow', icon: `${i}/apacheairflow.svg` },
      { name: 'Kafka / Event Hubs', icon: `${i}/apachekafka.svg` },
      { name: 'Databricks', icon: `${i}/databricks.svg` },
      { name: 'Delta Lake', icon: `${i}/apacheparquet.svg` },
    ],
  },
  {
    label: 'AI Engineering',
    items: [
      { name: 'FastAPI', icon: `${i}/fastapi.svg` },
      { name: 'LangGraph', icon: `${i}/langchain.svg` },
      { name: 'React', icon: `${i}/react.svg` },
      { name: 'Next.js', icon: `${i}/nextjs.svg` },
      { name: 'MCP / A2A / AGUI', icon: `${i}/modelcontextprotocol.svg` },
    ],
  },
];
