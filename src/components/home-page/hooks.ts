import React from "react";
import { format } from "date-fns";

export default function useHomePageController() {
  const [userName, setUserName] = React.useState<string>("");
  const [date, setDate] = React.useState<Date>(new Date());
  const [homeGreeting, setHomeGreeting] = React.useState<string>("");

  const handleHomeGreetings = React.useCallback(() => {
    const hours = date.getHours();
    if (hours >= 0 && hours < 12) {
      setHomeGreeting("Bom dia");
    } else if (hours >= 12 && hours < 18) {
      setHomeGreeting("Boa tarde");
    } else {
      setHomeGreeting("Boa noite");
    }
  }, [date]);

  const handleDate = React.useCallback(() => {
    const date = new Date();
    // setDate(format(date, "dd/MM/yyyy"));
  }, []);

  return {
    homeGreeting,
    date,
    handleHomeGreetings,
  };
}
