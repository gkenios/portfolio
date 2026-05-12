import type { SkillCategory } from '../types';

const d = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';
const s = 'https://cdn.simpleicons.org';

export const SKILLS_CATEGORIES: SkillCategory[] = [
  {
    label: 'Programming Languages',
    items: [
      { name: 'Python', icon: `${d}/python/python-original.svg` },
      { name: 'TypeScript', icon: `${d}/typescript/typescript-original.svg` },
      { name: 'SQL', icon: `${d}/postgresql/postgresql-original.svg` },
      { name: 'Terraform', icon: `${d}/terraform/terraform-original.svg` },
    ],
  },
  {
    label: 'Cloud & DevOps',
    items: [
      { name: 'Azure', icon: `${d}/azure/azure-original.svg` },
      { name: 'GCP', icon: `${d}/googlecloud/googlecloud-original.svg` },
      { name: 'Docker', icon: `${d}/docker/docker-original.svg` },
      { name: 'Kubernetes', icon: `${d}/kubernetes/kubernetes-plain.svg` },
      { name: 'GitHub Actions', icon: `${d}/github/github-original.svg` },
    ],
  },
  {
    label: 'Data Engineering',
    items: [
      { name: 'PySpark', icon: `${d}/apachespark/apachespark-original.svg` },
      { name: 'Airflow', icon: `${d}/apacheairflow/apacheairflow-original.svg` },
      { name: 'Kafka / Event Hubs', icon: `${d}/apachekafka/apachekafka-original.svg` },
      { name: 'Databricks', icon: `${s}/databricks/FF3621` },
      { name: 'Delta Lake', icon: `${s}/apacheparquet` },
    ],
  },
  {
    label: 'AI Engineering',
    items: [
      { name: 'FastAPI', icon: `${d}/fastapi/fastapi-original.svg` },
      { name: 'LangGraph', icon: `${s}/langchain` },
      { name: 'React', icon: `${d}/react/react-original.svg` },
      { name: 'Next.js', icon: `${d}/nextjs/nextjs-original.svg` },
      { name: 'MCP / A2A / AGUI', icon: `${s}/modelcontextprotocol` },
    ],
  },
];
