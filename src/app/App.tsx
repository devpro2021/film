import { ProviderStack } from '@app/providers/ProviderStack';
import { Routes } from '@app/routes/Routes';
import { MainLayout } from '@shared/ui/MainLayout/MainLayout';

import { Main } from '@widgets/Main';
import { Sidebar } from '@widgets/Sidebar';
import { Toolbar } from '@widgets/Toolbar';

import './styles/index.scss';

export function App() {
  return (
      <ProviderStack>
          <MainLayout>
              <Sidebar />
              <Main>
                  <Toolbar />
                  <Routes />
              </Main>
          </MainLayout>

      </ProviderStack>
  );
}
