
import { useState } from 'react';
import { sendForm } from '../api';

const defaultResponseMessage = 'Ваше звернення успішно відправлено! Ми розглянемо його найближчим часом і надішлемо свою відповідь на ваш E-Mail';

export default function useSendForm() {
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
        setMessage(defaultResponseMessage);
      })
      .catch((err) => {
        setLoading(false);
        setMessage(defaultResponseMessage);
      });
  };

	return { callback, error, loading, message };
}