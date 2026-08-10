import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#faf8f5] px-6 text-center text-stone-900">
      <div className="max-w-md">
        <p className="font-sans text-sm uppercase tracking-[0.2em] text-[#8a6b32]">404</p>
        <h1 className="mt-4 font-serif text-4xl font-semibold">Pagina no encontrada</h1>
        <p className="mt-4 text-sm leading-6 text-stone-600">
          La pagina que buscas no esta disponible o ha cambiado de direccion.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center border border-stone-900 px-5 py-3 text-sm font-medium uppercase tracking-[0.16em] transition-colors hover:bg-stone-900 hover:text-white"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
