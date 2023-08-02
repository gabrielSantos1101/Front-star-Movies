import { Popcorn } from "phosphor-react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";



export function SignIn() {
    return (
        <div class="w-full h-full flex">
            <div class="grow shrink basis-0 self-stretch p-10 bg-BG-800 border-zinc-800 flex-col justify-between flex">
                <div class="justify-start items-center gap-2 inline-flex">
                    <h2 class="text-white text-[25px] font-bold leading-7 flex gap-1"> <Popcorn />  Star Movies</h2>
                </div>
                <div class="self-stretch h-28">
                    <p class="self-stretch text-white text-lg font-normal leading-7">Cillum dolore sint labore commodo aute dolore cupidatat labore esse. Consectetur pariatur veniam in dolor ullamco ex elit eu fugiat voluptate elit do esse laborum.</p>
                    <a class="text-white text-sm font-normal leading-tight" target="_blank" href="#">Rocketseat</a>
                </div>
            </div>

            <div class="relative grow shrink basis-0 self-stretch bg-BG_900 flex-col justify-center items-center gap-6 flex">
                <Button className="absolute top-10 right-12 py-2 px-5 bg-zinc-950 rounded-md border border-slate-800 text-neutral-50" title={"Cadastre-se"} />
               
                <div class="py-2 text-center">
                    <h1 class="text-neutral-50 text-2xl font-semibold leading-loose">Faça o login</h1>
                    <p class="text-zinc-400 text-sm font-normal leading-tight">Digite o seu e-mail abaixo para acessar o Star Movies 🍿</p>
                </div>
                
                <div class="flex-col items-center gap-6 flex">
                    <div class="self-stretch flex-col items-center gap-4 flex">
                        <Input placeholder={"email@explorer.com"} />

                        <Input placeholder={"senha"} />

                        <Button className="self-stretch bg-neutral-50 py-2 rounded-md" title={"Acessar com e-mail"} />

                    </div>
                </div>
            </div>
        </div>
    )
}