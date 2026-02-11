export default async function Orders(){
    await new Promise((res)=>{
        setTimeout(()=>{
            res("as")
        },2000)
    })
    return (
        <div className="shadow-xs shadow-slate-700 p-2 border-r-2 w-full h-full">
            Orders
        </div>
    )
}