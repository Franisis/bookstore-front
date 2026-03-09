import { AuthorsProvider } from "../context/AuthorsContext"
import './MainLayout.css'

export default function RootLayout({ children }:any) {
  return (
    
        <div>
          <nav>
            <a href="/authors">Autores</a>
            <a href="/create">Crear Autor</a>
          </nav>
              <AuthorsProvider>
              {children}
              </AuthorsProvider>
        </div>
    
  );
}