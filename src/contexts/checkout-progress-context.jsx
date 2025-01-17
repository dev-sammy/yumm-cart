import { createContext, useContext, useState } from "react";
import { PURCHASE_PROGRESS } from "../constants/progress";

const CheckoutProgressContext = createContext({
    currentStep: PURCHASE_PROGRESS.CLOSE, // cart | checkout | success
    setCurrentStep: () => {}
});


export const CheckoutProgressProvider = ({children}) => {
    const [currentStep, setCurrentStep] = useState('');

    const contextValue = {currentStep, setCurrentStep};
    return <CheckoutProgressContext.Provider value={contextValue}>{children}</CheckoutProgressContext.Provider>
}

export const useCheckoutProgress = () => {
    const {currentStep, setCurrentStep} = useContext(CheckoutProgressContext);
    return {currentStep, setCurrentStep};
}