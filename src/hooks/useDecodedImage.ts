import { useEffect, useState } from 'react';

export function useDecodedImage(src: string) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let canceled = false;
    const img = new Image();
    img.src = src;
    // Hint the browser to prioritize
    try {
      // @ts-ignore
      img.fetchPriority = 'high';
    } catch {}
    // Prefer synchronous decode when possible
    // @ts-ignore - not all browsers support setting this on Image()
    img.decoding = 'sync';

    const onLoad = () => {
      if (!canceled) setLoaded(true);
    };

    img.onload = onLoad;
    img.onerror = onLoad;

    // Use decode() when available to ensure full readiness before paint
    // Some browsers throw if decode is called before load; catch safely
    // @ts-ignore
    if (typeof img.decode === 'function') {
      // @ts-ignore
      img.decode().then(onLoad).catch(onLoad);
    }

    return () => {
      canceled = true;
    };
  }, [src]);

  return { loaded, src } as const;
}
