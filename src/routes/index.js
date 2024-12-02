import { useRoutes } from "react-router-dom";

import LoginRoutes from "./LoginRoutes"


export default function ThemeRoutes() {
    return useRoutes([LoginRoutes])
}