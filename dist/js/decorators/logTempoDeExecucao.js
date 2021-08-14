export function LogTempoDeExecucao(sec = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const divisor = sec ? 1000 : 1;
            const unidade = sec ? 'sec' : 'milisec';
            const t1 = performance.now();
            const result = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1) / divisor} ${unidade}`);
            return result;
        };
        return descriptor;
    };
}
