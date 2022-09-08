import Header from "./components/Header"
import NotificationButton from "./components/NotificationButton"
import SalesCard from "./components/SalesCard"

function App() {
  return (
    <>
      <Header />
      <NotificationButton />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
          <NotificationButton />
          <SalesCard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
