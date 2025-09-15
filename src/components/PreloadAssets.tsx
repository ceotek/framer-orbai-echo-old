import { useEffect } from 'react';
import diLogo from '@/assets/di-logo.png';

const PreloadAssets = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = diLogo;
    // @ts-ignore - experimental
    link.fetchPriority = 'high';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return null;
};

export default PreloadAssets;
