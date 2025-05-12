import {Contact} from './components/contact';
import {Footer} from './components/footer';
import {Header} from './components/header';
import {Hero} from './components/hero';
import {Portfolio} from './components/portfolio';
import {Services} from './components/services';
import {Team} from './components/team';
import {Technologies} from './components/technologies';

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Technologies />
        <Portfolio />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
