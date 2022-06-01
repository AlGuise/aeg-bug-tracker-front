import { useStore } from "./user/store";

export default function FilterInput() {
    const filter = useStore((state) => state.filter);
    const setFilter = useStore((state) => state.setFilter);
    return(
        <input value={filter} onChange={(e) => setFilter (e.target.value)}/>
    )
}