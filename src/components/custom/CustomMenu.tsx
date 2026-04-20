import {
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenu,
} from "@/components/ui/navigation-menu.tsx";
import {Link, useLocation} from "react-router";
import {cn} from "@/lib/utils.ts";

export const CustomMenu = () => {

    const { pathname } = useLocation();

    const isActive = (path: string) => {
        return pathname === path;
    }

    return (
        <NavigationMenu>
            <NavigationMenuList>
                {/*Home*/}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild
                        className={ cn(isActive('/') && "bg-slate-200", 'p-2 rounded-md') }
                    >
                        <Link to="/">Inicio</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                {/* Search */}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild
                        className={ cn(isActive('/search') && "bg-slate-200", 'p-2 rounded-md')}
                    >
                        <Link to="/search">Buscar super heroes</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}