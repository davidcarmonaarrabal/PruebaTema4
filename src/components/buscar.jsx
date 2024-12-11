import Form from "next/form"; 

function Buscar() {
    return (
        <Form action="" className="text-right">
            <input
                name="query"
                type='search'
                className="text-black p-2 pl-10 rounded-full my-5 bg-[url('/search.svg')] bg-[length:16px_16px] bg-[center_left_10px] bg-no-repeat border border-slate-200 focus:outline-blue-300"
            />
            <button type="submit" className='hidden'>Buscar</button>
        </Form>
    );
}

export default Buscar;