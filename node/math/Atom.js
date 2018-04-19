let THREE = require("three");
let elements = require("./elements.json")["elements"];
class Atom {
    constructor(/*String*/ sym) {
        this.elem = elements.find((atom) => {
            return atom.symbol == sym;
        });
        this.model = {};
        this.model.geometry = new THREE.SphereGeometry(5, 32, 32);
        this.model.material = new THREE.MeshToonMaterial({
            color: 0xff00ff,
            reflectivity: 0.5,
            specular: .5,
            shininess: 0
        });
        this.model.mesh = new THREE.Mesh(this.model.geometry, this.model.material);
        console.log(this.model.geometry.verticies);
    }
};
module.exports = Atom;