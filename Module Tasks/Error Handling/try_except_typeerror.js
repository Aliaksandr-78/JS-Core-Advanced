function undefinedObject(obj, property) {
    try {
        return obj[property]
    } catch (error) {
        if (error instanceof TypeError) {
            console.error('TypeError: Попытка доступа к свойству неопределенного объекта.')
        } else {
            console.error('Произошла ошибка:', error)
        }
        return null
    }
}
