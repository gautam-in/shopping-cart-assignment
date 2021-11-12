export default function Loader({ loading }) {
  if (loading) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
}
