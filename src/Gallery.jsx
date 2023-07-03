const Gallery = () => {
    return ( 

    <div className="grid grid-cols-4 gap-4 m-10 text-center">
        <div className="rounded-xl bg-slate-400 h-96 w-50"> COLUMN</div>
        <div className="rounded-xl bg-slate-400 h-96 w-50"> COLUMN</div>
        <div className="rounded-xl bg-slate-400 h-96 w-50"> COLUMN</div>
        <div className="rounded-xl grid grid-rows-2 gap-4 w-50"> 
            <div className="rounded-xl bg-slate-400 w-50">
                row
            </div>

            <div className="rounded-xl bg-slate-400 2-50">
                row
            </div>
        </div>
    </div>

    );
}
 
export default Gallery;