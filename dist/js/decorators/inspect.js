export function inspect(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`--- Método ${propertyKey}`);
        console.log(`------ params -> ${JSON.stringify(args)}`);
        const result = metodoOriginal.apply(this, args);
        console.log(`------ retorno -> ${JSON.stringify(result)}`);
        return result;
    };
    return descriptor;
}
