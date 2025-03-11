interface PlaneProps {
    isRotating: boolean;
    position: [number, number, number];
    [key: string]: boolean | string | number | [number, number, number];
}
declare const Plane: ({ isRotating, position, ...props }: PlaneProps) => import("react/jsx-runtime").JSX.Element;
export default Plane;
