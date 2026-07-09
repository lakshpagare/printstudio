export default function Sidebar() {
  return (
    <aside className="rounded-2xl bg-white p-5 shadow">
      <h2 className="font-semibold">
        Layers
      </h2>

      <div className="mt-5 space-y-3">

        <div className="rounded-lg border p-3">
          Image Layer
        </div>

        <div className="rounded-lg border p-3">
          Text Layer
        </div>

      </div>
    </aside>
  );
}