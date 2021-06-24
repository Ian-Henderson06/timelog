
const body = document.body

body.addEventListener("mouseover", () => {
    //createBrowserWindow();
    ipc.send("mouseover", "myred");
});

body.addEventListener("mouseout", () => {
    //createBrowserWindow();
    ipc.send("mouseout", "myred");
});