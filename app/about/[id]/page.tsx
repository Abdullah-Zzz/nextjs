
export default async function Page({params} : {params : Promise<{id:string}>}){
    const {id} = await params 
    await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("asda")
        },2000)
    })
    return(

        <div>about : {id}</div>
    )
}