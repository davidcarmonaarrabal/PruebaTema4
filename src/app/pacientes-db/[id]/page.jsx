import Link from "next/link";
import { notFound } from 'next/navigation'
import mysql from '@/lib/mysql'

async function obtenerPaciente(id) {
    const sql = 'select * from pacientes where id = ?';
    const values = [id]
    const [rows] = await mysql.query(sql, values);

    return rows[0]
}

async function PacientePage({ params }) {
    const { id } = await params
    const paciente = await obtenerPaciente(id)

    if (!paciente) notFound()

    return (
        <section className="min-h-screen max-w-[1024px] mx-auto px-10 py-10">
            <Link href="/pacientes-db" className="fixed p-2 bg-orange-300 rounded-full"> &lt;- Volver </Link>
            <h1 className='py-10 text-3xl text-blue-500 text-center border-b-4 border-b-blue-500'>
                Pacientes #{paciente.id}
            </h1>
            <div className="flex flex-col gap-10 items-center mt-20 p-10 bg-blue-100 rounded-xl">
                <p className="text-6xl place-self-center">{paciente.nombre}</p>
                <p className="text-4xl place-self-center text-slate-400">{paciente.especialidad}</p>
                <p className="text-2xl place-self-center text-blue-400 *:font-bold">{paciente.perfil}</p>
            </div>
        </section>
    );
}

export default PacientePage;