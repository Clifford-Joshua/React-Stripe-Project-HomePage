// ScrollContext.js
import React, { useContext, useRef } from "react";

const ScrollContext = React.createContext();

const ScrollProvider = ({ children }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -450, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 450, behavior: "smooth" });
  };

  return (
    <ScrollContext.Provider value={{ scrollRef, scrollLeft, scrollRight }}>
      {children}
    </ScrollContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useGlobalScroll must be used within a ScrollProvider");
  }
  return context;
};

export { ScrollProvider };
