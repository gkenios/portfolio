import { type ExperienceEntry } from '../types';

export const EXPERIENCE_ENTRIES: ExperienceEntry[] = [
  {
    role: 'Consultant',
    company: 'Devoteam',
    startMonth: 'Feb',
    startYear: 2023,
    endYear: 'Present',
    description: [],
    projects: [
      {
        role: 'Senior Data Engineer',
        company: 'Shell',
        startMonth: 'Sep',
        startYear: 2024,
        endMonth: 'Dec',
        endYear: 2025,
        description: [
          'Developed a PySpark framework, handling over 300 sources, 1000 tables (~3TB), and 200 streaming jobs, reducing development of new pipelines significantly.',
          'Optimized Spark transformations, reducing fact-table pipeline runtimes by ~90% on backfills, by altering the data model and reducing shuffling.',
          'Designed and implemented CI/CD pipelines, automating schema evolution and CRUD operations for jobs/tables, with GitHub Actions.',
        ],
      },
      {
        role: 'Senior AI Engineer',
        company: 'Nationale Nederlanden',
        startMonth: 'Sep',
        startYear: 2023,
        endMonth: 'Jul',
        endYear: 2024,
        description: [
          'Designed and implemented an end-to-end RAG chatbot solution (Infra, databases, API)',
          'Built scalable data pipelines infrastructure',
          'Developed unit, integration, and quality tests',
          'Set up CI/CD pipelines for all applications',
          'Infra as Code with Terraform',
          'Data visualization with Streamlit',
        ],
      },
      {
        role: 'Data Engineer',
        company: 'Budget Thuis',
        startMonth: 'May',
        startYear: 2023,
        endMonth: 'Aug',
        endYear: 2023,
        description: [
          'Migrated on-prem data warehouse to a cloud data lakehouse',
          'Implement ETL processes with PySpark',
        ],
      },
    ],
  },
  {
    role: 'Consultant',
    company: 'Xomnia',
    startMonth: 'Mar',
    startYear: 2022,
    endMonth: 'Feb',
    endYear: 2023,
    description: [],
    projects: [
      {
        role: 'Machine Learning Engineer',
        company: 'Tata Steel',
        startMonth: 'Apr',
        startYear: 2022,
        endMonth: 'Feb',
        endYear: 2023,
        description: [
          'Data prep & feature engineering with PySpark',
          'Model training & inference using MLFlow',
          'Data visualization with PowerBI',
        ],
      },
    ],
  },
  {
    role: 'Data Science Intern',
    company: 'Dealroom.co',
    startMonth: 'Aug',
    startYear: 2021,
    endMonth: 'Feb',
    endYear: 2022,
    description: [
      'Scrape data sources using Selenium & Beautiful Soup.',
      'Ingest data in real time with Pub/Sub.',
      'Developed APIs as microservices using FastAPI, Docker, and Cloud Run.',
    ],
  },
];
