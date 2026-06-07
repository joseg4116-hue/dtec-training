"use client";
import { useEffect, useRef } from "react";
import QRCode from "qrcode";
import { X, Copy, ExternalLink } from "lucide-react";

type Props = { url: string; name: string; onClose: () => void };

export default function QrModal({ url, name, onClose }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) QRCode.toCanvas(canvasRef.current, url, { width: 240, margin: 2 });
  }, [url]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 flex flex-col items-center gap-4">
        <div className="flex items-center justify-between w-full">
          <h2 className="font-semibold text-gray-800 truncate max-w-[220px] text-sm">{name}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700"><X size={20} /></button>
        </div>
        <canvas ref={canvasRef} className="rounded-lg border border-gray-100" />
        <p className="text-xs text-gray-500 text-center">Scan with your phone — link expires in 24h</p>
        <div className="flex gap-2 w-full">
          <button
            onClick={() => navigator.clipboard.writeText(url)}
            className="flex-1 flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2 text-sm text-gray-700 hover:bg-gray-50"
          >
            <Copy size={15} /> Copy link
          </button>
          <a
            href={url} target="_blank" rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 rounded-lg py-2 text-sm text-white hover:opacity-90"
            style={{ background: "#2D4A2D" }}
          >
            <ExternalLink size={15} /> Open
          </a>
        </div>
      </div>
    </div>
  );
}
