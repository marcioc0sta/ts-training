export function escape(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        let result = metodoOriginal.apply(this, args);
        if (typeof result === 'string') {
            result = result.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return result;
    };
    return descriptor;
}
