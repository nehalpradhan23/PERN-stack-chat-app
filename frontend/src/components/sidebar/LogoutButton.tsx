import { LogOut } from "lucide-react";
import useLogout from "../../hooks/useLogout";
import { useAuthContext } from "../../context/AuthContext";

const LogoutButton = () => {
  const { logout } = useLogout();
  const { authUser } = useAuthContext();

  return (
    <div className="mt-auto flex gap-3">
      <LogOut
        className="w-6 h-6 cursor-pointer hover:text-red-600"
        onClick={logout}
      />
      <span className="font-semibold">{authUser?.fullName}</span>
    </div>
  );
};
export default LogoutButton;
