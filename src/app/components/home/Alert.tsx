import { Info } from "@mui/icons-material";

const Alert = () => {
  return (
    <>
      <div className="relative rounded-full bg-blue-600 bg-opacity-40 mb-4 p-1.5 text-neutral-200 font-semibold flex items-center">
        <Info className="me-2" /> This page is under construction
      </div>
    </>
  );
};

export default Alert;
