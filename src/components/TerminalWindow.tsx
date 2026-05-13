import { useEffect, useState } from 'react';

type TerminalWindowProps = {
  codeSnippet: string;
  accentColor: string;
};

export function TerminalWindow({ codeSnippet, accentColor }: TerminalWindowProps) {
  const [charIndex, setCharIndex] = useState(0);
  const [cursorOn, setCursorOn] = useState(true);

  useEffect(() => {
    const delay = charIndex < codeSnippet.length ? 45 : 2000;
    const t = setTimeout(
      () => setCharIndex((i) => (i >= codeSnippet.length ? 0 : i + 1)),
      delay,
    );
    return () => clearTimeout(t);
  }, [charIndex, codeSnippet.length]);

  useEffect(() => {
    const t = setInterval(() => setCursorOn((v) => !v), 530);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="w-full h-full p-3 flex flex-col rounded-xl overflow-hidden" style={{ background: '#0d1117', border: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="flex gap-1.5 mb-3">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
      </div>
      <pre
        className="text-[9px] leading-snug font-mono text-left flex-1 whitespace-pre-wrap"
        style={{ color: accentColor }}
      >{codeSnippet.slice(0, charIndex)}<span
          className="inline-block w-px h-3 align-text-bottom"
          style={{ background: accentColor, opacity: cursorOn ? 1 : 0 }}
        /></pre>
    </div>
  );
}
