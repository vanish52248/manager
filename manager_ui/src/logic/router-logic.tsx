// router-logic.tsx -> router.tsx -> App.tsx -> index.html
// 実際にPathを受け取った際のロジックを記載する
import { useNavigate } from "react-router-dom"

export const RoutingLogic = (): {
    toMenu: () => void,
    toPartyRegister: () => void,
} => {
    const navigate = useNavigate();
    const toMenu = () => {
        navigate("/");
    };

    const toPartyRegister = () => {
        navigate("/party_register");
    };

    return {
        toMenu: toMenu,
        toPartyRegister: toPartyRegister
    };
};