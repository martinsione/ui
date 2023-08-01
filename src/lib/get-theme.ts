export const getTheme = () => {
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
  const theme = window.localStorage.theme ?? "system";

  if (theme === "dark" || (theme === "system" && isDarkMode.matches)) {
    document.documentElement.classList.add("dark");
  } else if (theme === "light" || (theme === "system" && !isDarkMode.matches)) {
    document.documentElement.classList.remove("dark");
  }

  // Don't show transtitions when updating the theme
  document.documentElement.classList.add("[&_*]:!transition-none");
  window.setTimeout(() => {
    document.documentElement.classList.remove("[&_*]:!transition-none");
  }, 0);

  return theme;
};
