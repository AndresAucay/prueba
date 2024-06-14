import {
  Authenticated,
  GitHubBanner,
  Refine,
} from "@refinedev/core";
import {
  ErrorComponent,
  ThemedLayoutV2,
  ThemedSiderV2,
  useNotificationProvider,
} from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";
import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { App as AntdApp } from "antd";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { authProvider } from "./authProvider";
import { Header } from "./components/header";
import { ColorModeContextProvider } from "./contexts/color-mode";
import { CharactersCreate, CharactersEdit, CharactersList, CharactersShow } from "./pages/Personajes";
import { MoviesCreate, MoviesEdit, MoviesList, MoviesShow } from "./pages/Peliculas";
import { ScenesCreate, ScenesEdit, ScenesList, ScenesShow } from "./pages/Escenas";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { ForgotPassword } from "./pages/forgotPassword";

// Importar RefineKbarProvider y RefineKbar
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

function App() {
  return (
    <BrowserRouter>
      <GitHubBanner />
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <AntdApp>
            <Refine
              dataProvider={dataProvider("http://localhost:8081")}
              notificationProvider={useNotificationProvider}
              routerProvider={routerBindings}
              authProvider={authProvider}
              resources={[
                {
                  name: "characters",
                  list: "/personajes",
                  create: "/personajes/create",
                  edit: "/personajes/edit/:id",
                  show: "/personajes/show/:id",
                  meta: {
                    canDelete: true,
                  },
                },
                {
                  name: "movies",
                  list: "/peliculas",
                  create: "/peliculas/create",
                  edit: "/peliculas/edit/:id",
                  show: "/peliculas/show/:id",
                  meta: {
                    canDelete: true,
                  },
                },
                {
                  name: "scenes",
                  list: "/escenas",
                  create: "/escenas/create",
                  edit: "/escenas/edit/:id",
                  show: "/escenas/show/:id",
                  meta: {
                    canDelete: true,
                  },
                },
              ]}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                useNewQueryKeys: true,
                projectId: "zwST1j-VQw1A5-Klb8uQ", // Reemplazar con tu projectId
              }}
            >
              <Routes>
                <Route
                  element={
                    <Authenticated
                      key="authenticated-inner"
                      fallback={<CatchAllNavigate to="/login" />}
                    >
                      <ThemedLayoutV2
                        Header={() => <Header sticky />}
                        Sider={(props) => <ThemedSiderV2 {...props} fixed />}
                      >
                        <Outlet />
                      </ThemedLayoutV2>
                    </Authenticated>
                  }
                >
                  <Route
                    index
                    element={<NavigateToResource resource="characters" />}
                  />
                  <Route path="/personajes">
                    <Route index element={<CharactersList />} />
                    <Route path="create" element={<CharactersCreate />} />
                    <Route path="edit/:id" element={<CharactersEdit />} />
                    <Route path="show/:id" element={<CharactersShow />} />
                  </Route>
                  <Route path="/peliculas">
                    <Route index element={<MoviesList />} />
                    <Route path="create" element={<MoviesCreate />} />
                    <Route path="edit/:id" element={<MoviesEdit />} />
                    <Route path="show/:id" element={<MoviesShow />} />
                  </Route>
                  <Route path="/escenas">
                    <Route index element={<ScenesList />} />
                    <Route path="create" element={<ScenesCreate />} />
                    <Route path="edit/:id" element={<ScenesEdit />} />
                    <Route path="show/:id" element={<ScenesShow />} />
                  </Route>
                  <Route path="*" element={<ErrorComponent />} />
                </Route>
                <Route
                  element={
                    <Authenticated
                      key="authenticated-outer"
                      fallback={<Outlet />}
                    >
                      <NavigateToResource />
                    </Authenticated>
                  }
                >
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                </Route>
              </Routes>

              <RefineKbar />
              <UnsavedChangesNotifier />
              <DocumentTitleHandler />
            </Refine>
          </AntdApp>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
