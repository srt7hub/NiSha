export function TornEdge({ 
  className, 
  position = 'bottom', 
  fill = 'var(--color-wedding-bg)',
  variant = 1
}: { 
  className?: string; 
  position?: 'top' | 'bottom'; 
  fill?: string;
  variant?: 1 | 2 | 3;
}) {
  const paths = {
    1: "M0 40 L0 100 L1000 100 L1000 40 C 850 85, 650 5, 500 45 C 350 85, 150 15, 0 40 Z",
    2: "M0 50 L0 100 L1000 100 L1000 50 C 800 10, 700 90, 500 50 C 300 10, 150 80, 0 50 Z",
    3: "M0 30 L0 100 L1000 100 L1000 30 C 880 70, 720 0, 550 45 C 350 90, 200 10, 0 30 Z"
  };

  return (
    <div className={`w-full overflow-hidden leading-none flex ${position === 'top' ? 'items-start' : 'items-end'} ${className}`}>
      <svg
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className={`w-full block ${position === 'top' ? 'rotate-180' : ''}`}
        style={{ height: '100%', minHeight: '32px' }}
      >
        <path d={paths[variant]} fill={fill} />
      </svg>
    </div>
  );
}
