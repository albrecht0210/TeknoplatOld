import { useNavigate } from "react-router-dom";

function NoAuth() {
    const navigate = useNavigate();

    return (
        <>
            <img 
                src="/sample/wildcat.png" 
                alt="WildcatLogo" 
                style={{ width: "5rem" }}
                onClick={() => navigate("/")}
            />
        </>
    );
}

export default NoAuth;