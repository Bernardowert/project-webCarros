import { FiUpload } from "react-icons/fi";
import { ContainerGRID } from "../../../components/containerGRID";
import { DashboardHeader } from "../../../components/panelHeader";
import { useForm } from "react-hook-form";

import { Input } from "../../../components/input";

import {z} from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";


const schema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  model: z.string().min(1, "O modelo é obrigatório"),
  year: z.string().min(1, "O ano é obrigatório"),
  km: z.string().min(1, "O km é obrigatório"),
  price: z.string().min(1, "O preço é obrigatório"),
  city: z.string().min(1, "A cidade é obrigatória"),
  whatsapp: z.string().min(1, "O whatsapp é obrigatório").refine((value) => /^(\d{11,12})$/.test(value), {
    message: 'Número inválido',
  }),
  description: z.string().min(1, "A descrição é obrigatória"),
})

type FormData = z.infer<typeof schema>

export function New() {
  const {register, handleSubmit, formState: {errors}, reset} = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });


  function onSubmit(data:FormData){
       console.log(data);
  }

  return (
    <ContainerGRID>
      <DashboardHeader/>

      <div className="w-full bg-white p-3 rounded-lg flex flex-col sm:flex-row items-center gap-2">
          <button className="border-2 w-48 rounded-lg flex items-center justify-center border-gray-600 h-32">
              <div className="absolute cursor-pointer">
                <FiUpload size={30} color="#000"/>
              </div>
              <div className="cursor-pointer">
                 <input type="file" accept="image/*" className="opacity-0 cursor-pointer"/>
              </div>
          </button>
      </div>

      <div className="w-full bg-white p-3 rounded-lg flex flex-col sm:flex-row items-center gap-2 mt-2">
        <form className="w-full"
         onSubmit={handleSubmit(onSubmit)}
        >

          <div className="mb-3">
              <p className="mb-2 font-medium">Nome do Carro</p>
              <Input
               type="text"
               register={register}
               name="name"
               error={errors.name?.message}
               placeholder="Ex: Onix 1.0 ..."
              />
          </div>
          <div className="mb-3">
              <p className="mb-2 font-medium">Modelo do Carro</p>
              <Input
               type="text"
               register={register}
               name="model"
               error={errors.model?.message}
               placeholder="Ex: 1.0 flex plus manual ..."
              />
          </div>

          <div className="flex w-full mb-3 flex-row items-center gap-4">
              <div className="w-full">
              <p className="mb-2 font-medium">Ano do Carro</p>
              <Input
               type="text"
               register={register}
               name="year"
               error={errors.year?.message}
               placeholder="Ex: Ano 2022/2022 ..."
              />
             </div>
              <div className="w-full">
              <p className="mb-2 font-medium">Ano Rodados</p>
              <Input
               type="text"
               register={register}
               name="km"
               error={errors.km?.message}
               placeholder="Ex: 23.200 ..."
              />
             </div>
          </div>
          <div className="flex w-full mb-3 flex-row items-center gap-4">
              <div className="w-full">
              <p className="mb-2 font-medium">Telefone/Whatsapp</p>
              <Input
               type="text"
               register={register}
               name="whatsapp"
               error={errors.whatsapp?.message}
               placeholder="Ex: 011 99999-9999 ..."
              />
             </div>
              <div className="w-full">
              <p className="mb-2 font-medium">Cidade</p>
              <Input
               type="text"
               register={register}
               name="city"
               error={errors.city?.message}
               placeholder="Ex: Campo grande RJ ..."
              />
             </div>
          </div>
         
           <div className="mb-3">
              <p className="mb-2 font-medium">Preço</p>
              <Input
               type="text"
               register={register}
               name="price"
               error={errors.price?.message}
               placeholder="Ex: R$ 50.000 ..."
              />
          </div>
          <div className="mb-3">
              <p className="mb-2 font-medium">Descrição</p>
              <textarea className="border-2 w-full rounded-md h-24 px-2"
               {...register("description")}
               name="description"
               id="description"
               placeholder="digite a descrição completa sobre o carro"
              />
              {errors.description && <p className="mb-1 text-red-500">{errors.description.message}</p>}
          </div>
          <button className="w-full rounded-md bg-zinc-900 text-white font-medium h-10">
          Cadastrar
          </button>
        </form>
      </div>
    </ContainerGRID>
  )
}