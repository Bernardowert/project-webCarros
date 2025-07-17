import { Link, useNavigate } from "react-router-dom";
import logoImg from "../../assets/logo.svg";
import { ContainerGRID } from "../../components/containerGRID";
import { Input } from "../../components/input";


import {useForm} from 'react-hook-form'
import {z} from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { createUserWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../../services/firebaseConnection";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";


const schema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  email: z.email("o email é inválido").min(1, "O email é obrigatório"),
  password: z.string().min(6, "A senha é menor do que 6 caracteres").min(1, "A senha é obrigatória"),
});

type FormData = z.infer<typeof schema>




export function Register() {
  const {handleInfoUser} = useContext(AuthContext);
  const navigate = useNavigate();

  const {register, handleSubmit, formState: { errors} } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  useEffect(() => {
      async function handleLogout(){
        await signOut(auth);
      }
      handleLogout();
    }, [])

 async function onSubmit(data: FormData){
     createUserWithEmailAndPassword(auth, data.email, data.password)
     .then(async (user) => {
       await updateProfile(user.user,{
         displayName: data.name
       })
        
       handleInfoUser({
         name: data.name,
         email: data.email,
         uid: user.user.uid
       })
       console.log("Cadastrado com sucesso");
       navigate("/dashboard", {replace: true});
     })
     .catch((error) => {
        console.log("error ao castrad");
        console.log(error.message);
     })
  }
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
              type="text"
              placeholder="Digite seu nome completo..."
              name="name"
              error={errors.name?.message}
              register={register}
             />
             </div>
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
              Cadastrar
             </button>
         </form>
         <Link to="/login">
         Já possui uma conta? Faça o login!
         </Link>
      </div>
    </ContainerGRID>
  )
}