// (b -> c) (a -> b) -> a -> c
const B = a => b => x => a(b(x))


// (b -> c, a -> c) -> a -> c
const compose = (a, b) => B ( a ) ( b )


export {
    compose,
    compose as b,
    B
}
