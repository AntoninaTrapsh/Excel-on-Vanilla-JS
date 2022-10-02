import {capitalize} from '@core/utils';

export class DomListener {
    constructor($root, listeners = []) {
        if (!$root) {
            throw new Error('No $root provided for DomListener');
        }
        this.$root = $root;
        this.listeners = listeners;
    }

    initDOMListeners() {
        this.listeners.forEach((listener) => {
            this.$root.on(listener, this[getMethodName(listener)].bind(this));
        });
    }

    removeDOMListeners() {

    }
}

function getMethodName(eventName) {
    return 'on' + capitalize(eventName);
}
