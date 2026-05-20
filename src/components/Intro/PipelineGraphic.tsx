import kafkaUrl from '../../assets/icons/apachekafka.svg';
import sheetsUrl from '../../assets/icons/googlesheets.svg';
import azureSqlUrl from '../../assets/icons/azuresqldatabase.svg';
import databricksUrl from '../../assets/icons/databricks.svg';
import snowflakeUrl from '../../assets/icons/snowflake.svg';
import parquetUrl from '../../assets/icons/apacheparquet.svg';
import powerbiUrl from '../../assets/icons/powerbi.svg';
import tableauUrl from '../../assets/icons/tableau.svg';

export function PipelineGraphic() {
  const nodes = [
    { cx: 70, cy: 90, r: 26, accent: false, icon: kafkaUrl },
    { cx: 70, cy: 210, r: 26, accent: false, icon: sheetsUrl },
    { cx: 70, cy: 330, r: 26, accent: false, icon: azureSqlUrl },
    { cx: 220, cy: 150, r: 26, accent: false, icon: databricksUrl },
    { cx: 220, cy: 270, r: 26, accent: false, icon: snowflakeUrl },
    { cx: 370, cy: 210, r: 32, accent: true, icon: parquetUrl },
    { cx: 490, cy: 130, r: 24, accent: false, icon: powerbiUrl },
    { cx: 490, cy: 290, r: 24, accent: false, icon: tableauUrl },
  ];

  const edges = [
    { d: 'M 70 90  C 145 90,  145 150, 220 150', delay: 0 },
    { d: 'M 70 210 C 145 210, 145 150, 220 150', delay: 0.2 },
    { d: 'M 70 210 C 145 210, 145 270, 220 270', delay: 0.4 },
    { d: 'M 70 330 C 145 330, 145 270, 220 270', delay: 0.8 },
    { d: 'M 220 150 C 295 150, 295 210, 370 210', delay: 1.0 },
    { d: 'M 220 270 C 295 270, 295 210, 370 210', delay: 1.2 },
    { d: 'M 370 210 C 430 210, 430 130, 490 130', delay: 1.4 },
    { d: 'M 370 210 C 430 210, 430 290, 490 290', delay: 1.6 },
  ];

  return (
    <svg
      viewBox="0 0 560 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-md lg:max-w-lg"
      aria-hidden="true"
    >
      <defs>
        <filter id="glow-node" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="glow-edge" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Static background edges */}
      {edges.map((e, i) => (
        <path
          key={`bg-${i}`}
          d={e.d}
          stroke="var(--edge-track)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      ))}

      {/* Animated flowing edges */}
      {edges.map((e, i) => (
        <path
          key={`flow-${i}`}
          d={e.d}
          stroke="var(--accent)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="6 30"
          filter="url(#glow-edge)"
          style={{ animation: 'flow 2.4s linear infinite', animationDelay: `${e.delay}s` }}
        />
      ))}

      {/* Nodes */}
      {nodes.map((n, i) => {
        const iconSize = n.r * 1.2;
        return (
          <g key={i}>
            {n.accent && (
              <circle cx={n.cx} cy={n.cy} r={n.r + 12} fill="var(--accent)" opacity="0.06" />
            )}
            <circle
              cx={n.cx}
              cy={n.cy}
              r={n.r}
              fill="var(--node-fill)"
              stroke={n.accent ? 'var(--accent)' : 'var(--node-stroke)'}
              strokeWidth={n.accent ? 1.5 : 1}
              filter={n.accent ? 'url(#glow-node)' : undefined}
            />
            <image
              href={n.icon}
              x={n.cx - iconSize / 2}
              y={n.cy - iconSize / 2}
              width={iconSize}
              height={iconSize}
            />
          </g>
        );
      })}
    </svg>
  );
}
