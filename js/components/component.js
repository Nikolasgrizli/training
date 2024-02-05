export class Component {
    /**
     * @param {HTMLElement} root
     * @param { { listeners: string[], className: string } } options
     */
    constructor(root, {listeners, className, tag = 'div'}) {
        this.root = root;
        this.el = null;
        this.listeners = listeners;
        this.events = [];
        this.className = className
        this.tag  = tag;
    }

    /**
     * Init DOM elements and all listeners
     */
    init() {
        const newElement = document.createElement(this.tag);
        newElement.className = this.className;
        this.el = newElement;

        this.listeners.forEach(listener => {
            const callbackListener = (e) =>{
                console.log(`listener ${listener}, event ${e}`)
            }
            this.events.push({name: listener, callbackListener})

            this.el.addEventListener(listener, callbackListener);
        })
    }

    /**
     * Hook which is called after render
     */
    afterRender() {}

    /**
     * Clean up the dom and then render component HTML
     */
    render() {
        this.root.innerHTML = '';
        this.root.appendChild(this.el);
    }

    /**
     * Returns component template
     * @return {string}
     */
    toHTML() { return ``;}

    /**
     * Clean up all events and dom elements
     */
    destroy() {
        this.listeners.forEach(listener => {
            const event = this.events.filter(e => e.name === listener);
            this.el.removeEventListener(listener,event[0].callbackListener);
        })
        this.events = [];
        this.root.innerHTML = '';
    }
}



