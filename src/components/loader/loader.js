import { TailSpin } from "react-loader-spinner";

import "./loader.css";

const Loader = ({ size }) => {
  return size === "small" ? (
    <div className={size}>
      <TailSpin height="40" width="40" color="#ff5aac" radius="1" />
    </div>
  ) : (
    <TailSpin height="80" width="80" color="#ff5aac" radius="1" />
  );
};

export default Loader;
