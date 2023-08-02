export function Input({ placeholder, ...rest }) {
    return (<input class="self-stretch px-3 py-2 bg-zinc-950 rounded-md border border-zinc-800 text-zinc-400 " placeholder={placeholder} {...rest}/>);
}