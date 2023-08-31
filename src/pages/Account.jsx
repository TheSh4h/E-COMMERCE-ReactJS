const Account = () => {
    return ( 
        <div className="h-[500px] flex place-content-center relative top-10">
            <div className="bg-gray-100 h-[400px] w-96 p-5 rounded-3xl shadow-2xl">
                <h1>Login</h1>
                <form className="w-full">
                    <input className="w-full py-2 rounded-3xl p-2" type="text" placeholder="Enter Username" /> <br />
                    <input className="w-full py-2 rounded-3xl p-2 mt-2 mb-4" type="password" placeholder="Enter Password" />
                    <button className="w-full py-2 rounded-3xl p-2 
                    bg-green-800 text-white font-semibold
                    hover:bg-white hover:text-black active:bg-black active:text-white
                     transition delay-150">Login</button>
                </form>
                <div className="flex place-content-center m-2">
                    <p>Don't have an account yet?</p>
                    <a href="#" className="underline font-semibold ml-2">Sign Up</a>
                </div>
            </div>
        </div>
     );
}
 
export default Account;