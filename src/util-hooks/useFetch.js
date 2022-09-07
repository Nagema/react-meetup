import { useState, useEffect } from "react";

export const useFetch = (options) => {
  const [meetUps, setMeetUps] = useState(null);

  useEffect(() => {
    fetch(options.url)
      .then((response) => response.json())
      .then((json) => {
        setMeetUps(json);
      });
  }, [options.url]);

  return {
    meetUps,
  };
};
