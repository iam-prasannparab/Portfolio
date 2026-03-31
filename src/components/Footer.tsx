export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-800 bg-gray-950 text-center">
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} DevOps Portfolio. Built with React & Tailwind.
      </p>
    </footer>
  );
}
