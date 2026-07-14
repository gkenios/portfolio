import { type ExperienceEntry } from '../types';

export const EXPERIENCE_ENTRIES: ExperienceEntry[] = [
  {
    role: 'Consultant',
    company: 'Devoteam',
    location: 'Amsterdam, NL',
    startMonth: 'Feb',
    startYear: 2023,
    endYear: 'Present',
    description: [],
    projects: [
      {
        role: 'Lead Data Engineer',
        company: 'TotalEnergies',
        location: 'The Hague, NL',
        startMonth: 'Jun',
        startYear: 2026,
        endYear: 'Present',
        description: [
          'Too soon to write something meaningful.'
        ],
      },
      {
        role: 'Senior/Lead Data Engineer',
        company: 'Shell',
        location: 'The Hague, NL',
        startMonth: 'Sep',
        startYear: 2024,
        endMonth: 'Dec',
        endYear: 2025,
        description: [
          'Developed a PySpark framework, handling over 300 sources, 1000 tables (~3TB), and 200 streaming jobs, reducing development of new pipelines significantly.',
          'Optimized Spark transformations, reducing fact-table pipeline runtimes by ~90% on backfills, by altering the data model and reducing shuffling.',
          'Designed and implemented CI/CD pipelines, automating schema evolution and CRUD operations for jobs/tables, with GitHub Actions.',
          'Led the project from a technical perspective, mentoring a team of 10 engineers and collaborating with stakeholders to align on requirements and deliverables.',
        ],
      },
      {
        role: 'Senior AI Engineer',
        company: 'Nationale Nederlanden',
        location: 'Amsterdam, NL',
        startMonth: 'Sep',
        startYear: 2023,
        endMonth: 'Jul',
        endYear: 2024,
        description: [
          'Spearheaded the first NN GenAI project in production, resulting in the first SLA between NN and one of its ventures, by leading the design and development of the infrastructure, the databases, and the APIs, in a team of 4 engineers.',
          'Optimized the software delivery lifecycle, reducing manual developer hours by ~4 hours/week, by setting up self-hosted runners within the network, uptime monitoring & alerting, and rigorous framework of unit, integration and quality tests.',
          'Created actionable insights for the business and our clients, by developing a website of embedded PowerBI dashboards to share key metrics internally or externally, with a custom OAuth solution.',
        ],
      },
      {
        role: 'Data Engineer',
        company: 'Budget Thuis',
        location: 'Amsterdam, NL',
        startMonth: 'May',
        startYear: 2023,
        endMonth: 'Aug',
        endYear: 2023,
        description: [
          'Boosted query performance by 12x for large-scale aggregations by migrating an on-premises data warehouse to a scalable data lake and optimizing the underlying data model.',
        ],
      },
    ],
  },
  {
    role: 'Consultant',
    company: 'Xomnia',
    location: 'Amsterdam, NL',
    startMonth: 'Mar',
    startYear: 2022,
    endMonth: 'Feb',
    endYear: 2023,
    description: [],
    projects: [
      {
        role: 'Machine Learning Engineer',
        company: 'Tata Steel',
        location: 'IJmuiden, NL',
        startMonth: 'Apr',
        startYear: 2022,
        endMonth: 'Feb',
        endYear: 2023,
        description: [
          'Predicted early signs of defects in the steel production process, saving €0.1M the first month, by building anomaly detection and expert models using PySpark and MLFlow.',
        ],
      },
    ],
  },
  {
    role: 'Data Science Intern',
    company: 'Dealroom.co',
    location: 'Amsterdam, NL',
    startMonth: 'Aug',
    startYear: 2021,
    endMonth: 'Feb',
    endYear: 2022,
    description: [
      'Scraped data sources, enriching the dataset of private companies by ~20%, using Selenium & Beautiful Soup.',
      'Developed APIs in a microservices architecture using FastAPI, Docker, Pub/Sub, and Cloud Run.',
    ],
  },
];
