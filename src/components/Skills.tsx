import { type BezierDefinition, motion } from 'framer-motion';
import { Database, Server, Code, Terminal } from 'lucide-react';

const ease: BezierDefinition = [0.25, 0.1, 0.25, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } }
};

export function Skills() {
  return (
    <section className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <motion.h3 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-16 text-center"
        >
          Skills.
        </motion.h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Database />, title: "Data Warehousing", desc: "Snowflake, BigQuery, Redshift" },
            { icon: <Server />, title: "Pipeline Orchestration", desc: "Apache Airflow, Prefect, Dagster" },
            { icon: <Code />, title: "Processing & Streaming", desc: "Apache Spark, Kafka, Flink" },
            { icon: <Terminal />, title: "Languages", desc: "Python, SQL, Scala, TypeScript" }
          ].map((skill, index) => (
            <motion.div 
              key={index}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.1 } }
              }}
              className="bg-[#1c1c1e] p-8 rounded-3xl hover:bg-[#2c2c2e] transition-colors"
            >
              <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center mb-6">
                {skill.icon}
              </div>
              <h4 className="text-xl font-semibold mb-2">{skill.title}</h4>
              <p className="text-gray-400">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
