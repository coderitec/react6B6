
const books = [
  {
    id: '001',
    title: 'Atomic Habits',
    author: 'James Clear'
  },
  {
    id: '002',
    title: 'Things Fall Apart',
    author: 'Chinua Achebe'
  },
  {
    id: '003',
    title: 'The Beautiful Ones Are Not Yet Born',
    author: 'Aye Kwe Amah'
  },
  {
    id: '004',
    title: 'Zero to One',
    author: 'Peter Thale'
  },
  {
    id: '005',
    title: 'The Bottled Leopard',
    author: 'Chukwuemeka Ike'
  },
  {
    id: '006',
    title: 'Purple Hibiscus',
    author: 'Chimanmanda Adichie'
  }

]

const bookCard = books.map(book => (
  <section key={book.id} className="p-[4rem] shadow-2xl">
    <h2>{book.title}</h2>
    <p>{book.author}</p>
  </section>
))

export default function Course() {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      {bookCard}
    </div>
  )
}
