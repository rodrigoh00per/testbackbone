export const loadState = () => {

  try {
    const serializedState = localStorage.getItem('stateTest')

    return serializedState === null ? undefined : JSON.parse(serializedState)
  } catch (e) {
    return undefined
  }
}

export const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('stateTest', serializedState)
  } catch (e) {}
}
