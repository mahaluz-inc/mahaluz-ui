import axios from "axios";

export async function autocompletePlaces(value) {
    return (await axios.get(`${process.env.NEXT_PUBLIC_API_GATEWAY}/location/autocomplete/${encodeURIComponent(value)}`)).data;
}