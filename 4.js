
                const iframe = document.getElementById("DreamFrame");
              const checkDisplay = setInterval(() => {
                  const target = document.getElementById("text-gen5");
                  if (target && target.style.display !== "none" && window.getComputedStyle(target).display !== "none") {
                      iframe.style.display = "block";
                      clearInterval(checkDisplay);
                  }
              }, 1000);
