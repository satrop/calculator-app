document.addEventListener('DOMContentLoaded', () => {
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = prefersDarkScheme ? 'theme-dark' : 'theme-light';
  document.documentElement.classList.add(theme);
});
