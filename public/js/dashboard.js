/* =========================
   VALIDAR SESION
========================= */

(async function () {

    try {

        const res =
            await fetch(
                "/api/myreservations"
            );

        if (
            res.status === 401
        ) {

            window.location.replace(
                "/pages/login.html"
            );
        }

    } catch (err) {

        window.location.replace(
            "/pages/login.html"
        );
    }

})();
/* =========================
   USER INFO
========================= */

const userName =
    localStorage.getItem(
        "userName"
    ) || "Usuario Demo";
const userRole =
    localStorage.getItem(
        "userRole"
    ) || "Usuario";

document.getElementById(
    "sidebarUserRole"
).innerText =
    userRole;

document.getElementById(
    "topbarUserRole"
).innerText =
    userRole;

document.getElementById(
    "settingsUserRole"
).innerText =
    userRole;
/* AVATAR */

const initials =
    userName
        .split(" ")
        .map(word => word[0])
        .join("")
        .substring(0, 2)
        .toUpperCase();

document.getElementById(
    "userAvatar"
).innerText =
    initials;
document.getElementById(
    "dashboardMenu"
).addEventListener("click", (e) => {

    e.preventDefault();

    currentView = "all";

    calendar.refetchEvents();
});

/* SIDEBAR */

document.getElementById(
    "sidebarUserName"
).innerText =
    userName;
document.getElementById(
    "settingsUserName"
).innerText =
    userName;

document.getElementById(
    "sidebarUserRole"
).innerText =
    userRole;

document.getElementById(
    "topbarUserRole"
).innerText =
    userRole;

document.getElementById(
    "settingsUserRole"
).innerText =
    userRole;
document.getElementById(
    "sidebarUserRole"
).innerText =
    userRole === "admin"
        ? "Administrador"
        : "Usuario";

document.getElementById(
    "sidebarAvatar"
).innerText =
    initials;

/* WELCOME */

const currentHour =
    new Date().getHours();

let greeting =
    "Bienvenido";

if (currentHour >= 5 && currentHour < 12) {

    greeting =
        "Buenos días";

} else if (
    currentHour >= 12 &&
    currentHour < 18
) {

    greeting =
        "Buenas tardes";

} else {

    greeting =
        "Buenas noches";
}

document.getElementById(
    "welcomeMessage"
).innerText =
    `${greeting}, ${userName}`;

/* =========================
   BLOQUEAR BACK CACHE
========================= */

window.addEventListener(
    "pageshow",
    async function (event) {

        if (
            event.persisted
        ) {

            const res =
                await fetch(
                    "/api/myreservations"
                );

            if (
                res.status === 401
            ) {

                window.location.replace(
                    "/pages/login.html"
                );
            }
        }
    }
);