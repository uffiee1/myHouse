import React, { useEffect, useState } from "react";

// import axios from "axios";

function Welcome() {
  const [name, setName] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://localhost:44311/api/Authentication/user",
        {
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      );

      const content = await response.json();

      setName(content.name);
    })();
  });

  return (
    <div>
      {name ? "Hi," + name : "You are not logged in yet."}
      {/* Hi, {name} */}
    </div>
  );
}

export default Welcome;
