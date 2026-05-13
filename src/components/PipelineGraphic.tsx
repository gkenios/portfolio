export function PipelineGraphic() {
  const nodes = [
    { cx: 70, cy: 90, r: 26, label: 'SRC', sub: '01', accent: false },
    { cx: 70, cy: 210, r: 26, label: 'SRC', sub: '02', accent: false },
    { cx: 70, cy: 330, r: 26, label: 'SRC', sub: '03', accent: false },
    { cx: 220, cy: 150, r: 26, label: 'STG', sub: '01', accent: false },
    { cx: 220, cy: 270, r: 26, label: 'STG', sub: '02', accent: false },
    { cx: 370, cy: 210, r: 32, label: 'DWH', sub: '', accent: true },
    { cx: 490, cy: 130, r: 24, label: 'BI', sub: '', accent: false },
    { cx: 490, cy: 290, r: 24, label: 'ML', sub: '', accent: false },
  ];

  const edges = [
    { d: 'M 70 90  C 145 90,  145 150, 220 150', delay: 0 },
    { d: 'M 70 210 C 145 210, 145 150, 220 150', delay: 0.4 },
    { d: 'M 70 210 C 145 210, 145 270, 220 270', delay: 0.8 },
    { d: 'M 70 330 C 145 330, 145 270, 220 270', delay: 1.2 },
    { d: 'M 220 150 C 295 150, 295 210, 370 210', delay: 1.6 },
    { d: 'M 220 270 C 295 270, 295 210, 370 210', delay: 2.0 },
    { d: 'M 370 210 C 430 210, 430 130, 490 130', delay: 2.4 },
    { d: 'M 370 210 C 430 210, 430 290, 490 290', delay: 2.8 },
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
      {nodes.map((n, i) => (
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
          <text
            x={n.cx}
            y={n.cy - (n.sub ? 5 : 0)}
            textAnchor="middle"
            dominantBaseline="middle"
            fill={n.accent ? 'var(--accent)' : 'var(--node-label)'}
            fontSize={n.r > 28 ? 11 : 10}
            fontFamily="'Courier New', monospace"
            fontWeight="600"
            letterSpacing="1.5"
          >
            {n.label}
          </text>
          {n.sub && (
            <text
              x={n.cx}
              y={n.cy + 9}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={n.accent ? 'var(--accent)' : 'var(--node-sub)'}
              fontSize="9"
              fontFamily="'Courier New', monospace"
            >
              {n.sub}
            </text>
          )}
        </g>
      ))}
    </svg>
  );
}