export function LogTempoDeExecucao(sec: boolean = false) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const metodoOriginal = descriptor.value
    descriptor.value = function (...args: any[]) {
      const divisor: number = sec ? 1000 : 1
      const unidade: string = sec ? 'sec' : 'milisec'
      const t1 = performance.now()
      const result = metodoOriginal.apply(this, args)
      const t2 = performance.now()
      console.log(`${propertyKey}, tempo de execução: ${(t2 - t1)/divisor} ${unidade}`)
      return result
    }

    return descriptor
  }
}