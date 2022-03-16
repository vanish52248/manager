import { useNavigate } from "react-router-dom"

export const RoutingLogic = (): {
    toMenu: () => void,
    toBodyManage: () => void,
} => {
    const navigate = useNavigate();
    const toMenu = () => {
        navigate("/");
    };

    const toBodyManage = () => {
        navigate("/body_manage");
    };

    return {
        toMenu: toMenu,
        toBodyManage: toBodyManage
    };
};