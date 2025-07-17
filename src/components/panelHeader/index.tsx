import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { auth } from "../../services/firebaseConnection";


const dashboardInfo = [
    {
       path: "/dashboard",
       text: "Dashboard"
    },
    { 
       path: "/dashboard/new",
       text: "Cadastrar Carro"
    }
]

export function DashboardHeader(){

    async function handleLogout(){
        await signOut(auth);
    }
    return(
        <div className="w-full flex items-center justify-between h-10 bg-red-500 rounded-lg text-white font-medium px-4 mb-4">
            <nav className="flex items-center gap-4">
                {
                    dashboardInfo.map(({path,text}) => (
                        <Link to={path} key={text}>{text}</Link>
                    ))
                }
            </nav>

            <button onClick={handleLogout}>
                Sair da conta
            </button>
        </div>
    )
}