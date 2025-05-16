'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export function useTranslation() {
  const params = useParams();
  const [dictionary, setDictionary] = useState({});
  const locale = params.locale || 'en';

  useEffect(() => {
    fetch(`/api/dictionary/${locale}`)
      .then(response => response.json())
      .then(data => {
        setDictionary(data);
      })
      .catch(error => {
        console.error('Error loading dictionary:', error);
      });
  }, [locale]);

  const t = (key) => {
    return dictionary[key] || key;
  };

  return { t, locale };
}
