import { useState } from 'react';
import { getFondyCheckoutURL } from '../../../api';

export default function useApi() {
  const [loading, setLoading] = useState(false);

  const getCheckoutFondyUrl = (body) => {
    setLoading(true);
    getFondyCheckoutURL(body)
      .then(res => {
        if (res.checkout_url) window.open(res.checkout_url, '_blank', 'noreferrer');

        setLoading(false);   
      })
      .catch(err => {
        setLoading(false);
      })
  };

  return { loading, getCheckoutFondyUrl };
}