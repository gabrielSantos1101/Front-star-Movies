export function Button({ onClick, title, ...rest }) {
    return (
    <button class="self-stretch gap-2 text-zinc-900 bg-gray-800 text-sm font-medium" onClick={onClick} {...rest}>
        {title}
    </button>
    );
}
