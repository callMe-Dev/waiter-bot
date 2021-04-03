export const random = (len: number): number => {
  let random = 0
  if (len > 0) {
    random = Math.floor(Math.random() * len)
    return Math.round(random)
  } else {
    random = Math.floor(Math.random() * 20)
    return Math.round(random)
  }
}
