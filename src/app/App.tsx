import './styles/index.scss'
import {MainLayout} from "@shared/ui/MainLayout/MainLayout.tsx";
import {Sidebar} from "@widgets/Sidebar";
import {Main} from "@widgets/Main";

export function App() {

    return <MainLayout>
        <Sidebar/>
        <Main/>
    </MainLayout>

}