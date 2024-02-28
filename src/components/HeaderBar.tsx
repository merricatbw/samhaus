import logo from "../assets/logo.png";

const HeaderBar = ({}) => {
    return ( 
        <header className="fixed items-center top-0 h-16 w-full flex bg-slate-100">
            <div className="container mx-auto">
                <img className="h-14 w-14" src={logo} alt="samhaus logo" />
            </div>
        </header>
     );
}
 
export default HeaderBar;