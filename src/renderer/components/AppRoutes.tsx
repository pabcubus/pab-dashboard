import { Route, Routes } from "react-router-dom";

type Routes = {
  path: string;
  element: React.ReactNode;
  title: string;
}

type AppRoutesProps = {
  routes: Routes[];
};

const AppRoutes = ({ routes }: AppRoutesProps) => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
