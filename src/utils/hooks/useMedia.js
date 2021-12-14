import {useEffect, useState} from 'react';

export const useMediaQuery = (query) => {
  const mediaMatch = window.matchMedia(query);
  const [matches, setMatches] = useState(mediaMatch.matches);

  useEffect(() => {
    const handler = event => setMatches(event.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  },[matches]);
  return matches;
};