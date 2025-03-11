interface AlertProps {
    type: 'danger' | 'info';
    text: string;
}
declare const Alert: React.FC<AlertProps>;
export default Alert;
