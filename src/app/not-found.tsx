import Link from "next/link";

const PageNotFoundError = () => {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 font-sans sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Página não encontrada
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Desculpe, não conseguimos encontrar a página que você está
            procurando.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-[#00d8ff] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Voltar para o início
            </Link>
            <a href="/contato" className="text-sm font-semibold">
              Entre em contato com o suporte
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default PageNotFoundError;
