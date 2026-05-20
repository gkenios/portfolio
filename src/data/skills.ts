import type { SkillCategory } from '../types';

import PythonIcon from '../assets/icons/python.svg?react';
import TypeScriptIcon from '../assets/icons/typescript.svg?react';
import SQLIcon from '../assets/icons/postgresql.svg?react';
import TerraformIcon from '../assets/icons/terraform.svg?react';

import AzureIcon from '../assets/icons/azure.svg?react';
import GCPIcon from '../assets/icons/googlecloud.svg?react';
import DockerIcon from '../assets/icons/docker.svg?react';
import KubernetesIcon from '../assets/icons/kubernetes.svg?react';
import GitHubActionsIcon from '../assets/icons/github.svg?react';

import PySparkIcon from '../assets/icons/apachespark.svg?react';
import AirflowIcon from '../assets/icons/apacheairflow.svg?react';
import KafkaIcon from '../assets/icons/apachekafka.svg?react';
import DatabricksIcon from '../assets/icons/databricks.svg?react';
import DeltaLakeIcon from '../assets/icons/apacheparquet.svg?react';

import FastAPIIcon from '../assets/icons/fastapi.svg?react';
import LangGraphIcon from '../assets/icons/langchain.svg?react';
import ReactIcon from '../assets/icons/react.svg?react';
import NextjsIcon from '../assets/icons/nextjs.svg?react';
import MCPIcon from '../assets/icons/modelcontextprotocol.svg?react';

export const SKILLS_CATEGORIES: SkillCategory[] = [
  {
    label: 'Programming Languages',
    items: [
      { name: 'Python', icon: PythonIcon },
      { name: 'TypeScript', icon: TypeScriptIcon },
      { name: 'SQL', icon: SQLIcon },
      { name: 'Terraform', icon: TerraformIcon },
    ],
  },
  {
    label: 'Cloud & DevOps',
    items: [
      { name: 'Azure', icon: AzureIcon },
      { name: 'GCP', icon: GCPIcon },
      { name: 'Docker', icon: DockerIcon },
      { name: 'Kubernetes', icon: KubernetesIcon },
      { name: 'GitHub Actions', icon: GitHubActionsIcon },
    ],
  },
  {
    label: 'Data Engineering',
    items: [
      { name: 'PySpark', icon: PySparkIcon },
      { name: 'Airflow', icon: AirflowIcon },
      { name: 'Kafka', icon: KafkaIcon },
      { name: 'Databricks', icon: DatabricksIcon },
      { name: 'Delta Lake', icon: DeltaLakeIcon },
    ],
  },
  {
    label: 'AI Engineering',
    items: [
      { name: 'FastAPI', icon: FastAPIIcon },
      { name: 'LangGraph', icon: LangGraphIcon },
      { name: 'React', icon: ReactIcon },
      { name: 'Next.js', icon: NextjsIcon },
      { name: 'MCP / A2A / AGUI', icon: MCPIcon },
    ],
  },
];
