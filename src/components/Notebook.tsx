import { useEffect, useRef, useState, type PointerEvent } from 'react'
import { IconDownload, IconEraser, IconPencil, IconTrash } from '@tabler/icons-react'
import { useLanguage } from '../i18n/useLanguage'

type Tool = 'pencil' | 'eraser'

// Resolução fixa do desenho: o canvas estica pelo CSS, mas o desenho salvo
// é sempre do mesmo tamanho, então não distorce ao mudar a largura da tela.
// Caderneta em pé (3:4). Mudou o formato? Troque a chave pra não carregar desenho distorcido.
const WIDTH = 600
const HEIGHT = 800
const STORAGE_KEY = 'notebook-drawing-v2'

// Caderneta onde o visitante pode rabiscar. O desenho fica salvo só no
// navegador dele (localStorage) e volta quando ele abre o site de novo.
export function Notebook() {
  const { t } = useLanguage()
  const canvas = useRef<HTMLCanvasElement>(null)
  const lastPoint = useRef<{ x: number; y: number } | null>(null)
  const [tool, setTool] = useState<Tool>('pencil')

  // Carrega o desenho salvo, se tiver.
  useEffect(() => {
    let saved: string | null = null
    try {
      saved = localStorage.getItem(STORAGE_KEY)
    } catch {
      // localStorage bloqueado: a caderneta funciona, só não lembra
    }
    if (!saved) return
    const image = new Image()
    image.onload = () => canvas.current?.getContext('2d')?.drawImage(image, 0, 0)
    image.src = saved
  }, [])

  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, canvas.current!.toDataURL())
    } catch {
      // sem espaço ou bloqueado: segue sem salvar
    }
  }

  // Converte a posição do ponteiro na tela para a resolução fixa do canvas.
  function toCanvas(event: PointerEvent<HTMLCanvasElement>) {
    const rect = event.currentTarget.getBoundingClientRect()
    return {
      x: ((event.clientX - rect.left) / rect.width) * WIDTH,
      y: ((event.clientY - rect.top) / rect.height) * HEIGHT,
    }
  }

  function drawTo(point: { x: number; y: number }) {
    const ctx = canvas.current?.getContext('2d')
    const from = lastPoint.current
    if (!ctx || !from) return

    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    if (tool === 'pencil') {
      // Grafite levemente transparente, pra parecer lápis e não caneta.
      ctx.globalCompositeOperation = 'source-over'
      ctx.strokeStyle = 'rgba(43, 43, 43, 0.85)'
      ctx.lineWidth = 3
    } else {
      // A borracha apaga de verdade, deixando a pauta da folha aparecer.
      ctx.globalCompositeOperation = 'destination-out'
      ctx.lineWidth = 70
    }

    ctx.beginPath()
    ctx.moveTo(from.x, from.y)
    ctx.lineTo(point.x, point.y)
    ctx.stroke()
    lastPoint.current = point
  }

  function handlePointerDown(event: PointerEvent<HTMLCanvasElement>) {
    event.currentTarget.setPointerCapture(event.pointerId)
    const point = toCanvas(event)
    lastPoint.current = point
    // Um toque sem arrastar ainda deixa um pontinho.
    drawTo({ x: point.x + 0.1, y: point.y + 0.1 })
  }

  function handlePointerMove(event: PointerEvent<HTMLCanvasElement>) {
    if (!lastPoint.current) return
    // Eventos agrupados deixam o traço mais liso quando o mouse anda rápido.
    const events = event.nativeEvent.getCoalescedEvents?.() ?? [event.nativeEvent]
    const rect = event.currentTarget.getBoundingClientRect()
    for (const e of events) {
      drawTo({
        x: ((e.clientX - rect.left) / rect.width) * WIDTH,
        y: ((e.clientY - rect.top) / rect.height) * HEIGHT,
      })
    }
  }

  function handlePointerUp() {
    if (!lastPoint.current) return
    lastPoint.current = null
    save()
  }

  function clear() {
    canvas.current?.getContext('2d')?.clearRect(0, 0, WIDTH, HEIGHT)
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch {
      // nada a fazer
    }
  }

  // Gera um PNG com a folha pautada, o desenho e a marca d'água no cantinho.
  async function download() {
    const drawing = canvas.current
    if (!drawing) return

    const out = document.createElement('canvas')
    out.width = WIDTH
    out.height = HEIGHT
    const ctx = out.getContext('2d')!
    const color = (name: string) => getComputedStyle(document.documentElement).getPropertyValue(name).trim()

    // Mesma pauta do CSS, convertida da largura na tela para a resolução do canvas.
    const scale = WIDTH / drawing.getBoundingClientRect().width
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, WIDTH, HEIGHT)
    ctx.fillStyle = color('--color-smudge')
    for (let y = (14 + 27) * scale; y < HEIGHT; y += 28 * scale) ctx.fillRect(0, y, WIDTH, scale)
    ctx.fillStyle = color('--color-eraser')
    ctx.fillRect(38 * scale, 0, 2 * scale, HEIGHT)

    ctx.drawImage(drawing, 0, 0)

    // A fonte de anotação pode ainda não estar carregada no canvas.
    await document.fonts.load('32px Caveat')
    ctx.font = '32px Caveat'
    ctx.fillStyle = color('--color-red-pen')
    ctx.textAlign = 'right'
    ctx.textBaseline = 'bottom'
    ctx.fillText(t.contact.watermark, WIDTH - 20, HEIGHT - 14)

    const link = document.createElement('a')
    link.download = 'rabisco-altoe-dev.png'
    link.href = out.toDataURL('image/png')
    link.click()
  }

  const toolClass = 'pen-circle-pressed p-1 text-graphite transition-transform hover:-translate-y-0.5'

  return (
    // No desktop a caderneta avança sobre a coluna de margem da seção (vazia no Contato).
    <div className="relative mx-auto w-full max-w-[340px] md:mr-[-220px] md:ml-auto">
      <p className="absolute -top-9 right-2 rotate-3 font-note text-xl text-red-pen">{t.contact.notebookNote}</p>

      <div className="sketch-border relative rotate-[0.8deg] rounded-sm bg-white text-pencil shadow-[3px_4px_0_var(--color-smudge)]">
        {/* espiral da caderneta */}
        <div aria-hidden="true" className="absolute -top-2.5 right-6 left-6 flex justify-between">
          {Array.from({ length: 7 }, (_, i) => (
            <span key={i} className="sketch-border h-5 w-2.5 rounded-full bg-paper text-pencil" />
          ))}
        </div>

        {/* folha pautada com a margem vermelha; o canvas transparente fica por cima */}
        <div
          className="relative mx-1 mt-4 mb-1 aspect-[3/4] overflow-hidden"
          style={{
            backgroundImage:
              'linear-gradient(90deg, transparent 38px, var(--color-eraser) 38px 40px, transparent 40px), repeating-linear-gradient(transparent 0 27px, var(--color-smudge) 27px 28px)',
            backgroundPositionY: '0, 14px',
          }}
        >
          <canvas
            ref={canvas}
            width={WIDTH}
            height={HEIGHT}
            aria-label={t.contact.notebookLabel}
            className={`absolute inset-0 size-full touch-none ${tool === 'pencil' ? 'cursor-crosshair' : 'cursor-cell'}`}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          />
        </div>
      </div>

      {/* lápis e borracha (a ferramenta atual circulada de caneta), salvar e limpar */}
      <div className="mt-5 flex items-center gap-5 px-2">
        <button
          type="button"
          onClick={() => setTool('pencil')}
          aria-pressed={tool === 'pencil'}
          aria-label={t.contact.pencil}
          title={t.contact.pencil}
          className={toolClass}
        >
          <IconPencil size={26} stroke={1.5} />
        </button>
        <button
          type="button"
          onClick={() => setTool('eraser')}
          aria-pressed={tool === 'eraser'}
          aria-label={t.contact.eraser}
          title={t.contact.eraser}
          className={toolClass}
        >
          <IconEraser size={26} stroke={1.5} />
        </button>
        <button
          type="button"
          onClick={download}
          className="ml-auto flex items-center gap-1 text-base text-pencil-light hover:text-graphite"
        >
          <IconDownload size={18} stroke={1.5} />
          {t.contact.download}
        </button>
        <button
          type="button"
          onClick={clear}
          className="flex items-center gap-1 text-base text-pencil-light hover:text-graphite"
        >
          <IconTrash size={18} stroke={1.5} />
          {t.contact.clear}
        </button>
      </div>
    </div>
  )
}
