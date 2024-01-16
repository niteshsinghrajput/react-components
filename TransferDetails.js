import React from 'react';
import AccountDisplayName from './AccountDisplayName'; 
import AccountBalance from './AccountBalance'; 

const TransactionDetails = ({ account, intl, messageId }) => {
  const isExternal = account.accountID.accountType === intl.formatMessage({ id: messageId.external });

  return (
    <>
      <AccountDisplayName accountId={account.accountID} />
      {' '}
      {isExternal ? (
        <>
          {account.description}
          &nbsp; | &nbsp;
          {intl.formatMessage({ id: messageId.externalAccount })}
        </>
      ) : (
        <>
          {account.accountID.accountNumber}
          &nbsp; | &nbsp;
        </>
      )}
      <AccountBalance accountId={account.accountID} />
    </>
  );
};

export default TransactionDetails;
