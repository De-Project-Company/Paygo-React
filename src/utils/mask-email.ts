export const maskEmail = (email: string) => {
  const [localPart, domain] = email.split('@');
  const [domainName, topLevelDomain] = domain.split('.');

  const maskedLocalPart =
    localPart.slice(0, 2) + '*'.repeat(localPart.length - 2);
  const maskedDomainName =
    domainName.slice(0, 2) + '*'.repeat(domainName.length - 2);
  const maskedEmail = `${maskedLocalPart}@${maskedDomainName}.${topLevelDomain}`;

  return maskedEmail;
};
