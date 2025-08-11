import React from "react";

export default function ELTPipelineDiagram() {
  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="mb-6">
          <h1 className="text-3xl font-extrabold">Modern ELT + Streaming Pipeline — End-to-End Diagram</h1>
          <p className="text-slate-600 mt-2">A layout showing Sources → Ingestion (batch & streaming) → Storage → Transformation → Orchestration → Serving → Monitoring.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-9 gap-6 items-center">
          {/* Column: Sources */}
          <div className="col-span-1">
            <StageCard title="Sources" items={["Shopify / Stripe / Sales APIs","MySQL / Postgres","CSV / SFTP","Event Stream (Kafka / Kinesis)"]} color="bg-white" />
          </div>

          <Connector />

          {/* Ingestion */}
          <div className="col-span-1">
            <StageCard title="Ingestion (Batch)" items={["Airbyte / Fivetran","Custom Python Jobs"]} note="CDC or scheduled" />
          </div>

          <Connector />

          {/* Streaming Ingestion */}
          <div className="col-span-1">
            <StageCard title="Ingestion (Streaming)" items={["Kafka Connect / Flink","AWS Kinesis / GCP PubSub","Spark Structured Streaming"]} note="Low-latency data" />
          </div>

          <Connector />

          {/* Storage */}
          <div className="col-span-1">
            <StageCard title="Storage" items={["Data Lake (S3 / GCS / ADLS)","Raw Zone / Bronze","Delta Lake / Apache Iceberg"]} note="Immutable raw data" />
          </div>

          <Connector />

          {/* Transformation */}
          <div className="col-span-1">
            <StageCard title="Transformation (ELT)" items={["Data Warehouse (Redshift / BigQuery / Snowflake)","dbt models / SQL","Spark / Flink for heavy lifts"]} note="Transform inside warehouse" />
          </div>

          <Connector />

          {/* Orchestration */}
          <div className="col-span-1">
            <StageCard title="Orchestration" items={["Airflow / Prefect / Dagster","Job scheduling + dependencies","CI/CD for dbt & streaming jobs" ]} />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <LargeCard title="Serving" items={["Looker / Tableau / Superset","Feature Store / ML Warehouse","APIs & Materialized Views"]} />
          <LargeCard title="Monitoring & Quality" items={["Great Expectations","Datadog / Prometheus","Monte Carlo / Datafold"]} />
          <LargeCard title="Security & Governance" items={["IAM / Policies / RBAC","Data Catalog (Amundsen / DataHub)","Encryption at rest + audit logs"]} />
        </div>

        <footer className="mt-8 p-4 text-sm text-slate-600">
          <strong>Tips:</strong> Keep raw data immutable. Prefer ELT on cloud warehouses. Add schema checks early, monitor both batch & streaming jobs.
        </footer>
      </div>
    </div>
  );
}

function StageCard({ title, items = [], note }) {
  return (
    <div className="p-4 rounded-2xl shadow-sm border border-slate-100 bg-white">
      <h3 className="text-lg font-semibold">{title}</h3>
      {note && <div className="mt-1 text-xs text-slate-500">{note}</div>}
      <ul className="mt-3 space-y-2">
        {items.map((it, i) => (
          <li key={i} className="text-sm text-slate-700 flex items-start gap-3">
            <span className="w-2 h-2 mt-2 rounded-full bg-sky-400" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LargeCard({ title, items = [] }) {
  return (
    <div className="p-5 rounded-2xl shadow-md border border-slate-100 bg-white">
      <h4 className="text-lg font-semibold">{title}</h4>
      <ul className="mt-3 space-y-2">
        {items.map((it, i) => (
          <li key={i} className="text-sm text-slate-700 flex items-center gap-3">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex items-center justify-center">
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12h18" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 8l4 4-4 4" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
