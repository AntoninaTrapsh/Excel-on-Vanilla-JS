import {capitalize} from '@core/utils';

export class DomListener {
    constructor($root, listeners = [], name) {
        if (!$root) {
            throw new Error('No $root provided for DomListener');
        }
        this.$root = $root;
        this.listeners = listeners;
        this.name = name;
    }

    initDOMListeners() {
        this.listeners.forEach((listener) => {
            const method = getMethodName(listener);
            this[method] = this[method].bind(this);
            this.$root.on(listener, this[getMethodName(listener)].bind(this));
        });
    }

    destroyDOMListener() {
        this.listeners.forEach((listener) => {
            this.$root.off(listener, this[getMethodName(listener)]);
        });
    }

    removeDOMListeners() {

    }
}

function getMethodName(eventName) {
    return 'on' + capitalize(eventName);
}
