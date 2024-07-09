import LoginPage from './pages/LoginPage'
import SettingsPage from './pages/SettingsPage'
import AdminPage from './pages/admin/AdminPage'
import UsersPage from './pages/user/UsersPage'
import RegisterPage from './pages/RegisterPage'
import UserManagementPage from './pages/user/UserManagementPage'
import CategoryManagementPage from './pages/category/CategoryManagementPage'

export default function App() {
  return (
    <div>App
      <AdminPage></AdminPage>
      <LoginPage></LoginPage>
      <RegisterPage></RegisterPage>
      <SettingsPage></SettingsPage>
      <UsersPage></UsersPage>
      <UserManagementPage></UserManagementPage>
      <CategoryManagementPage></CategoryManagementPage>
    </div>
  )
}
