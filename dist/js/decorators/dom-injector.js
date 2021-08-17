export function domInjector(selector) {
    return function (target, propertyKey) {
        let element;
        const get = function () {
            if (!element) {
                element = document.querySelector(selector);
            }
            return element;
        };
        Object.defineProperty(target, propertyKey, { get });
    };
}
