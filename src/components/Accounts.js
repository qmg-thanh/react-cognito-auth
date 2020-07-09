import React, { createContext } from "react";

const AccountContext = createContext();

const Account = (props) => {
	const authenticate = () => {};

	return <AccountContext.Provider></AccountContext.Provider>;
};

export { Account, AccountContext };
