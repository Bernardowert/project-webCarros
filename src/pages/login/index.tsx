import { Link, useNavigate } from "react-router-dom";
import logoImg from "../../assets/logo.svg";
import { ContainerGRID } from "../../components/containerGRID";
import { Input } from "../../components/input";


import {useForm} from 'react-hook-form'
import {z} from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../services/firebaseConnection";
import { useEffect } from "react";


const schema = z.object({
  email: z.email("o email é inválido").min(1, "O email é obrigatório"),
  password: z.string().min(1, "A senha é obrigatória"),
});

type FormData = z.infer<typeof schema>




export function Login() {
  const navigate = useNavigate();
  const {register, handleSubmit, formState: { errors} } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  function onSubmit(data: FormData){
     signInWithEmailAndPassword(auth, data.email, data.password)
     .then((user) => {
        console.log("Logado com sucesso");
        console.log(user);
        navigate("/dashboard", {replace: true});
     })
     .catch((error => {
        console.log(error);
     }))
  }

  useEffect(() => {
    async function handleLogout(){
      await signOut(auth);
    }
    handleLogout();
  }, [])
  return (
    <ContainerGRID>
      <div className="w-full min-h-screen flex justify-center items-center flex-col gap-4">
         <Link to="/" className="mb-6 max-w-sm w-full">
            <img
              src={logoImg}
              alt="Logo web Motors"
              className="w-full"
            />
         </Link>

         <form className="bg-white max-w-xl w-full rounded-lg p-4" onSubmit={handleSubmit(onSubmit)}>
             <div className="mb-3">
               <Input
              type="email"
              placeholder="Digite seu email..."
              name="email"
              error={errors.email?.message}
              register={register}
             />
             </div>
              <div className="mb-3">
               <Input
              type="password"
              placeholder="Digite sua senha..."
              name="password"
              error={errors.password?.message}
              register={register}
             />
             </div>
             <button className="bg-zinc-900 w-full rounded-md text-white h-10 font-medium">
              Acessar
             </button>
         </form>

          <Link to="/register">
           Ainda não possui uma conta? Cadastre-se
         </Link>
      </div>
    </ContainerGRID>
  )
}