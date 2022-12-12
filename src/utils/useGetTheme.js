import useTheme from "next-theme";

export const useGetTheme = () => {
  const { theme } = useTheme();

  return {
    theme,
  };
};
