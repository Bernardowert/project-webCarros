import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.svg";
import { FiLogIn, FiUser } from "react-icons/fi";
import { ContainerGRID } from "../containerGRID";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
export function Header() {
    const {signed, loadingAuth} = useContext(AuthContext);



  return (
      <header className="flex items-center h-16 bg-white drop-shadow">
         <ContainerGRID className="flex items-center justify-between">
            <Link to="/">
            <img
            src={logoImg}
            alt="Icone web carros"
            title="Voltar para Home"
            />
            </Link>

            {
                !loadingAuth && signed && (
                    <Link to="/dashboard" aria-label="ir para dashboard" className="border-2 rounded-full p-1 border-gray-900">
                     <FiUser size={22} color="#000"/>
                    </Link>
                )
            }
            {
                !loadingAuth && !signed && (
                    <Link to="/login" aria-label="ir para login" className="border-2 rounded-full p-1 border-gray-900">
                     <FiLogIn size={22} color="#000"/>
                    </Link>
                )
            }
         </ContainerGRID>
      </header>
  )
}