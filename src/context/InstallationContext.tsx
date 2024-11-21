import React, { createContext, useState, useContext, useEffect } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import useDeviceDetect from "@/utils/useDeviceDetect";

declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
  }
}

interface BeforeInstallPromptEvent extends Event {
  prompt: () => void;
  userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
}

interface InstallContextType {
  isModalOpen: boolean;
  installDenied: boolean;
  closeModal: () => void;
  handleInstallClick: (deferredPrompt: BeforeInstallPromptEvent | null) => void;
}

const InstallContext = createContext<InstallContextType | undefined>(undefined);

export const useInstallContext = (): InstallContextType => {
  const context = useContext(InstallContext);
  if (!context) {
    throw new Error("useInstallContext must be used within an InstallProvider");
  }
  return context;
};

type InstallProviderProps = {
  children: React.ReactNode;
};

export const InstallProvider: React.FC<InstallProviderProps> = ({
  children,
}) => {
  const { isIOSDevice } = useDeviceDetect();
  const [isModalOpen, setModalOpen] = useState(false);
  const [installDenied, setInstallDenied] = useState(false);
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    // PWA 설치 여부 확인
    const isInstalled =
      window.navigator.standalone || // iOS
      window.matchMedia("(display-mode: standalone)").matches; // 다른 브라우저

    if (isInstalled) {
      setModalOpen(false); // 설치되어 있다면 모달 비활성화
    } else {
      setModalOpen(true); // 설치되어 있지 않다면 모달 활성화
    }

    const handleInstallPrompt = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handleInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleInstallPrompt);
    };
  }, []);

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleInstallClick = (prompt: BeforeInstallPromptEvent | null) => {
    if (prompt) {
      prompt.prompt();
      prompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
        setInstallDenied(choiceResult.outcome === "dismissed");
        setModalOpen(false);
      });
    }
  };

  const value: InstallContextType = {
    isModalOpen,
    installDenied,
    closeModal,
    handleInstallClick,
  };

  return (
    <InstallContext.Provider value={value}>
      {isModalOpen && !installDenied && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Install App</ModalHeader>
            <ModalCloseButton onClick={closeModal} />
            <ModalBody>
              {isIOSDevice ? (
                <>
                  <p>To install this app on your iOS device:</p>
                  <p>1. Tap the Share button in Safari.</p>
                  <p>
                    2. Tap {"'"}Add to Home Screen{"'"}.
                  </p>
                </>
              ) : (
                "Install this app on your device for the best experience."
              )}
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={closeModal}>
                Cancel
              </Button>
              {!isIOSDevice && (
                <Button
                  colorScheme="green"
                  onClick={() => handleInstallClick(deferredPrompt)}
                >
                  Install
                </Button>
              )}
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
      {children}
    </InstallContext.Provider>
  );
};
