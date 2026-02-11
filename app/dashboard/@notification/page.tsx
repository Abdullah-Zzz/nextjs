export default function Notification(){
    if (Math.random() < 0.3) throw new Error("Failed to load")

    return (
        <div className="shadow-xs shadow-slate-700 p-2 rounded-sm w-full h-36">
            Notification
        </div>
    )
}