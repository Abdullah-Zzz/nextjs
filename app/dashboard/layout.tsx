export default function Layout({children,analytics,notification,orders} : Readonly<{children:React.ReactNode,analytics : React.ReactNode,notification:React.ReactNode,orders:React.ReactNode}>){
    return(
        <div className="p-4 ">
            {children}
        <div className="flex mt-12 ">

            <div className="flex  flex-col w-[40%]">
                <div className="mb-4">
                    {analytics}
                </div>
                
                <div>
                {notification}
                </div>

            </div>
            <div className="ml-12 w-[60%]">
                {orders}
            </div>


        </div>

        </div>
    )
}