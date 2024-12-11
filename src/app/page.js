import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-32 flex flex-col justify-items-center items-center">
      <h1 className="text-4xl text-gray-800">Hospital</h1>

      <div className="pt-20 flex flex-col justify-items-center items-center">
        <h2 className="text-blue-700 text-2xl"><Link href="/medicos-db">Médicos (por Base de Datos)</Link></h2>
        <p>Consulta los médicos que están alojados en la BBDD, modificalos, elimínalos... </p>
        <h2 className="text-blue-700 text-2xl"><Link href="medicos-api">Médicos (por API)</Link></h2>
        <p>Consulta los médicos que están alojados en la Fake API, modificalos, elimínalos...</p>
      </div>

      <div className="pt-20 flex flex-col justify-items-center items-center">
        <h2 className="text-blue-700 text-2xl"><Link href="/pacientes-db">Pacientes (por Base de Datos)</Link></h2>
        <p>Consulta los pacientes que están alojados en la BBDD, modificalos, elimínalos... </p>
        <h2 className="text-blue-700 text-2xl"><Link href="/pacientes-api">Pacientes (por API)</Link></h2>
        <p>Consulta los pacientes que están alojados en la Fake API, modificalos, elimínalos...</p>
      </div>
    </div>
  );
}
