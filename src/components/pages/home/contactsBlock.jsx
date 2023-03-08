import React from 'react';
import { useTranslation } from 'react-i18next';
import { contacts } from '../../../constants';

const ContactsBlock = () => {
  const { t } = useTranslation();
  
  return (
    <div className="contacts-info__block">
      {contacts.map(({ key, label, value, link }) => (
        <div key={key}>
          {t(label)}: <a href={link}>{value}</a>
        </div>
      ))}
    </div>
  );
}

export default ContactsBlock;