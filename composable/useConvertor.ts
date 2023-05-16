export default function useConvertor() {
  function parse(n: number) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return { parse }
}
