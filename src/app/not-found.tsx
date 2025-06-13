export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        padding: "0 2rem",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        404 - ページが見つかりません
      </h1>
      <p>お探しのページは存在しないか、削除された可能性があります。</p>
      <a
        href="/"
        style={{
          marginTop: "1.5rem",
          padding: "0.75rem 1.5rem",
          backgroundColor: "var(--primary-color, #ff1355)",
          color: "white",
          borderRadius: "0.5rem",
          textDecoration: "none",
        }}
      >
        ホームに戻る
      </a>
    </div>
  );
}
