import * as model from "./model.js";
import * as view from "./view.js";

const init = () => {
    model.initializeBoard();
    view.initializeTemplate();
}

export {init};