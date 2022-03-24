export function formatDoc(doc) {
    return {
        id: doc.id,
        ...doc.data()
    }
}

export function capitalize(word) {
    const letters = word.split('')
    return [letters[0].toUpperCase(), ...letters.slice(1, letters.length)].join('')
}