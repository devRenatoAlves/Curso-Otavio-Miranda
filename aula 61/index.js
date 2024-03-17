function* geradora () {
    yield 'soma'

    yield "two"

    yield 3
}

const g1 = geradora()

console.log (g1.next().value)
console.log (g1.next().value)
console.log (g1.next().value)