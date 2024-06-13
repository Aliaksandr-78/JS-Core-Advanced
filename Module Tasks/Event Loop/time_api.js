async function ApiTimeout(url, timeout) {
    const controller = new AbortController()
    const signal = controller.signal
    const timeoutId = setTimeout(() => {
        controller.abort()
    }, timeout)

    try {
        const response = await fetch(url, { signal })
        clearTimeout(timeoutId)
        const data = await response.json()
        return data
    } catch (error) {
        if (error.name === 'AbortError') {
            console.error('Запрос был отменен из-за тайм-аута')
        } else {
            console.error('Ошибка запроса:', error)
        }
        throw error
    }
}
