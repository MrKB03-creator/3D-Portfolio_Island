interface FoxProps {
    currentAnimation: string;
    [key: string]: unknown;
}
declare const Fox: ({ currentAnimation, ...props }: FoxProps) => import("react/jsx-runtime").JSX.Element;
export default Fox;
