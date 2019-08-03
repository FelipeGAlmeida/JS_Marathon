const names = [
    'Ichigo Kurosaki',
    'Didi Mocó',
    'Bruce Wayne'
]

const print = name => console.log(name)
const lastNameFirst = name => {
    const [firstName, lastName] = name.split(" ")
    return `${lastName}, ${firstName}`
}

names
    .sort()
    .map(lastNameFirst)
//    .reverse()
    .forEach(print)