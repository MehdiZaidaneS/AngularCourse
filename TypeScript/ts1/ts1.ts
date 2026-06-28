function print(name: string, occ: string, wage: number): string {
    return `Hey, ${name}. You are a(n) ${occ} and your hourly wage is ${wage} dollars.`
}

console.log(print("Sam", "Engineer", 25))