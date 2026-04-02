interface Livro {
  id: number
  titulo: string
  autor: string
  ano: number
  disponivel: boolean
}

const livros: Livro[] = []

function adicionarLivro(livro: Livro): void {
  livros.push(livro)
}

adicionarLivro({
    id: 1,
    titulo: "Harry Potter e a Pedra Filosofal",
    autor: "J.K. Rowling",
    ano: 1997,
    disponivel: true
})
adicionarLivro({
    id: 2,
    titulo: "O Hobbit",
    autor: "J.R.R. Tolkien",
    ano: 1937,
    disponivel: true
})
adicionarLivro({
    id: 3,
    titulo: "Verity",
    autor: "Colleen Hoover",
    ano: 2020,
    disponivel: true
})
adicionarLivro({
    id: 4,
    titulo: "A Revolução dos Bichos",
    autor: "George Orwell",
    ano: 1945,
    disponivel: true
})
adicionarLivro({
    id: 5,
    titulo: "Orgulho e Preconceito",
    autor: "Jane Austen",
    ano: 1813,
    disponivel: true
})

function emprestarLivro(id: number): void {
  const livro = livros.find(l => l.id === id)

  if (!livro) {
    console.log("Livro não encontrado")
    return
  }

  if (!livro.disponivel) {
    console.log("Livro já está emprestado")
    return
  }

  livro.disponivel = false
  console.log("Livro emprestado com sucesso")
}

function listarLivros(): void {
  console.log(livros)
}

listarLivros()

emprestarLivro(2)

listarLivros()

