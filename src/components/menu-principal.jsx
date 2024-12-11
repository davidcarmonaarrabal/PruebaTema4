'use client'
import Link from "next/link";
import { Menu, X } from 'lucide-react';
import { useState } from "react";

const classLink = "text-blue-700 block bg-blue-50 p-2 rounded-md mb-1 hover:bg-blue-400 transition duration-200";

function MenuPrincipal(){
    const [open, setOpen] = useState(true);

    return (

        <div>
            {open
                ? <Menu
                onClick={() => setOpen(false)}
                className="fixed top-2 right-2 bg-blue-100 pl-2 pr-2 size-[40px] rounded-xl shadow-xl hover:bg-blue-400 transition duration-200" />
                : <Menu
                onClick={() => setOpen(true)}
                className="fixed top-2 right-2 bg-blue-100 pl-2 pr-2 size-[40px] rounded-xl shadow-xl hover:bg-blue-400 transition duration-200" />
            }

            { open && 

            <aside className="w-[300px] bg-blue-200 border p-3 rounded-xl shrink-0">
                <Link className={`${classLink}`} href={"/"}> Inicio </Link>
                <summary className={`${classLink}`}>
                    <Link href="/medicos-db"> Médicos (BBDD) </Link>
                </summary>
                <summary className={`${classLink}`}>
                    <Link href="/medicos-api"> Médicos (API) </Link>
                </summary>
                <summary className={`${classLink}`}>
                    <Link href="/pacientes-db"> Pacientes (BBDD) </Link>
                </summary>
                <summary className={`${classLink}`}>
                    <Link href="/pacientes-api"> Pacientes (API) </Link>
                </summary>
            </aside>
        }
        </div>
    )
}

export default MenuPrincipal;