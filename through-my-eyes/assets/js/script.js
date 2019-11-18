document.addEventListener('DOMContentLoaded', () => {
    new SwapEyesCheckBoxHandler();
});

class SwapEyesCheckBoxHandler {

    constructor () {
        this.swapEyesCheckBox = document.getElementById('swap-eyes');
        this.swapEyesCheckBox.addEventListener('change', e => this.HandleCheck(e));
        this.HandlePageLoad()
    }

    HandleCheck (e) {
        if (e.target.checked) {
            HelperFunctions.setAnchor('through-your-eyes');
        } else {
            HelperFunctions.clearAnchor();
        }
    }

    HandlePageLoad () {
        if (HelperFunctions.getAnchor() === 'through-your-eyes') {
            this.swapEyesCheckBox.checked = true;
        }
    }
}

class HelperFunctions {

    static getAnchor () {
        return (document.URL.split('#').length > 1) ? document.URL.split('#')[1] : null;
    }

    static setAnchor (target) {
        location.hash = target;
    }

    static clearAnchor () {
        history.pushState("", document.title, window.location.pathname + window.location.search);
    }
}