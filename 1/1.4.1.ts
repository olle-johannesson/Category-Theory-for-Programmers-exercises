// a -> a
const identity = <T,> (x: T):T => x

// a -> b -> a
const id = <T,> (x: T) => ():T => x


export {
    identity,
    identity as I,
    id
}


