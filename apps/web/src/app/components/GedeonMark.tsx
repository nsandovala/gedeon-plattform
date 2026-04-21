import { useId } from "react";

type GedeonMarkProps = {
  className?: string;
  showCircuitField?: boolean;
};

const CIRCUIT_NODES = [
  [36, 96, 4],
  [30, 160, 3.5],
  [36, 224, 4],
  [284, 96, 4],
  [290, 160, 3.5],
  [284, 224, 4],
] as const;

export default function GedeonMark({
  className = "",
  showCircuitField = false,
}: GedeonMarkProps) {
  const shellFillId = useId().replace(/:/g, "");
  const shellShadeId = useId().replace(/:/g, "");

  return (
    <svg
      className={className}
      viewBox="0 0 320 320"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id={shellFillId}
          x1="104"
          y1="58"
          x2="214"
          y2="246"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#A61B1B" />
          <stop offset="100%" stopColor="#7B1111" />
        </linearGradient>
        <linearGradient
          id={shellShadeId}
          x1="124"
          y1="106"
          x2="196"
          y2="236"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#C7CBD1" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#C7CBD1" stopOpacity="0" />
        </linearGradient>
      </defs>

      {showCircuitField ? (
        <>
          <g className="mark-circuit mark-circuit--outer">
            <path
              d="M104 100H60V80H40"
              stroke="#8D939C"
              strokeOpacity="0.2"
              strokeWidth="1.8"
              strokeLinecap="square"
            />
            <path
              d="M92 160H48"
              stroke="#8B1111"
              strokeOpacity="0.34"
              strokeWidth="1.8"
              strokeLinecap="square"
            />
            <path
              d="M104 220H60V240H40"
              stroke="#8D939C"
              strokeOpacity="0.2"
              strokeWidth="1.8"
              strokeLinecap="square"
            />
            <path
              d="M216 100H260V80H280"
              stroke="#8D939C"
              strokeOpacity="0.2"
              strokeWidth="1.8"
              strokeLinecap="square"
            />
            <path
              d="M228 160H272"
              stroke="#8B1111"
              strokeOpacity="0.34"
              strokeWidth="1.8"
              strokeLinecap="square"
            />
            <path
              d="M216 220H260V240H280"
              stroke="#8D939C"
              strokeOpacity="0.2"
              strokeWidth="1.8"
              strokeLinecap="square"
            />
          </g>

          <g className="mark-circuit mark-circuit--inner">
            <path
              d="M116 114H76V96H56"
              stroke="#8B1111"
              strokeOpacity="0.26"
              strokeWidth="1.4"
              strokeLinecap="square"
            />
            <path
              d="M114 206H76V224H56"
              stroke="#8B1111"
              strokeOpacity="0.26"
              strokeWidth="1.4"
              strokeLinecap="square"
            />
            <path
              d="M204 114H244V96H264"
              stroke="#8B1111"
              strokeOpacity="0.26"
              strokeWidth="1.4"
              strokeLinecap="square"
            />
            <path
              d="M206 206H244V224H264"
              stroke="#8B1111"
              strokeOpacity="0.26"
              strokeWidth="1.4"
              strokeLinecap="square"
            />
          </g>

          <g className="mark-node-cluster">
            {CIRCUIT_NODES.map(([cx, cy, r], index) => (
              <circle
                key={`${cx}-${cy}-${index}`}
                className="mark-node"
                cx={cx}
                cy={cy}
                r={r}
                fill={index % 2 === 0 ? "#8B1111" : "#C7CBD1"}
                fillOpacity={index % 2 === 0 ? "0.7" : "0.32"}
                style={{ animationDelay: `${index * 0.55}s` }}
              />
            ))}
          </g>
        </>
      ) : null}

      <g className="mark-core">
        <path d="M150 40H170L173 66H147L150 40Z" fill="#8B1111" opacity="0.9" />
        <path d="M154 30H166L169 40H151L154 30Z" fill="#8B1111" opacity="0.7" />

        <path
          d="M160 58L196 74L210 106V198L160 250L110 198V106L124 74L160 58Z"
          fill={`url(#${shellFillId})`}
        />
        <path
          d="M160 58L196 74L210 106V198L160 250L110 198V106L124 74L160 58Z"
          stroke="#F3F4F6"
          strokeOpacity="0.14"
          strokeWidth="1.6"
        />

        <path
          d="M132 92L160 80L188 92L198 116L176 108H144L122 116L132 92Z"
          fill="#F3F4F6"
          fillOpacity="0.08"
        />
        <path
          d="M131 98L160 86L189 98L198 120V188L160 228L122 188V120L131 98Z"
          fill={`url(#${shellShadeId})`}
        />

        <path
          d="M124 128L144 118L154 124L150 156L128 148L124 128Z"
          fill="#111214"
        />
        <path
          d="M196 128L176 118L166 124L170 156L192 148L196 128Z"
          fill="#111214"
        />

        <path d="M152 124H168V204L160 212L152 204V124Z" fill="#111214" />
        <path d="M148 204H172L176 224L160 236L144 224L148 204Z" fill="#111214" />

        <path
          d="M160 80V236"
          stroke="#F3F4F6"
          strokeOpacity="0.08"
          strokeWidth="1.3"
          strokeDasharray="3 8"
        />
        <path
          d="M138 214L160 234L182 214"
          stroke="#F3F4F6"
          strokeOpacity="0.14"
          strokeWidth="1.8"
          strokeLinecap="square"
        />
        <circle cx="160" cy="229" r="3.5" fill="#F3F4F6" fillOpacity="0.68" />
      </g>
    </svg>
  );
}
