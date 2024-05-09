import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: IndexPage,
});

function IndexPage() {
  return (
    <div>
      <h3>Welcome Home!</h3>
    </div>
  );
}
