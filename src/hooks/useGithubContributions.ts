import { useEffect, useState } from 'react'

export type ContributionDay = {
  date: string // AAAA-MM-DD
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

type Response = {
  total: { lastYear: number }
  contributions: ContributionDay[]
}

// O GitHub não expõe o gráfico de contribuições sem token, então usamos
// uma API pública que lê o perfil e devolve o último ano, dia a dia.
const API = 'https://github-contributions-api.jogruber.de/v4'

export function useGithubContributions(username: string) {
  const [data, setData] = useState<{ total: number; days: ContributionDay[] } | null>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    fetch(`${API}/${username}?y=last`, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json() as Promise<Response>
      })
      .then((json) => setData({ total: json.total.lastYear, days: json.contributions }))
      .catch((error: unknown) => {
        if (!controller.signal.aborted) {
          console.warn('Não deu pra carregar as contribuições do GitHub', error)
          setFailed(true)
        }
      })

    return () => controller.abort()
  }, [username])

  return { data, failed }
}
