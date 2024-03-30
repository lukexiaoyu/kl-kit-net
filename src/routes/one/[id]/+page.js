

/** @type {import('./$types').PageLoad} */
export async function load({params}) {
    const a=params.id
    return {id:a}
}