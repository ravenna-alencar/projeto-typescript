interface Livro {
  id: number
  titulo: string
  autor: string
  ano: number
  disponivel: boolean
}


const harrypotter: Livro = {
  id: 1,
  titulo: "Harry Potter e a Pedra Filosofal",
  autor: "J.K. Rowling",
  ano: 1997,
  disponivel: true
}

console.log(harrypotter)