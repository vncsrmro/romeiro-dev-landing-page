export const NextJsIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <mask id="mask0_408_134" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
            <circle cx="90" cy="90" r="90" fill="black" />
        </mask>
        <g mask="url(#mask0_408_134)">
            <circle cx="90" cy="90" r="90" fill="black" stroke="currentColor" strokeWidth="6" />
            <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="currentColor" />
            <rect x="115" y="54" width="12" height="72" fill="currentColor" />
        </g>
    </svg>
);

export const ReactIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="none" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
);

export const TailwindIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M12.0002 6C12.0002 6 13.5 3 16.5002 3C19.5002 3 21.0002 5.5 21.0002 8C21.0002 10.5 18.0002 12 18.0002 12C18.0002 12 19.5002 15 22.5002 15C25.5002 15 27.0002 17.5 27.0002 20C27.0002 22.5 24.0002 24 24.0002 24H12.0002C12.0002 24 13.5 21 16.5002 21C19.5002 21 21.0002 18.5 21.0002 16C21.0002 13.5 18.0002 12 18.0002 12C18.0002 12 16.5 15 13.5002 15C10.5002 15 9.00024 12.5 9.00024 10C9.00024 7.5 12.0002 6 12.0002 6ZM6.00024 12C6.00024 12 7.50024 9 10.5002 9C13.5002 9 15.0002 11.5 15.0002 14C15.0002 16.5 12.0002 18 12.0002 18C12.0002 18 13.5002 21 16.5002 21C19.5002 21 21.0002 18.5 21.0002 16C21.0002 13.5 18.0002 12 18.0002 12C18.0002 12 16.5 15 13.5002 15C10.5002 15 9.00024 12.5 9.00024 10C9.00024 7.5 12.0002 6 12.0002 6C12.0002 6 10.5 3 7.50024 3C4.50024 3 3.00024 5.5 3.00024 8C3.00024 10.5 6.00024 12 6.00024 12Z" />
        <path d="M12.75 6.75C12.75 6.75 11.25 9.75 8.25 9.75C5.25 9.75 3.75 7.25 3.75 4.75C3.75 2.25 6.75 0.75 6.75 0.75C6.75 0.75 8.25 3.75 11.25 3.75C14.25 3.75 15.75 1.25 15.75 -1.25C15.75 -3.75 12.75 -5.25 12.75 -5.25H24.75C24.75 -5.25 23.25 -2.25 20.25 -2.25C17.25 -2.25 15.75 0.25 15.75 2.75C15.75 5.25 18.75 6.75 18.75 6.75C18.75 6.75 17.25 3.75 14.25 3.75C11.25 3.75 9.75 6.25 9.75 8.75C9.75 11.25 12.75 12.75 12.75 12.75H12.75V6.75Z" transform="scale(0.8) translate(4, 8)" />
    </svg>
);

export const TypeScriptIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM15.5 15.25V13H14.25V15.25H15.5ZM17.75 13H16.5V15.25H17.75V13ZM11.5 13H10.25V17.5H11.5V13ZM8.5 13H6V14.25H7.25V17.5H8.5V13Z" />
        <path d="M20.5 2H3.5C2.67157 2 2 2.67157 2 3.5V20.5C2 21.3284 2.67157 22 3.5 22H20.5C21.3284 22 22 21.3284 22 20.5V3.5C22 2.67157 21.3284 2 20.5 2ZM11.75 17.5H10.25V13H8.5V17.5H7.25V14.25H6V13H11.75V17.5ZM17.75 15.25H16.5V13H17.75V15.25ZM15.5 15.25H14.25V13H15.5V15.25Z" fillRule="evenodd" clipRule="evenodd" transform="scale(0.8) translate(3, 3)" />
    </svg>
);

export const NodeJsIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M12 2L2 7.77778V16.2222L12 22L22 16.2222V7.77778L12 2Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M12 10V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 16L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 16L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

export const SupabaseIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M11.9999 2C6.47705 2 1.99994 6.47715 1.99994 12C1.99994 17.5228 6.47705 22 11.9999 22C17.5228 22 21.9999 17.5228 21.9999 12C21.9999 6.47715 17.5228 2 11.9999 2ZM17.3999 9.6L12.5999 19.2C12.4999 19.4 12.2999 19.5 12.0999 19.5C11.9999 19.5 11.8999 19.45 11.7999 19.4C11.5999 19.25 11.4999 19.05 11.4999 18.8V12.8H7.09994C6.69994 12.8 6.39994 12.4 6.59994 12L11.3999 2.4C11.4999 2.2 11.6999 2.1 11.8999 2.1C11.9999 2.1 12.0999 2.15 12.1999 2.2C12.3999 2.35 12.4999 2.55 12.4999 2.8V8.8H16.8999C17.2999 8.8 17.5999 9.2 17.3999 9.6Z" />
    </svg>
);

export const PrismaIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M12 2L21.6 18.5H2.4L12 2ZM12 5.8L5.8 16.5H18.2L12 5.8Z" />
    </svg>
);

export const VercelIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M12 1L24 22H0L12 1Z" />
    </svg>
);
