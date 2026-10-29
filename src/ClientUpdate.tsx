import { useEffect, useMemo, useRef } from 'react';
import clientHtml from './client-update.html?raw';

function parseClientMarkup(source: string) {
  const parsed = new DOMParser().parseFromString(source, 'text/html');
  const styles = parsed.head.querySelector('style')?.textContent ?? '';

  parsed.querySelectorAll('script, style').forEach((element) => element.remove());
  parsed.querySelectorAll('*').forEach((element) => {
    Array.from(element.attributes).forEach(({ name, value }) => {
      const attributeName = name.toLowerCase();
      const executableUrl =
        ['href', 'src', 'xlink:href', 'action', 'formaction'].includes(attributeName) &&
        /^\s*javascript:/i.test(value);
      if (attributeName.startsWith('on') || executableUrl) element.removeAttribute(name);
    });
  });

  const year = parsed.querySelector('#ano');
  if (year) year.textContent = String(new Date().getFullYear());
  return { markup: parsed.body.innerHTML, styles };
}

export default function ClientUpdate() {
  const rootRef = useRef<HTMLDivElement>(null);
  const { markup, styles } = useMemo(() => parseClientMarkup(clientHtml), []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const styleElement = document.createElement('style');
    styleElement.dataset.clientUpdate = 'true';
    styleElement.textContent = styles;
    document.head.append(styleElement);

    const button = root.querySelector<HTMLButtonElement>('.menu-botao');
    const menu = root.querySelector<HTMLElement>('#menu');
    const setMenuOpen = (open: boolean) => {
      menu?.classList.toggle('aberto', open);
      button?.setAttribute('aria-expanded', String(open));
      button?.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    };
    const toggleMenu = () => setMenuOpen(button?.getAttribute('aria-expanded') !== 'true');
    const closeOnNavigation = (event: MouseEvent) => {
      if (event.target instanceof Element && event.target.closest('#menu a')) setMenuOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    button?.addEventListener('click', toggleMenu);
    root.addEventListener('click', closeOnNavigation);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      button?.removeEventListener('click', toggleMenu);
      root.removeEventListener('click', closeOnNavigation);
      document.removeEventListener('keydown', closeOnEscape);
      styleElement.remove();
    };
  }, [styles]);

  return <div ref={rootRef} dangerouslySetInnerHTML={{ __html: markup }} />;
}
