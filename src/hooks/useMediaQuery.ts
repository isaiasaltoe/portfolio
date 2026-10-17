import { useSyncExternalStore } from 'react'

// Diz se a media query bate agora e re-renderiza quando muda (girar o celular, redimensionar).
export function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (onChange) => {
      const media = window.matchMedia(query)
      media.addEventListener('change', onChange)
      return () => media.removeEventListener('change', onChange)
    },
    () => window.matchMedia(query).matches,
  )
}
