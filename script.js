const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const copyButton = document.querySelector('#copy-ip');
const ipElement = document.querySelector('#server-ip');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

if (copyButton && ipElement) {
  copyButton.addEventListener('click', async () => {
    const ip = ipElement.textContent?.trim();
    if (!ip) return;

    try {
      await navigator.clipboard.writeText(ip);
      copyButton.textContent = 'IP copiado!';
      setTimeout(() => {
        copyButton.textContent = 'Copiar IP';
      }, 1600);
    } catch {
      copyButton.textContent = 'Falha ao copiar';
      setTimeout(() => {
        copyButton.textContent = 'Copiar IP';
      }, 1600);
    }
  });
}
