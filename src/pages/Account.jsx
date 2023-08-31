const Account = () => {
    return ( 
        <div className="h-[500px] flex place-content-center relative top-10">
            <div className="bg-gray-300 h-[400px] w-96 p-5
            flex place-content-center">
                <form>
                    <input type="text" placeholder="Enter Username" /> <br />
                    <input type="password" placeholder="Enter Password" className="m-5" />
                </form>
            </div>
        </div>
     );
}
 
export default Account;