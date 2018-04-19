let Atom = require("Atom.js");
let elements = require("elements.json");
class Molecule {
    constructor( /*array*/ formula) {
        if (!Array.isArray(formula)) throw (new Error("Formula is not of type Array!"));
        this.formula = formula;
        this.atoms = [];
        this.parse();
    }
    parse() {
        this.formula.forEach((atom) => {
            this.atoms.push(new Atom(atom));
        });
    }
};
module.exports = Molecule;