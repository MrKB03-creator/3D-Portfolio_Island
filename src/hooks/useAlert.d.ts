interface AlertOptions {
    show: boolean;
    text: string;
    type: string;
}
declare const useAlert: () => {
    alert: AlertOptions;
    showAlert: ({ show, text, type }: {
        show: boolean;
        text: string;
        type: string;
    }) => void;
    hideAlert: () => void;
};
export default useAlert;
