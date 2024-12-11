import Pacientes from "@/components/db-pacientes";
import PacienteNuevo from "@/components/db-paciente-nuevo";
import { Suspense } from "react";
import Link from "next/link";
import Fallback from "@/components/fallback";

async function PacientePage({ searchParams }) {
    const { query } = await searchParams;

    return (
        <section className="min-h-screen max-w-[1024px] mx-auto px-10 py-10">
            <Link href="/" className="fixed text-4xl p-2 bg-orange-300 rounded-full">🏠</Link>

            <h1 className='py-10 text-3xl text-blue-500 text-center border-b-4 border-b-blue-500'>
                PACIENTES BASE DE DATOS
            </h1>

            <PacienteNuevo />

            <Suspense fallback={<Fallback>Obteniendo médicos ... </Fallback>}>
                <Pacientes query={query || ''} />
            </Suspense>
        </section>
    );
}

export default PacientePage;