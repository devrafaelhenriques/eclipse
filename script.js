const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const copyButton = document.querySelector('#copy-ip');
const serverIpElement = document.querySelector('#server-ip');

if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => menu.classList.toggle('open'));
  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => menu.classList.remove('open'));
  });
}

if (copyButton && serverIpElement) {
  copyButton.addEventListener('click', async () => {
    const ip = serverIpElement.textContent?.trim();

    if (!ip) return;

    try {
      await navigator.clipboard.writeText(ip);
      copyButton.textContent = 'IP copiado!';
      setTimeout(() => {
        copyButton.textContent = 'Copiar IP';
      }, 1800);
    } catch {
      copyButton.textContent = 'Falha ao copiar';
      setTimeout(() => {
        copyButton.textContent = 'Copiar IP';
      }, 1800);
    }
  });
}
