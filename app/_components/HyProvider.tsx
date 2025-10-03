import { Client, HydrationProvider } from "react-hydration-provider";

export function HyProvider({children}:{children:React.ReactNode}){
    return <HydrationProvider>
        <Client>
            {children}
        </Client>
    </HydrationProvider>
}