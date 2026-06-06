export default function SectionLabel({ children, light = false }) {
  return (
    <div className={`flex items-center gap-3 text-xs font-bold tracking-[0.25em] uppercase mb-3 ${light ? "text-caramel" : "text-caramel"}`}>
      <span className="block w-8 h-px bg-caramel" />
      {children}
    </div>
  );
}