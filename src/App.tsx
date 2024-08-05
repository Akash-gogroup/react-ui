import { Button, FloatingInput, Input } from "gogroup-ui";

function App() {
  return (
    <>
      <div className="flex">
        <Button btnText="Hello" variant="secondary" />
        <Input placeholder="username" />
        <FloatingInput label="username" />
      </div>
    </>
  );
}

export default App;
