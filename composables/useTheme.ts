export function useTheme() {
    const theme = ref('light')
    
    function toggleTheme() {
      theme.value = theme.value === 'light' ? 'dark' : 'light'
    }
  
    return {
      theme,
      toggleTheme
    }
  }
  