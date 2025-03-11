interface IslandProps {
    isRotating: boolean;
    setIsRotating: (value: boolean) => void;
    setCurrentStage: (stage: number) => void;
    [key: string]: unknown;
}
declare const Island: ({ isRotating, setIsRotating, setCurrentStage, ...props }: IslandProps) => import("react/jsx-runtime").JSX.Element;
export default Island;
