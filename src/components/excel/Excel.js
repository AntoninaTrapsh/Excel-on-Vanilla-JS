import {$} from '@core/dom';

export class Excel {
    constructor(selector, options) {
        this.$el = document.querySelector(selector);
        this.components = options.components || [];
    }

    getRoot() {
        const $root = $.create('div', 'excel');
        this.components.forEach((Component) => {
            const $el = $.create('div', Component.className);
            const component = new Component($el);
            $el.innerHTML = component.toHTML();
            console.log($el);
            $root.append($el);
        });
        console.log($root);
        return $root;
    }

    render() {
        this.$el.append(this.getRoot());
    }
}