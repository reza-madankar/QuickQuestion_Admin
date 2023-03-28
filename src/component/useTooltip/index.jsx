import React, { useState, useEffect, Fragment } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

function UseTooltip({ anchorId, placement, variant, content }) {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const { innerWidth: width } = window;

    if (width > 820) {
      setIsLargeScreen(true);
    }
  }, []);

  return (
    <ReactTooltip
      anchorId={anchorId}
      place={placement}
      variant={variant}
      content={content}
    />
  );
}

export default UseTooltip;
