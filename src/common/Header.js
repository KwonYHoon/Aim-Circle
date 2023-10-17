import "../css/Header.css"

export default function Header() {
    return (
        <>
        <header clssName = "mw">
            <a href = "#"><h1>Aim-Circle</h1></a>
            <nav>
                <a href = "#">로그인</a>
                <a href = "#">회원가입</a>
            </nav>
        </header>
        <div className = "category">
            <a href = "#">Game</a>
            <a href = "#">Rank</a>
        </div>
        </>
    );
}