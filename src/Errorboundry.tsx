// Error Boundry Component for catching custom error thrown using Error Class

import { useEffect, useState } from "react";

const ErrorFallback = ({ error, stack }) => (
  <div style={{ textAlign: "center", padding: "20px", color: "red" }}>
    <h2>Something went wrong.</h2>
    <p>{error}</p>
    <p>{stack}</p>
  </div>
);

const Errorboundry = ({ children }) => {
  const [error, setHasError] = useState(false);
  const [errorInformation, setErrorInformation] = useState({
    error: "",
    stack: "",
  });

  useEffect(() => {
    const handleError = (error) => {
      console.log("Logged Error", error);
      setHasError(true);
      if (error && error.error) {
        setErrorInformation({
          error: error.error.message,
          stack: error.error.stack,
        });
      }
    };
    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleError);
    window.onerror = handleError;
    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleError);
      window.onerror = null;
    };
  }, []);

  if (error) {
    return (
      <ErrorFallback
        error={errorInformation.error}
        stack={errorInformation.stack}
      />
    );
  }

  return children;
};

Errorboundry.prototype = {};

export default Errorboundry;
