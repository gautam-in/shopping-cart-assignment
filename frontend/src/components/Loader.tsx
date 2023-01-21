type Props = {}

export const Loader = (props: Props) => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        backgroundColor: "rgba(0,0,0,.2)",
        zIndex: 400,
      }}
    >
      <h2>Loading......</h2>
    </div>
  )
}
