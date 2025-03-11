import { useState } from 'react'


interface AlertOptions {

    show: boolean;
  
    text: string;
  
    type: string;
  
  }

const useAlert = () => {
    const [alert, setAlert] = useState<AlertOptions>({ show: false, text: '', type: 'danger' });

    const showAlert = ({ show, text, type }: { show: boolean; text: string; type: string }) => {
        setAlert({ show, text, type });
    };

    const hideAlert = () => {
        setAlert({  show: false , text: '', type: 'danger' });
    };

  return (
    { alert, showAlert, hideAlert }
  )
}

export default useAlert
