export function domInjector (selector: string) {
  return function (target: any, propertyKey: string) {
    let element: HTMLElement
    const get = function () {
      if(!element) {
        element = <HTMLInputElement>document.querySelector(selector)
      }
      return element
    }

    Object.defineProperty(target, propertyKey, { get })
  }
}