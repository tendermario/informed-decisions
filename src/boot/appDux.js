const TEST = 'TEST';

const intitialState = { test: 'test' };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TEST:
     return state;
    default:
     return state;
  }
}

export function test() {
  return {};
}
