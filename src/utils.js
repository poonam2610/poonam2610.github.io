export function _isEmpty(value) {
  return Object.keys(value).length === 0
    && value.constructor === Object;
}

