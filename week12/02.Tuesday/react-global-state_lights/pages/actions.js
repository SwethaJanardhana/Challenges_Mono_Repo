import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({
  handleAllLightsOff,
  handleAllLightsOn,
  isAllLightsOffButtonDisabled,
  isAllLightsOnButtonDisabled,
}) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        handleAllLightsOff={handleAllLightsOff}
        handleAllLightsOn={handleAllLightsOn}
        isAllLightsOffButtonDisabled={isAllLightsOffButtonDisabled}
        isAllLightsOnButtonDisabled={isAllLightsOnButtonDisabled}
      />
    </>
  );
}
