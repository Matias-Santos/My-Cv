import { useEffect, useState } from "react";
import "./Copied.scss";

function Copied() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {isVisible && (
        <div className="copied-container">
          <p>Copied!</p>
        </div>
      )}
    </div>
  );
}

export default Copied;
