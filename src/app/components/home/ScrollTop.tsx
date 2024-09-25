import ArrowCircleUp from "@mui/icons-material/ArrowCircleUp";

const ScrollTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button type="button" onClick={scrollToTop}>
      <ArrowCircleUp
        fontSize="large"
        className="text-gray-300 hover:text-gray-200"
      />
    </button>
  );
};

export default ScrollTop;
