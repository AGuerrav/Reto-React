
// creando las acciones
export const CALLING_DOG = 'CALLING_DOG';
export const callingDog = () => {
  return { type: 'CALLING_DOG' };
};
export const CALLING_DOG_FAIL = 'CALLING_DOG_FAIL';
export const callingDogFail = () => {
  return { type: 'CALLING_DOG_FAIL' };
};
export const CALLING_DOG_READY = 'CALLING_DOG_READY';
export const callingDogReady = (data) => {
  return { type: 'CALLING_DOG_READY',
    url: data.message };
};
