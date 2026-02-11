export default async function Order({params} : {params : Promise<{id : string}>}){
    const {id} = await params
     
    return (
        <div className="shadow-xs shadow-slate-700 p-2 border-r-2 w-full h-full">
            Order : {id}
        </div>
    )
}