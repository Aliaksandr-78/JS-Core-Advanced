async function fetchDataAndUseIt(firstUrl, secondUrl) {
    try {
        const firstResponse = await fetch(firstUrl);        
        if (!firstResponse.ok) {
            throw new Error(`Ошибка при запросе ${firstUrl}`)
        }
        const firstData = await firstResponse.json()
        const secondResponse = await fetch(secondUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(firstData)
        })
        if (!secondResponse.ok) {
            throw new Error(`Ошибка при запросе ${secondUrl}`)
        }
        const secondData = await secondResponse.json()
        return secondData
    } catch (error) {
        console.error('Произошла ошибка:', error.message)
    }
}
