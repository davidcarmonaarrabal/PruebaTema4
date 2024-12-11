import mysql from "@/lib/mysql"
import { revalidatePath } from "next/cache"
import SubmitButton from "@/components/submit-button"

async function nuevoPaciente(formData) {
    'use server'
    const nombre = formData.get('nombre')
    const especialidad = formData.get('especialidad')
    const perfil = formData.get('perfil')

    const sql = 'insert into `pacientes` (`nombre`, `especialidad`, `perfil`) values (?, ?, ?)'
    const values = [nombre, especialidad, perfil];

    const [result, fields] = await mysql.query(sql, values)

    await new Promise(resolve => setTimeout(resolve, 2000))

    revalidatePath('/pacientes-db')
}

function PacienteNuevo() {
    return (
        <form className='my-10 grid grid-cols-[150px_auto] gap-4'>

            <label htmlFor='nombre'>Nombre</label>
            <input required id='nombre' name='nombre' className='p-1 border border-slate-200 focus:outline-blue-300 text-lg' />

            <label htmlFor='especialidad'>Localidad:</label>
            <input required id='especialidad' name='especialidad' className='p-1 border border-slate-200 focus:outline-blue-300 text-lg' />

            <label htmlFor='fehcha_nacimiento'>Fecha de nacimiento:</label>
            <input required id='fecha_nacimiento' name='fecha_nacimiento' className='p-1 border border-slate-200 focus:outline-blue-300 text-lg' type="date"/>

            <div className='col-span-2 grid gap-2'>
                <SubmitButton formAction={nuevoPaciente} className='disabled:bg-slate-600 bg-green-600 text-white px-4 py-2 rounded-xl'>
                    Guardar paciente
                </SubmitButton>
                <button type='reset' className='bg-blue-600 text-white px-4 py-2 rounded-xl'>
                    Limpiar campos
                </button>
            </div>
        </form>
    );
}

export default PacienteNuevo;