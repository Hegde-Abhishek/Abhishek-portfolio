export default function Resume() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center p-4">
      <iframe
        src="/resume.pdf"
        className="w-full h-screen max-w-5xl"
        title="Abhishek Hegde Resume"
      />
    </div>
  );
}