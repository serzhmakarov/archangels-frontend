
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { sendForm } from '../api';

export default function useSendForm() {
  const { t } = useTranslation();
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const callback = (data) => {
    setError(null);
    setLoading(true);
    setMessage('');

    sendForm(data)
      .then((res) => {
        setLoading(false);
        setMessage(t('home.contacts.form.hint_success'));
      })
      .catch((err) => {
        setError(error);
        setLoading(false);
        setMessage(t('home.contacts.form.hint_error'));
      });
  };

	return { callback, error, loading, message };
}