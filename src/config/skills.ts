import type { SkillCategory } from '../types';

const d = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

export const SKILLS_CATEGORIES: SkillCategory[] = [
  {
    label: 'Languages',
    items: [
      { name: 'Python', icon: `${d}/python/python-original.svg` },
      { name: 'TypeScript', icon: `${d}/typescript/typescript-original.svg` },
      { name: 'SQL', icon: `${d}/postgresql/postgresql-original.svg` },
    ],
  },
  {
    label: 'Cloud',
    items: [
      { name: 'GCP', icon: `${d}/googlecloud/googlecloud-original.svg` },
      { name: 'Azure', icon: `${d}/azure/azure-original.svg` },
      { name: 'Terraform', icon: `${d}/terraform/terraform-original.svg` },
      { name: 'GitHub Actions', icon: `${d}/github/github-original.svg` },
    ],
  },
  {
    label: 'Orchestration',
    items: [
      { name: 'Airflow', icon: `${d}/apacheairflow/apacheairflow-original.svg` },
    ],
  },
  {
    label: 'Databases',
    items: [
      { name: 'PostgreSQL', icon: `${d}/postgresql/postgresql-original.svg` },
      { name: 'MongoDB', icon: `${d}/mongodb/mongodb-original.svg` },
      { name: 'CosmosDB', icon: `${d}/cosmosdb/cosmosdb-original.svg` },
      { name: 'BigQuery', icon: `${d}/googlecloud/googlecloud-original.svg` },
    ],
  },
  {
    label: 'Frameworks',
    items: [
      { name: 'PySpark', icon: `${d}/apachespark/apachespark-original.svg` },
      { name: 'Kafka', icon: `${d}/apachekafka/apachekafka-original.svg` },
      { name: 'FastAPI', icon: `${d}/fastapi/fastapi-original.svg` },
      { name: 'Pandas', icon: `${d}/pandas/pandas-original.svg` },
      { name: 'Streamlit', icon: `${d}/streamlit/streamlit-original.svg` },
      { name: 'MLflow', icon: `${d}/mlflow/mlflow-original.svg` },
    ],
  },
];
