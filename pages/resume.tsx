export default function Resume() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">📄 Resume</h2>
      <div className="flex justify-center">
        <iframe
          src="/resume.pdf"
          className="w-full max-w-4xl h-[85vh] border rounded-xl shadow-lg"
          title="Abhishek Hegde Resume"
        />
      </div>
    </div>
  );
}
