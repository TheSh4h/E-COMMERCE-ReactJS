const Navbar = () => {
    return ( 
        <div className="flex justify-between mr-11 ml-11">
                <h1>E-Dump</h1>
                <h1>Categories</h1>
                <h1>Deals</h1>
                <h1>What's New</h1>
                <h1>Delivery</h1>
        
                <input type="text" placeholder="Search Product" className="
                bg-slate-200 rounded-2xl h-7 
                " />
                <h1>Account</h1>
                <h1>Cart</h1>
        </div>
     );
}
 
export default Navbar;