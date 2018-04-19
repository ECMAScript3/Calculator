{
    let t = false;
    let k = document.getElementById("flscn");
    let r = document.getElementById("render");
    let o = document.getElementById("overlay");
    k.onclick = (() => {
        if (t) {
            k.innerText = "fullscreen";
            o.style.width = "67vw";
            o.style.height = "calc(67vw * 0.5625)";
            r.style.width = "67vw";
            r.style.height = "calc(67vw * 0.5625)";
            o.style.zIndex = "1";
            r.style.zIndex = "0";
        } else {
            k.innerText = "fullscreen_exit";
            o.style.width = "100vw";
            o.style.height = "100vh";
            r.style.width = "100vw";
            r.style.height = "100vh";
            o.style.zIndex = "12";
            r.style.zIndex = "11";
        }
        r.onresize();
        t = !t;
    });

}