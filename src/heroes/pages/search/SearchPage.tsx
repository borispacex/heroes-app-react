import {CustomJumbotron} from "@/components/custom/CustomJumbotron.tsx";
import {HeroStats} from "@/heroes/components/HeroStats.tsx";
import {SearchControls} from "@/heroes/pages/search/ui/SearchControls.tsx";
import {CustomBreadcrumbs} from "@/components/custom/CustomBreadcrumbs.tsx";

export const SearchPage = () => {
    return (
        <>
          <CustomJumbotron
              title='Busqueda de Super Heroes'
              description='Descubre, explora y administra super heroes'
          />

          <CustomBreadcrumbs currentPage='Buscador de Heroes'
            breadcrumbs={
              [
                  {label:'Home',to:'/'},
                  {label:'Home2',to:'/'},
                  {label:'Home3',to:'/'}
              ]
            }
          />

          {/* Stats Dashboard */}
          <HeroStats />

          {/* ilter and Search */}
          <SearchControls />

        </>
    )
}