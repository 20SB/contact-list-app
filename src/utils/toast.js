import { useToast } from "@chakra-ui/react";
import { useRef } from "react";

const useGlobalToast = () => {
    const toast = useToast();
    const loadingToastIdRef = useRef(null);

    const showToast = (status, title, description) => {
        // If a loading toast is currently displayed, close it
        if (status !== "loading" && loadingToastIdRef.current) {
            toast.close(loadingToastIdRef.current);
            loadingToastIdRef.current = null;
        }

        // Show the new toast
        const toastId = toast({
            title: title,
            description: description,
            status: status,
            duration: status === "loading" ? null : 5000, // Keep loading toast open indefinitely
            isClosable: true,
            position: "top-right",
        });

        // If the new toast is a loading toast, save its ID
        if (status === "loading") {
            loadingToastIdRef.current = toastId;
        }
    };

    return {
        success: (title, description) => showToast("success", title, description),
        error: (title, description) => showToast("error", title, description),
        warning: (title, description) => showToast("warning", title, description),
        info: (title, description) => showToast("info", title, description),
        loading: (title, description) => showToast("loading", title, description),
    };
};

export default useGlobalToast;
