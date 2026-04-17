import {HomePage} from "@/heroes/pages/home/HomePage.tsx";
import {HeroPage} from "@/heroes/pages/hero/HeroPage.tsx";
import {SearchPage} from "@/heroes/pages/search/SearchPage.tsx";
import {AdminPage} from "@/admin/pages/AdminPage.tsx";
import {createHashRouter} from "react-router";
import {HeroesLayout} from "@/heroes/layout/HeroesLayout.tsx";
import {AdminLayout} from "@/admin/layout/AdminLayout.tsx";

export const appRouter = createHashRouter([
    {
      path: '/',
      element: <HeroesLayout />,
      children: [
          {
              index: true,
              element: <HomePage />
          },
          {
              path: 'heroes/:id',
              element: <HeroPage />
          },
          {
              path: 'search',
              element: <SearchPage />
          },
      ]
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <AdminPage />
            }
        ]
    }
])