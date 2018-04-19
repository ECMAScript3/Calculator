var THREE = require("../OrbitControls.js")(require("three"));
var Atom = require("../math/Atom.js");
module.exports = function() {
    this.continue = true;
    this.starts = (function() {
        this.can = document.getElementById("render");
        this.ren = new THREE.WebGLRenderer({
            canvas: this.can,
            alpha: true,    
            antialias: true
        });
        
        this.ren.setPixelRatio( window.devicePixelRatio )
        this.cam = new THREE.PerspectiveCamera(75, 1920/1080, 1, 10000);
        setTimeout(() => {
            this.cam.aspect = (this.can.clientWidth/this.can.clientHeight);
            this.ren.setSize(this.can.clientWidth, this.can.clientHeight);
        }, 1000);
        this.can.onresize = () => {
            this.cam.aspect = (this.can.clientWidth/this.can.clientHeight);
            this.ren.setSize(this.can.clientWidth, this.can.clientHeight);
        };
        this.scn = new THREE.Scene();
        var lights = [];
        var light = new THREE.AmbientLight( 0xa0a0a0 );
		this.scn.add(light);
        this.controls = new THREE.OrbitControls(this.cam, this.can);
        this.cam.position.set(0,20,50);
        this.controls.update();
        this.ren.setClearColor( 0xf5f5f5, 1 );

        this.scn.add((new Atom("H")).model.mesh);

        this.cam.position.z = 5;

        this.animate();
    }).bind(this);
    this.animate = (function() {
        this.controls.update();
        this.ren.render(this.scn, this.cam);
        if (this.continue) requestAnimationFrame(this.animate);
    }).bind(this);
    this.ends = function() {
        this.continue = false;
    }
};