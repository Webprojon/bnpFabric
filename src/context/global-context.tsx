import React, { createContext, useState, ReactNode, useContext } from "react";

export interface GlobalContextType {
	isMenuOpen: boolean;
	setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
	isModal: boolean;
	setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface GlobalProviderProps {
	children: ReactNode;
}

export const GlobalContextProvider: React.FC<GlobalProviderProps> = ({
	children,
}) => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const [isModal, setIsModal] = useState<boolean>(false);

	return (
		<GlobalContext.Provider
			value={{
				isMenuOpen,
				setIsMenuOpen,
				isModal,
				setIsModal,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export function useGlobalContext() {
	const context = useContext(GlobalContext);
	if (context === undefined) {
		throw new Error(
			"useGlobalContext must be used within a GlobalContextProvider",
		);
	}
	return context;
}

export default GlobalContext;
