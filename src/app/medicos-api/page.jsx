import Link from "next/link";
import Fallback from "@/components/fallback";
import Medicos from "@/components/api-medicos";
import MedicoNuevo from "@/components/api-medico-nuevo";
import { Suspense } from "react";

async function MedicosPage({ searchParams }) {
    const { query } = await searchParams;

    return (
        <section className="min-h-screen max-w-[1024px] mx-auto px-10 py-10">
            <Link href="/" className="fixed text-4xl p-2 bg-orange-300 rounded-full">🏠</Link>

            <h1 className='py-10 text-3xl text-blue-500 text-center border-b-4 border-b-blue-500'>
                API REST
            </h1>

            <MedicoNuevo />

            <Suspense fallback={<Fallback>Obteniendo datos ... </Fallback>}>
                <Medicos query={query || ''} />
            </Suspense>
        </section>
    );
}

export default MedicosPage;     