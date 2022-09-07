import { useState, useEffect } from "react";

export const useFetch = (options) => {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    fetch(options.url)
      .then((response) => response.json())
      .then((json) => {
        setMeetups(json);
      });
  }, [options.url]);

  return {
    meetups,
    setMeetups,
  };
};
