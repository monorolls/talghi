  const redirectToTelegram = () => {
    window.location.href = "#";
  };

  document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
    redirectToTelegram();
  });

  document.addEventListener("keydown", function(event) {
    if ((event.ctrlKey && event.key === "u") || event.key === "F12") {
      event.preventDefault();
      redirectToTelegram();
    }
  });

  let opened = false;
  setInterval(function() {
    const start = new Date();
    debugger;
    const end = new Date();
    if (end - start > 100) {
      if (!opened) {
        opened = true;
        redirectToTelegram();
      }
    }
  }, 1000);

  if (window.location.href.indexOf("view-source:") !== -1) {
    redirectToTelegram();
  }
                const iframe = document.getElementById("DreamFrame");
              const checkDisplay = setInterval(() => {
                  const target = document.getElementById("text-gen5");
                  if (target && target.style.display !== "none" && window.getComputedStyle(target).display !== "none") {
                      iframe.style.display = "block";
                      clearInterval(checkDisplay);
                  }
              }, 1000);
