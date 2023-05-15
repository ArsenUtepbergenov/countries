export function useTheme() {
  const dark = useState<boolean>('dark', () => false)

  function toggle() {
    dark.value = !dark.value
  }

  return { dark, toggle }
}
