export function On(
   target: EventTarget,
   event: Parameters<typeof target.addEventListener>['0'],
   handler: EventListenerOrEventListenerObject
) {
   target.addEventListener(event, e => {
      if (typeof handler === 'function') {
         handler(e);
      }
   });
}
