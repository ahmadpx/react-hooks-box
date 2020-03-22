import { useEffect, useState } from 'react'

/**
 * useNetworkStatus
 * @return {{isOnline: boolean, isOffline: boolean}}
 */
export function useNetworkStatus() {
  const [isOnline, setIsOnline] = useState(true);
  
  const setOnline = () => setIsOnline(true);
  const setOffline = () => setIsOnline(false);
  
  useEffect(() => {
    window.addEventListener('online', setOnline);
    return () => window.removeEventListener('online', setOnline);
  });
  
  useEffect(() => {
    window.addEventListener('offline', setOffline);
    return () => window.removeEventListener('offline', setOffline);
  });
  
  return {
    isOnline,
    isOffline: !isOnline
  };
}
