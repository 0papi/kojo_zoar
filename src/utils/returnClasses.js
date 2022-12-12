import { useGetTheme } from "./useGetTheme";

export const useReturnClasses = () => {
  const { theme } = useGetTheme();

  const themeClasses = theme === "light" ? `all_light` : "all_dark";

  return { themeClasses };
};
