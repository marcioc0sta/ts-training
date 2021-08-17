export function escape (
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const metodoOriginal = descriptor.value
  descriptor.value = function (...args: any[]) {
    let result = metodoOriginal.apply(this, args)
    if(typeof result === 'string') {
      result = result.replace(/<script>[\s\S]*?<\/script>/, '');
    }
    return result
  }
  return descriptor
}