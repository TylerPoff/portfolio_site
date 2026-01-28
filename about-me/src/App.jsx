import Bio from "./Bio";
import Contact from "./Contact";
import Header from "./Header";
import Skills from "./Skills";


function App() {
  return (
    <div className="max-w-screen-3xl mx-auto p-8 text-center bg-gray-900 text-gray-100 min-h-screen">
      <div className="max-w-screen-md mx-auto px-4">
        <Header />
        <Bio />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App
