import { useEffect, useState } from "react";

export default function useMedia(query){
    const [match, setMatches] = useState(false);

    useEffect(()=>{
        const match_media = window.matchMedia(query);
        if(match_media.matches !== match){
            setMatches(match_media.matches)
        }
        const handler = () => {
            setMatches(match_media.matches);
          };
        match_media.addListener(handler);

        return ()=>{
            match_media.removeListener(handler);
        }
    }, [match, query]);
    return match;
} 