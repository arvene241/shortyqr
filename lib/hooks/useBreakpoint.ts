import useMediaQuery from "./useMediaQuery";

const useBreakpoints = () => {
  const breakpoints = {
    isMobile: useMediaQuery("(max-width: 450px"),
  };

  return breakpoints;
};

export default useBreakpoints;