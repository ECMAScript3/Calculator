var THREE = require("../OrbitControls.js")(require("three"));
module.exports = function() {
    this.continue = true;
    this.starts = (function() {
        this.can = document.getElementById("render");
        this.ren = new THREE.WebGLRenderer({
            canvas: this.can,
            alpha: true,    
            antialias: true
        });
        setTimeout(() => {
            this.ren.setSize(this.can.clientWidth, this.can.clientHeight);
        }, 500);
        this.can.onresize = () => {
            this.ren.setSize(this.can.clientWidth, this.can.clientHeight);
        };
        this.scn = new THREE.Scene();
        this.cam = new THREE.PerspectiveCamera(75, 1920/1080, 1, 10000);
        this.controls = new THREE.OrbitControls(this.cam, this.can);
        this.cam.position.set(0,20,50);
        this.controls.update();

        let geometry = new THREE.BoxGeometry(10,10,10);
        var material = new THREE.MeshBasicMaterial({
            color: 0xff0000,
            wireframe: true
        });
        this.cube = new THREE.Mesh(geometry, material);
        this.scn.add(this.cube);

        this.cam.position.z = 5;

        this.animate();
    }).bind(this);
    this.animate = (function() {
        this.controls.update();
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
        this.ren.render(this.scn, this.cam);
        if (this.continue) requestAnimationFrame(this.animate);
    }).bind(this);
    this.ends = function() {
        this.continue = false;
    }
};