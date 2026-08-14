// DAISY Lab logo mark — a geometric eight-petal daisy.
// Petals inherit currentColor; the center keeps the indigo accent.
const DaisyMark = ({ className = 'h-7 w-7' }) => (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
        {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => (
            <ellipse
                key={angle}
                cx="16"
                cy="7.2"
                rx="3"
                ry="5.6"
                fill="currentColor"
                transform={`rotate(${angle} 16 16)`}
            />
        ))}
        <circle cx="16" cy="16" r="3.6" fill="#818cf8" />
    </svg>
);

export default DaisyMark;
