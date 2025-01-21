import { Info } from "@mui/icons-material";

const Alert = () => {
  return (
    <>
      <div className="relative rounded-full bg-blue-600 bg-opacity-40 gap-2 p-1.5 text-neutral-200 font-semibold flex items-center">
        <Info />
        <p>This page is under construction</p>
      </div>
    </>
  );
};

export default Alert;
