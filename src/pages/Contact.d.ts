interface ImportMetaEnv {
    VITE_APP_EMAILJS_SERVICE_ID: string;
    VITE_APP_EMAILJS_TEMPLATE_ID: string;
    VITE_APP_EMAILJS_PUBLIC_KEY: string;
}
declare global {
    interface ImportMeta {
        readonly env: ImportMetaEnv;
    }
}
declare const Contact: () => import("react/jsx-runtime").JSX.Element;
export default Contact;
