function App() {
  return (
    <div className="flex flex-col bg-zinc-300 w-md min-h-[550px]">
      {/* Header */}
      <header className="bg-[#141414] text-white text-center py-2 flex justify-between items-center px-4 fixed w-full">
        <p className="text-sm">gekkonote</p>
        <nav className="flex space-x-4">
          <button className="px-4 py-2 bg-green-500 text-white hover:bg-green-600 transition-colors rounded-full">
            Click
          </button>
          <button className="px-4 py-2 bg-green-500 text-white hover:bg-green-600 transition-colors rounded-full">
            Click
          </button>
          <button className="px-4 py-2 bg-green-500 text-white hover:bg-green-600 transition-colors rounded-full">
            Click
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <p className="text-lg text-gray-700 mb-6 text-center max-w-md">
          This is a extension using React & Tailwind CSS.
        </p>
        <button className="px-4 py-2 bg-green-500 text-white hover:bg-green-600 transition-colors rounded-full">
          Click Me
        </button>
      </main>

      {/* Footer */}
      {/* <footer className="bg-[#141414] text-white text-center py-2">
        <p className="text-sm">gekkonote © 2025</p>
      </footer> */}
    </div>
  );
}

export default App;
